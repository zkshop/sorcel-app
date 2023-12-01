// import { helloWorld } from '../../../shop/testImport';
// import { SorcelAppCreator } from '../../../../infra/SorcelAppCreator';
// import { http } from '@google-cloud/functions-framework';

// const appTest = SorcelAppCreator();
// http('helloGET', (req: any, res: any) => {
//     const age = 2;
//     const _test = helloWorld();
//     res.send(`Hello World! ${age} ${_test}`);
//   });

import { helloWorld } from '../../../shop/testImport';
import { HttpFunction } from '@google-cloud/functions-framework';
import { testUserPromise } from '../../../../infra/SorcelAppCreator';

// CF_ENTRY_POINT
export const helloTwo: HttpFunction = async (req: any, res: any) => {
    const age = 2;
    const _test = helloWorld();
    let user = undefined;
        user = await testUserPromise();
    res.send(`Function 2${age} ${_test} ${JSON.stringify(user)}`);
}