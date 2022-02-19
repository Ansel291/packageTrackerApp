import './styles/OrderItem.css'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons/lib'
import { MdCallReceived, MdNewLabel, MdLocalShipping } from 'react-icons/md'
import { Link } from 'react-scroll'
import { RiUserReceived2Fill } from 'react-icons/ri'
import OrderContext from '../context/OrderContext'

function OrderItem({ item }) {
  const { deleteOrder, editOrder } = useContext(OrderContext)

  return (
    <IconContext.Provider
      value={{
        size: '1.3em',
      }}
    >
      <div className={`order-card ${item.orderBackordered && 'backordered'}`}>
        {item.orderStatus === 'orderReceived' && (
          <div className='order-status-display order-item-order-received'>
            <MdCallReceived />
          </div>
        )}
        {item.orderStatus === 'labelCreated' && (
          <div className='order-status-display order-item-label-created'>
            <MdNewLabel />
          </div>
        )}
        {item.orderStatus === 'orderInTransit' && (
          <div className='order-status-display order-item-in-transit'>
            <MdLocalShipping />
          </div>
        )}
        {item.orderStatus === 'orderDelivered' && (
          <div className='order-status-display order-item-order-delivered'>
            <RiUserReceived2Fill />
          </div>
        )}
        <button onClick={() => deleteOrder(item.id)} className='close'>
          <FaTimes />
        </button>
        <Link
          to='header'
          smooth={true}
          duration={300}
          spy={true}
          exact='true'
          offset={0}
          onClick={() => editOrder(item)}
          className='edit'
        >
          <FaEdit />
        </Link>
        <div className='order-number-display'>
          <span className='order-number-label'>Order Number: </span>
          {item.orderNumber}
        </div>
        {item.orderHasNotes && (
          <div className='order-notes'>Order Notes: {item.orderNote}</div>
        )}
      </div>
    </IconContext.Provider>
  )
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default OrderItem
