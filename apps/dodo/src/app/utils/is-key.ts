import { Key } from '../models';
import { isString } from './is-string';
import { isNumber } from './is-number';
import { isSymbol } from './is-symbol';

export const isKey = (key: any): key is Key =>
  isString(key) || isNumber(key) || isSymbol(key);
