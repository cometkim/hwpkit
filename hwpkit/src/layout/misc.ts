import { Hwpunit } from '../model/document';
import { Rect, Size2d } from '../model/geom';

export interface SizeConstraint {
  maxWidth: Hwpunit;
  maxHeight: Hwpunit;
}

export interface PaperInfo extends Size2d {
  /**
   * padding 안쪽의 사각형
  */
  page: Rect;
}

export interface ColumnInfo extends Rect {}

const c_whitespace = ' '.charCodeAt(0);
const c_carriageReturn = '\r'.charCodeAt(0);
export function isWhitespaceCharCode(charCode: number): boolean {
  return charCode === c_whitespace || charCode === c_carriageReturn;
}

const c_ㄱ = 'ㄱ'.charCodeAt(0);
const c_ㅎ = 'ㅎ'.charCodeAt(0);
const c_가 = '가'.charCodeAt(0);
const c_힣 = '힣'.charCodeAt(0);
export function isHangulCharCode(charCode: number): boolean {
  if (charCode >= c_ㄱ && charCode <= c_ㅎ) return true;
  if (charCode >= c_가 && charCode <= c_힣) return true;
  return false;
}
