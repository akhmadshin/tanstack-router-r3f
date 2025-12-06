import { Canvas  } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import * as THREE from 'three'
import type { RootState } from '@react-three/fiber/dist/declarations/src/core/store';
import type { CanvasProps } from '@react-three/fiber';

import { r3f } from '@/helpers/global'

const onCreated = (state: RootState) => (state.gl.toneMapping = THREE.AgXToneMapping)

export default function Scene(props: CanvasProps) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}
      onCreated={onCreated}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  )
}
