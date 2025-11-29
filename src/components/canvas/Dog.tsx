import { useGLTF } from '@react-three/drei';

export default function Dog(props: any) {
  const { scene } = useGLTF('/dog.glb')
  return <primitive object={scene} {...props} />
}