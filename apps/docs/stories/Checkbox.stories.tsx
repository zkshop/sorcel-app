import React from 'react';
import { Checkbox } from '@3shop/ui';
import type { ComponentStory, Meta } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

type CheckboxStory = ComponentStory<typeof Checkbox>;

const Template: CheckboxStory = (args) => <Checkbox {...args} />;

export const Primary: CheckboxStory = Template.bind({});
Primary.args = {};
