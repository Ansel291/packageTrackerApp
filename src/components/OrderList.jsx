import './styles/OrderList.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import OrderItem from './OrderItem'
import OrderContext from '../context/OrderContext'

function OrderList() {
  const { order } = useContext(OrderContext)

  if (!order || order.length === 0) {
    return <p className='no-order'>No Order Yet</p>
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
            <OrderItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default OrderList
