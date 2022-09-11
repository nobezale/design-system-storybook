import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonMui, PropsButtonMui } from '../src/ButtonMui/ButtonMui';

import { action } from '@storybook/addon-actions';
const meta: Meta = {
  title: 'ButtonMui',
  component: ButtonMui,
  argTypes: {
    onClick: { action: 'click' },
    children: {
      defaultValue: 'default button',
    },
  },
};
export default meta;
const Template: Story<PropsButtonMui> = (args) => <ButtonMui {...args} />;
// export const Default = () => <Button variant="primary"> CLICK ME</Button>;
// export const Secondary = () => (
//   <Button variant="secondary"> CLICK Secondary</Button>
//);
export const Default = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'CLICK Secondary',
  onClick: action('Secondary click'),
};
