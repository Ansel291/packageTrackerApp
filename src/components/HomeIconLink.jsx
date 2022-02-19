import './styles/HomeIconLink.css'
import { IconContext } from 'react-icons/lib'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function HomeIconLink() {
  return (
    <IconContext.Provider value={{}}>
      <div className='home-link'>
        <Link to='/'>
          <AiOutlineHome />
        </Link>
      </div>
    </IconContext.Provider>
  )
}

export default HomeIconLink
