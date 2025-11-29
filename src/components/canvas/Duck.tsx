import { useGLTF } from '@react-three/drei';

export default function Duck(props: any) {
  const { scene } = useGLTF('/duck.glb')
  return <primitive object={scene} {...props} />
}