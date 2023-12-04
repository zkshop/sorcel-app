var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { envVars } from '@3shop/config';
import axios from 'axios';
export function PaperWalletClient() {
    return {
        getToken: (code) => __awaiter(this, void 0, void 0, function* () {
            const res = yield axios({
                method: 'POST',
                url: 'https://paper.xyz/api/v1/oauth/token',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${envVars.SECRET_PAPER}`,
                },
                data: {
                    code,
                    clientId: envVars.PAPER_CLIENT_ID,
                },
            });
            if (res.status !== 200) {
                throw new Error('Error getting user token');
            }
            return res.data.userToken;
        }),
        getWalletAddress: (userToken) => __awaiter(this, void 0, void 0, function* () {
            const res = yield axios({
                method: 'POST',
                url: 'https://paper.xyz/api/v1/oauth/user-details',
                headers: {
                    Authorization: `Bearer ${envVars.SECRET_PAPER}`,
                },
                data: {
                    userToken,
                    clientId: envVars.PAPER_CLIENT_ID,
                },
            });
            return res.data;
        }),
    };
}
