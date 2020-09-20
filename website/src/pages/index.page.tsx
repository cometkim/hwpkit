import React, { useEffect, useState } from 'react';
import { CanvasKit } from 'canvaskit-wasm';
import axios from 'axios';
import HWPDocument from 'hwp.js/build/models/document';
import { parse } from 'hwp.js';
import { RenderingModel } from 'hwpkit/lib';
import layout from 'hwpkit/lib/layout';

import { getErrorMessage } from '../misc/error';
import { useCanvasKitState, canvaskitContext } from '../canvaskit';
import HwpPage from '../hwp/HwpPage';

const Page: React.FC = () => {
  const { hwp, error } = useHwp('/hwp/empty.hwp');
  const CanvasKit = useCanvasKitState();
  const renderingModel = useRenderingModel(CanvasKit, hwp);
  const {
    page,
    pageCount,
    currentPage,
  } = usePage(renderingModel);
  if (error) return <>{getErrorMessage(error)}</>;
  if (!CanvasKit) return null;
  return <canvaskitContext.Provider value={CanvasKit}>
    page: {currentPage + 1} / {pageCount}
    {page && <HwpPage page={page}/>}
  </canvaskitContext.Provider>;
};
export default Page;

function usePage(renderingModel?: RenderingModel) {
  const pageCount = renderingModel?.pages.length ?? 0;
  const [currentPage, setCurrentPage] = useState(0);
  const page = renderingModel?.pages[currentPage];
  useEffect(() => {
    setCurrentPage(Math.max(0, Math.min(currentPage, pageCount - 1)));
  }, [pageCount]);
  return {
    page,
    pageCount,
    currentPage,
    setCurrentPage,
  };
}

function useRenderingModel(CanvasKit?: CanvasKit, hwp?: HWPDocument) {
  const [renderingModel, setRenderingModel] = useState<RenderingModel>();
  useEffect(() => {
    if (!CanvasKit || !hwp) return;
    setRenderingModel(layout({ CanvasKit, document: hwp }));
  }, [CanvasKit, hwp]);
  return renderingModel;
}

function useHwp(url: string) {
  const [error, setError] = useState<Error>();
  const [hwp, setHwp] = useState<HWPDocument>();
  useEffect(() => {
    axios({
      url,
      responseType: 'arraybuffer'
    }).then(res => {
      const hwp = parse(Buffer.from(res.data), { type: 'buffer' });
      setHwp(hwp);
    }).catch(err => {
      setError(err);
    });
  }, [url]);
  return { hwp, error };
}
