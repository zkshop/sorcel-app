import type { Config } from '@jest/types';
import jestConfigBase from '../../jest.config.base';

const config: Config.InitialOptions = {
  ...jestConfigBase,
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
export default config;
