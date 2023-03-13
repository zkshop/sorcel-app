import type { Utility_Enum } from '@3shop/apollo';
import type { ElementType } from 'react';
import { Link } from 'react-router-dom';

type GetElementPropsType = {
  utility: Utility_Enum;
  isLocked: boolean;
  externalLink?: string;
  productPageLink: string;
  targetAttribute?: string;
  onOpen: () => void;
};

type GetElementPropsReturnType = {
  elementType: ElementType;
  elementProps: any;
};

export const getElementProps = ({
  utility,
  isLocked,
  externalLink,
  productPageLink,
  targetAttribute = '_blank',
  onOpen,
}: GetElementPropsType): GetElementPropsReturnType => {
  const STATES = {
    LOCKED: 'LOCKED',
    EMAIL_MODAL: 'EMAIL_MODAL',
    EXTERNAL_LINK: 'EXTERNAL_LINK',
    ECOMMERCE: 'ECOMMERCE',
  };

  let elementState;

  if (isLocked) {
    elementState = STATES.LOCKED;
  } else {
    elementState = STATES[utility];
  }

  switch (elementState) {
    case STATES.LOCKED:
      return {
        elementType: 'div',
        elementProps: {
          style: {
            cursor: 'auto',
          },
        },
      };
    case STATES.EXTERNAL_LINK:
      return {
        elementType: 'a',
        elementProps: {
          href: externalLink,
          target: targetAttribute,
          rel: 'noreferrer',
        },
      };
    case STATES.EMAIL_MODAL:
      return {
        elementType: 'div',
        elementProps: {
          onClick: onOpen,
        },
      };
    case STATES.ECOMMERCE:
    default:
      return {
        elementType: Link,
        elementProps: { to: productPageLink },
      };
  }
};
