import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button/Button';
import { action } from '@storybook/addon-actions';
const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
    children: {
      defaultValue: 'default button',
    },
  },
};
export default meta;
const Template: Story<Props> = (args) => <Button {...args} />;
// export const Default = () => <Button variant="primary"> CLICK ME</Button>;
// export const Secondary = () => (
//   <Button variant="secondary"> CLICK Secondary</Button>
//);
export const Default = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  arrow: 'back',
  variant: 'secondary',
  children: 'CLICK Secondary',
  onClick: action('Secondary click'),
};
