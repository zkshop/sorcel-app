import type { Utility_Enum } from '@3shop/apollo';
import type { ElementType } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

type GetElementPropsType = {
  utility: Utility_Enum;
  isLocked: boolean;
  shippingLink?: string;
  onClick: () => void;
};

type GetElementPropsReturnType = {
  elementType: ElementType;
  elementProps: any;
};

const STATES = {
  LOCKED: 'LOCKED',
  SURVEY: 'SURVEY',
  EMAIL_MODAL: 'EMAIL_MODAL',
  EXTERNAL_LINK: 'EXTERNAL_LINK',
  ECOMMERCE: 'ECOMMERCE',
};

export const getElementProps = ({
  utility,
  isLocked,
  shippingLink,
  onClick,
}: GetElementPropsType): GetElementPropsReturnType => {
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
        elementProps: {},
      };
    case STATES.SURVEY:
      return {
        elementType: Button,
        elementProps: {
          onClick,
          style: { cursor: 'pointer' },
        },
      };
    case STATES.ECOMMERCE:
    default:
      return {
        elementType: Link,
        elementProps: { to: shippingLink },
      };
  }
};
