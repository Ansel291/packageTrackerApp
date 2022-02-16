import './styles/AboutIconLink.css'
import { IconContext } from 'react-icons/lib'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <IconContext.Provider
      value={{
        size: '2em',
      }}
    >
      <div className='about-link'>
        <Link to='/about'>
          <IoIosInformationCircleOutline />
        </Link>
      </div>
    </IconContext.Provider>
  )
}

export default AboutIconLink
