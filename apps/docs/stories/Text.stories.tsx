import React from 'react';
import { Text } from '@3shop/ui';
import type { ComponentStory, Meta } from '@storybook/react';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
};

export default meta;

type TextStory = ComponentStory<typeof Text>;

const Template: TextStory = (args) => <Text {...args}>This is a Text</Text>;

export const Title = Template.bind({});
Title.args = {
  variant: 'title',
};

export const H900 = Template.bind({});
H900.args = {
  variant: 'H900',
};

export const H800 = Template.bind({});
H800.args = {
  variant: 'H800',
};

export const H700 = Template.bind({});
H700.args = {
  variant: 'H700',
};

export const H600 = Template.bind({});
H600.args = {
  variant: 'H600',
};

export const H500 = Template.bind({});
H500.args = {
  variant: 'H500',
};

export const H400 = Template.bind({});
H400.args = {
  variant: 'H400',
};

export const H300 = Template.bind({});
H300.args = {
  variant: 'H300',
};

export const H200 = Template.bind({});
H200.args = {
  variant: 'H200',
};

export const H100 = Template.bind({});
H100.args = {
  variant: 'H100',
};

export const UIText = Template.bind({});
UIText.args = {
  variant: 'UIText',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
};

export const Code = Template.bind({});
Code.args = {
  variant: 'code',
};

export const Pointer = Template.bind({});
Pointer.args = {
  variant: 'pointer',
};
