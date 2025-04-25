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
    url: 'models/D4.glb'
  }
};

export const DSix: Story = {
  args: {
    url: 'models/D6.glb'
  }
};

export const DEight: Story = {
  args: {
    url: 'models/D8.glb'
  }
};

export const DTen: Story = {
  args: {
    url: 'models/D10.glb'
  }
};

export const DOneHundred: Story = {
  args: {
    url: 'models/D100.glb'
  }
};

export const DTwelve: Story = {
  args: {
    url: 'models/D12.glb'
  }
};

export const DTwenty: Story = {
  args: {
    url: 'models/D20.glb'
  }
};
