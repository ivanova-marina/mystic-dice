import type { Meta, StoryObj } from '@storybook/react';
import { DieButton } from './DieButton';

const meta: Meta<typeof DieButton> = {
  component: DieButton
};

export default meta;
type Story = StoryObj<typeof DieButton>;

export const DFourButton: Story = {
  args: {
    label: 'D4'
  }
};
