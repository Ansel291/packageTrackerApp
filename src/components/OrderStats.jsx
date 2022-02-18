import './styles/OrderStats.css'
import { useContext } from 'react'
import OrderContext from '../context/OrderContext'

function OrderStats() {
  const { order } = useContext(OrderContext)

  let totalOrderReceived = order.filter(
    (item) => item.orderStatus === 'orderReceived'
  )

  let totalLabelCreated = order.filter(
    (item) => item.orderStatus === 'labelCreated'
  )

  let totalOrderInTransit = order.filter(
    (item) => item.orderStatus === 'orderInTransit'
  )

  let totalOrderDelivered = order.filter(
    (item) => item.orderStatus === 'orderDelivered'
  )

  return (
    <>
      <div className='order-stats-container'>
        <div className='open-order-title'>
          <span className='order-stat-label'>Total Orders:</span> (
          {order.length})
        </div>
        <div className='order-stats-row '>
          <div className='order-stat-item order-stat-order-received'>
            <div className='dot'></div>
            <span className='order-stat-label'>Processed:</span>{' '}
            {totalOrderReceived.length}
          </div>
          <div className='order-stat-item order-stat-label-created'>
            <span className='order-stat-label'>Labelled:</span>{' '}
            {totalLabelCreated.length}
          </div>
          <div className='order-stat-item order-stat-in-transit'>
            <span className='order-stat-label'>In Transit:</span>{' '}
            {totalOrderInTransit.length}
          </div>
          <div className='order-stat-item order-stat-order-delivered'>
            <span className='order-stat-label'>Delivered:</span>{' '}
            {totalOrderDelivered.length}
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderStats
