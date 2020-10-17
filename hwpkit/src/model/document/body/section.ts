import type { Hwpunit } from '..';
import type { Paragraph } from './paragraph';

export interface Section {
  def: SecDef;
  paragraphs: Paragraph[];
}

export interface SecDef {
  textDirection: TextDirection;
  spaceColumns: Hwpunit;
  tabStop: Hwpunit;
  pageDef: PageDef;
}

export const enum TextDirection {
  Horizontal,
  Vertical,
}

export interface PageDef {
  landscape: boolean;
  width: Hwpunit;
  height: Hwpunit;
  gutterType: GutterType;
  margin: PageMargin;
}

export const enum GutterType {
  LeftOnly,
  LeftRight,
  TopBottom,
}

export interface PageMargin {
  left: Hwpunit;
  right: Hwpunit;
  top: Hwpunit;
  bottom: Hwpunit;
  header: Hwpunit;
  footer: Hwpunit;
  gutter: Hwpunit;
}
