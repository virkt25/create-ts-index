// tslint:disable no-console

import { ICreateTsIndexOption } from '../ICreateTsIndexOption';
import { TypeScritIndexWriter } from '../TypeScritIndexWriter';

describe('cti-test', () => {
  test('index-clean', async () => {
    const cti = new TypeScritIndexWriter();
    const option: ICreateTsIndexOption = TypeScritIndexWriter.getDefaultOption();

    await cti.clean(option);
  });
});
