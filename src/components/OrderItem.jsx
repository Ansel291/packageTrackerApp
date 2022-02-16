import './styles/OrderItem.css'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons/lib'
import { MdCallReceived, MdNewLabel, MdLocalShipping } from 'react-icons/md'
import { RiUserReceived2Fill } from 'react-icons/ri'

function OrderItem({ item, handleDelete }) {
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
        <button onClick={() => handleDelete(item.id)} className='close'>
          <FaTimes />
        </button>
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
