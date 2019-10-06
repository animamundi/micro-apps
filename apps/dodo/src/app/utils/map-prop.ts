import { map } from 'rxjs/operators';

export const mapProp = <T, K extends keyof T>(prop: K) =>
  map((obj: T) => obj[prop]);
