'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const domains_1 = require('@3shop/domains');
const apollo_1 = require('@3shop/apollo');
const NftReaderClient_1 = require('../infra/NftReaderClient');
const matchProductGate_1 = require('../utils/matchProductGate');
const http_status_1 = require('http-status');
const method_1 = require('../middlewares/method');
const allowCors_1 = require('../middlewares/allowCors');
const walletScrapper = (0, domains_1.NftService)((0, NftReaderClient_1.NftReaderClient)());
async function handler(req, res) {
  const { address, productId } = req.query;
  if (!address || !productId) {
    return res.status(http_status_1.BAD_REQUEST).send('Missing address or productId');
  }
  const response = await apollo_1.gqlRequestClient.get.GetProductById({
    id: productId,
  });
  const nfts = await walletScrapper.getWalletNfts(address);
  if (!response.product)
    return res.status(http_status_1.INTERNAL_SERVER_ERROR).send('Product not found');
  const matchedGates = (0, matchProductGate_1.gateVerifier)(response.product.gate, nfts);
  const isGranted = matchedGates.length > 0 || response.product.gate.length === 0;
  return res.status(http_status_1.OK).send({ isGranted, address, productId });
}
exports.default = (0, allowCors_1.allowCors)((0, method_1.method)('GET', handler));
