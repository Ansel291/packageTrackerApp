import PropTypes from 'prop-types'
import './styles/Card.css'

function Card({ children }) {
  return <div className='global-card'>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
