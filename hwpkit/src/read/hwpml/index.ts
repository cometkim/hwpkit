import { DocumentModel } from '../../model/document';
import { parse, Element } from '../naive-xml-parser';
import { HwpmlHead, readHwpmlHead } from './head';
import { el2obj } from './misc';

export function readHwpml(text: string): DocumentModel {
  const hwpmlDocument = el2obj<HwpmlDocument>(parse(text));
  const hwpmlHead = el2obj<HwpmlHead>(hwpmlDocument.HEAD);
  const result: DocumentModel = {
    head: readHwpmlHead(hwpmlHead),
    body: {} as any, // TODO
  };
  console.log({ result });
  return result;
}

export interface HwpmlDocument {
  HEAD: Element;
  BODY: Element;
  TAIL: Element;
}
