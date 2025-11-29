import type { ParentComponent } from '@/types/general.ts';
import { r3f } from '@/helpers/global'

export const Three: ParentComponent = ({ children }) => {
  return <r3f.In>{children}</r3f.In>
}
