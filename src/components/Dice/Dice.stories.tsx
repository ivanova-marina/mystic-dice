import type { Meta, StoryObj } from '@storybook/react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Dice } from './Dice';

const meta: Meta<typeof Dice> = {
  component: Dice,
  render: (args) => (
    <Canvas>
      <ambientLight intensity={3} />
      <Dice {...args} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  )
};

export default meta;
type Story = StoryObj<typeof Dice>;

export const DFour: Story = {
  args: {
    dieSides: 4
  }
};

export const DSix: Story = {
  args: {
    dieSides: 6
  }
};

export const DEight: Story = {
  args: {
    dieSides: 8
  }
};

export const DTen: Story = {
  args: {
    dieSides: 10
  }
};

export const DOneHundred: Story = {
  args: {
    dieSides: 10
  }
};

export const DTwelve: Story = {
  args: {
    dieSides: 12
  }
};

export const DTwenty: Story = {
  args: {
    dieSides: 20
  }
};
