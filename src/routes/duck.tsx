import { Link, createFileRoute } from '@tanstack/react-router'
import { Suspense, lazy } from 'react';
import logo from '../logo.svg'

const Duck = lazy(() => import('@/components/canvas/Duck'))
const View = lazy(() => import('@/components/canvas/View'))
const Common = lazy(() => import('@/components/canvas/Common'))

export const Route = createFileRoute('/duck')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <View orbit className='relative h-full  sm:h-48 sm:w-full'>
          <Suspense fallback={null}>
             <Duck scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
            <Common color={'lightpink'} />
          </Suspense>
        </View>
        <Link
          to={'/'}
        >
          index
        </Link>
      </header>
    </div>
  )
}
