import { filter } from 'rxjs/operators';

import { isNotNil } from './is-not-nil';

export const filterNotNil = () => filter(isNotNil);
