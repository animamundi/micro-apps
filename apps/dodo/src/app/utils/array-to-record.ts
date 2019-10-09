import { isKey } from './is-key';

export const arrayToRecord = <T, K extends keyof T>(key: K, array: T[]) =>
  array.reduce(
    (accum, item) => {
      const prop = item[key];

      if (!isKey(prop)) {
        throw new Error(`Property ${key} evaluated to be a non key type`);
      }

      return { ...accum, [prop]: item };
    },
    {} as Record<K, T>,
  );
