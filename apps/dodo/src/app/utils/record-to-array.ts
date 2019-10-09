import { Key } from '../models';

export const recordToArray = <K extends Key, T>(record: Record<K, T>) =>
  Object.keys(record).map(key => record[key as K]);
