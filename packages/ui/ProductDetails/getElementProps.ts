import type { ElementType } from 'react';
import { Link } from 'react-router-dom';

type GetElementPropsType = {
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
  isLocked,
  shippingLink,
}: GetElementPropsType): GetElementPropsReturnType => {
  const elementState = isLocked ? STATES.LOCKED : STATES.ECOMMERCE;

  switch (elementState) {
    case STATES.LOCKED:
      return {
        elementType: 'div',
        elementProps: {},
      };

    case STATES.ECOMMERCE:
    default:
      return {
        elementType: Link,
        elementProps: { to: shippingLink },
      };
  }
};
