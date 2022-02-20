import './styles/Header.css'
import { IconContext } from 'react-icons/lib'
import { FaShippingFast } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <IconContext.Provider
      value={{
        color: 'white',
        size: '1.9em',
        className: 'package-icon',
      }}
    >
      <header id='header'>
        <div className='container'>
          <Link to='/'>
            <div className='header-container'>
              <FaShippingFast />
              <h2>Package Tracker</h2>
            </div>
          </Link>
        </div>
      </header>
    </IconContext.Provider>
  )
}

export default Header
