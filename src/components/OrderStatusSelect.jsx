import './styles/OrderStatusSelect.css'
import { useState, useContext, useEffect } from 'react'
import { IconContext } from 'react-icons/lib'
import { MdCallReceived, MdNewLabel, MdLocalShipping } from 'react-icons/md'
import { RiUserReceived2Fill } from 'react-icons/ri'
import OrderContext from '../context/OrderContext'

function OrderStatusSelect({ orderSelect, progressBar }) {
  const [orderSelected, setOrderSelected] = useState('orderReceived')
  //const [orderSelected, setOrderSelected] = useState('')
  const [progressBarWidth, setProgressBarWidth] = useState(
    'progress-order-received'
  )

  const { orderEdit } = useContext(OrderContext)

  useEffect(() => {
    if (orderEdit.edit === true) {
      console.log('the order edit selected is true')
      setOrderSelected(orderEdit.item.orderStatus)
      setProgressBarWidth(orderEdit.item.orderProgress)
      //orderEdit.edit = false
    } /*else {
      setOrderSelected('orderReceived')
      setProgressBarWidth('progress-order-received')
    }*/
  }, [orderEdit])

  const handleChange = (e) => {
    setOrderSelected(e.currentTarget.value)
    orderSelect(e.currentTarget.value)
    if (e.currentTarget.value === 'orderReceived') {
      setProgressBarWidth('progress-order-received')
      progressBar('progress-order-received')
    } else if (e.currentTarget.value === 'labelCreated') {
      setProgressBarWidth('progress-label-created')
      progressBar('progress-label-created')
    } else if (e.currentTarget.value === 'orderInTransit') {
      setProgressBarWidth('progress-in-transit')
      progressBar('progress-in-transit')
    } else if (e.currentTarget.value === 'orderDelivered') {
      setProgressBarWidth('progress-order-delivered')
      progressBar('progress-order-delivered')
    }
  }

  return (
    <IconContext.Provider
      value={{
        size: '2em',
      }}
    >
      <ul className='status'>
        <li>
          <input
            type='radio'
            id='radioOrderReceived'
            name='status'
            value='orderReceived'
            onChange={handleChange}
            checked={orderSelected === 'orderReceived'}
          />
          <label
            htmlFor='radioOrderReceived'
            className='order-select-order-received'
          >
            <MdCallReceived />
          </label>

          <p className='status-title'>Order Processed</p>
        </li>
        <li>
          <input
            type='radio'
            id='radioLabelCreated'
            name='status'
            value='labelCreated'
            onChange={handleChange}
            checked={orderSelected === 'labelCreated'}
          />
          <label
            htmlFor='radioLabelCreated'
            className='order-select-label-created'
          >
            <MdNewLabel />
          </label>

          <p className='status-title'>
            Label<span className='space'></span>
            <br className='order-status-br' /> Created
          </p>
        </li>
        <li>
          <input
            type='radio'
            id='radioOrderInTransit'
            name='status'
            value='orderInTransit'
            onChange={handleChange}
            checked={orderSelected === 'orderInTransit'}
          />
          <label
            htmlFor='radioOrderInTransit'
            className='order-select-in-transit'
          >
            <MdLocalShipping />
          </label>

          <p className='status-title'>
            In
            <span className='space'></span>
            <br className='order-status-br' />
            Transit
          </p>
        </li>
        <li>
          <input
            type='radio'
            id='radioOrderDelivered'
            name='status'
            value='orderDelivered'
            onChange={handleChange}
            checked={orderSelected === 'orderDelivered'}
          />
          <label
            htmlFor='radioOrderDelivered'
            className='order-select-order-delivered'
          >
            <RiUserReceived2Fill />
          </label>

          <p className='status-title'>Order Delivered</p>
        </li>
      </ul>
      <div
        id='progressBar'
        className={`progress-bar ${progressBarWidth}`}
      ></div>
    </IconContext.Provider>
  )
}

export default OrderStatusSelect
