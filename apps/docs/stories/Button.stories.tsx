import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, PlusCircle } from '@3shop/ui';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary = <Button>Label</Button>;

export const Small: Story = {
  render: () => <Button size="small">Label</Button>,
};

export const Disabled: Story = {
  render: () => <Button isDisabled>Label</Button>,
};

export const Rounded: Story = {
  render: () => <Button rounded="base">Label</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Label</Button>,
};

export const WithLeftIcon: Story = {
  render: () => <Button leftIcon={<PlusCircle />}>Label</Button>,
};

export const IsLoading: Story = {
  render: () => (
    <Button loadingText="Label.." isLoading={true}>
      Label
    </Button>
  ),
};

export const Negative: Story = {
  render: () => <Button variant="negative">Label</Button>,
};
