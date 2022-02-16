import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import OrderItem from './OrderItem'

function OrderList({ order, handleDelete }) {
  if (!order || order.length === 0) {
    return <p>No Order Yet</p>
  }
  return (
    <div className='order-list'>
      <AnimatePresence>
        {order.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <OrderItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

OrderList.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      orderStatus: PropTypes.string.isRequired,
      orderNumber: PropTypes.string.isRequired,
      orderHasNotes: PropTypes.bool.isRequired,
      orderNote: PropTypes.string.isRequired,
      orderBackordered: PropTypes.bool.isRequired,
    })
  ),
}

export default OrderList
