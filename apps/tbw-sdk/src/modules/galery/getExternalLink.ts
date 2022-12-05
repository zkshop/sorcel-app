import { Gate } from 'apollo';

// DISCROD
const DISCORD_PRODUCT_ID = '60110df4-2124-407f-adc5-2b5df3a1f122';
const DISCORD_LINK = 'https://discord.gg/KHyCZ84pBC';

// MEMBER STACK
const MEMBER_STACK_PRODUCT_ID_TEST = '4c7946ea-a3d2-4283-b420-c0478dcaf95f';
const MEMBER_STACK_PRODUCT_ID = '51e46fb2-cd9e-4baf-81db-8df9d58b62b2';
const MS_LINK_PREFIX = '#/ms/signup/';
const MS_PAID_PLAN_ID_10_OFF = '6372923763918000040c740f';
const MS_PAID_PLAN_ID_15_OFF = '6372923763918000040c740f';
const MS_PAID_PLAN_ID_20_OFF = '6372938e18ccec00043ee342';
const MS_PAID_PLAN_ID_25_OFF = '637293dc4ddf5200040a4529';
const MS_PAID_PLAN_ID_30_OFF = '6372941e35d73c0004856f95';

const paidPlans = {
  10: MS_PAID_PLAN_ID_10_OFF,
  15: MS_PAID_PLAN_ID_15_OFF,
  20: MS_PAID_PLAN_ID_20_OFF,
  25: MS_PAID_PLAN_ID_25_OFF,
  30: MS_PAID_PLAN_ID_30_OFF,
  default: null,
} as const;

type paidPlansType = typeof paidPlans;

const getPaidPlans = (discount?: keyof paidPlansType) => {
  if (discount && paidPlans[discount]) return paidPlans[discount];
  return paidPlans.default;
};

const getMemberStackLink = (gate: Gate) => {
  const correctplan = getPaidPlans(gate.discount);

  return `${MS_LINK_PREFIX}${correctplan}`;
};

export const getExternalLink = (productId: string, gate: Gate | null) => {
  if (productId === DISCORD_PRODUCT_ID) {
    return DISCORD_LINK;
  }

  // TODO: remove product id test
  if (productId === MEMBER_STACK_PRODUCT_ID || productId === MEMBER_STACK_PRODUCT_ID_TEST) {
    if (!gate) {
      return '';
    }

    return getMemberStackLink(gate);
  }

  return '';
};
