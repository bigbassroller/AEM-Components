import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import LogoTailwind from '../components/logo-tailwind'
import SearchBar from '../components/search-bar'

export default function LayoutHeader({ preview }) {
  return (
    <div className="layout-header">
      <div className="layout-header-container">
         <LogoTailwind/>
      </div>
    </div>
  )
}
