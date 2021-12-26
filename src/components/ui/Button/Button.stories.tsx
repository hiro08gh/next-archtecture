import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const All = Template.bind({});
All.args = {
  children: 'Button'
};
