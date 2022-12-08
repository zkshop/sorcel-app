import { Gate } from 'apollo';

// AMA
const AMA_PRODUCT_ID = '28f10d56-2585-4697-805b-51114ae34250';
const AMA_LINK = 'https://pp1zlmd4hp1.typeform.com/to/AQHEscSY';

// PICTO
const PICTO_PRODUCT_ID = 'a7499000-c6a5-49e6-8d32-d9d4ab413119';
const PICTO_LINK = `mailto:contact@picto.fr?bcc=alexandre@thebigwhale.io&subject=NFT%20The%20Big%20Whale%20x%20Prise%20de%20contact%20Picto&body=Bonjour%20Picto%20!%0D%0A%0D%0AJe%20suis%20abonn%C3%A9%20%C3%A0%20The%20Big%20Whale%20et%2C%20dans%20le%20cadre%20du%20partenariat%20avec%20Picto%2C%20j'aimerais%20acc%C3%A9der%20%C3%A0%20votre%20prestation%20de%20tirage%20et%20encadrement%20de%20mon%20NFT%20The%20Big%20Whale.%0D%0A%0D%0AJe%20suis%20particuli%C3%A8rement%20int%C3%A9ress%C3%A9%20par%20la%20prestation%20%5BChoisir%20une%20prestation%5D%20%3A%0D%0A%0D%0A-%20Cadre%2018x24%20%2F%20Prix%3A%0D%0A-%20Caisse%2040x50%20%2F%20Prix%3A%0D%0A-%20Caisson%20lumineux%20%2F%20Prix%3A%0D%0A%0D%0APourriez-vous%20m'aider%20dans%20le%20processus%20%3F%0D%0A%0D%0AMerci%20beaucoup%20et%20bonne%20journ%C3%A9e%2C%0D%0A%5BVotre%20pr%C3%A9nom%20et%20nom%5D`;

// DISCROD
const DISCORD_PRODUCT_ID = '60110df4-2124-407f-adc5-2b5df3a1f122';
const DISCORD_LINK = 'https://discord.gg/KHyCZ84pBC';

// MEMBER STACK
const MEMBER_STACK_PRODUCT_ID = '51e46fb2-cd9e-4baf-81db-8df9d58b62b2';
const MS_LINK_PREFIX = '#/ms/signup/';
const MS_PAID_PLAN_ID_10_OFF = '6372923763918000040c740f';
const MS_PAID_PLAN_ID_15_OFF = '6372934e63918000040c7431';
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

export const getExternalLink = (productId: string, gate: Gate | null, isAnNftHolder: boolean) => {
  if (!isAnNftHolder) {
    return '';
  }

  if (productId === DISCORD_PRODUCT_ID) {
    return DISCORD_LINK;
  }

  if (productId === AMA_PRODUCT_ID) {
    return AMA_LINK;
  }

  if (productId === PICTO_PRODUCT_ID) {
    return PICTO_LINK;
  }

  if (productId === MEMBER_STACK_PRODUCT_ID) {
    if (!gate) {
      return '';
    }

    return getMemberStackLink(gate);
  }

  return '';
};
