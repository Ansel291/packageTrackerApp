import './styles/OrderForm.css'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import OrderStatusSelect from './OrderStatusSelect'
import OrderContext from '../context/OrderContext'

function OrderForm() {
  const [orderStatus, setOrderStatus] = useState('orderReceived')
  const [orderNumber, setOrderNumber] = useState('')
  const [orderHasNotes, setOrderHasNotes] = useState(false)
  const [orderNote, setOrderNote] = useState('')
  const [orderBackordered, setOrderBackordered] = useState(false)
  const [orderProgress, setOrderProgress] = useState('progress-order-received')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [orderUpdate, setOrderUpdated] = useState(false)
  const [orderNumberMessage, setOrderNumberMessage] = useState('')

  const { addOrder, orderEdit, updateOrder } = useContext(OrderContext)

  useEffect(() => {
    if (orderEdit.edit === true) {
      setBtnDisabled(false)
      setOrderUpdated(true)
      setOrderStatus(orderEdit.item.orderStatus)
      setOrderNumber(orderEdit.item.orderNumber)
      setOrderHasNotes(orderEdit.item.orderHasNotes)
      setOrderNote(orderEdit.item.orderNote)
      setOrderBackordered(orderEdit.item.orderBackordered)
      setOrderProgress(orderEdit.item.orderProgress)
    }
  }, [orderEdit])

  const handleOrderNumberTextChange = (e) => {
    let orderNumberTextVal = e.target.value.trim()

    if (orderNumberTextVal === '') {
      setBtnDisabled(true)
      setOrderNumberMessage(null)
    } else {
      setBtnDisabled(true)
      if (orderNumberTextVal.charAt(0) !== 'L') {
        setBtnDisabled(true)
        setOrderNumberMessage("*Must start w/ 'LG-'")
      } else {
        setBtnDisabled(true)
        if (
          orderNumberTextVal.indexOf('LG-') === -1 &&
          /\d/.test(orderNumberTextVal) === false
        ) {
          setBtnDisabled(true)
          setOrderNumberMessage("*Field must contain 'LG-' and number")
        } else if (
          orderNumberTextVal.indexOf('LG-') <= 0 &&
          /\d/.test(orderNumberTextVal) === false
        ) {
          setBtnDisabled(true)
          setOrderNumberMessage('*Field missing number')
        } else {
          setBtnDisabled(false)
          setOrderNumberMessage(null)
        }
      }
    }

    setOrderNumber(e.target.value)
  }
  const handleOrderNotesTextChange = (e) => {
    let orderNotesTextVal = e.target.value.trim()

    if (orderNotesTextVal === '') {
      setOrderHasNotes(false)
    } else {
      setOrderHasNotes(true)
    }

    setOrderNote(e.target.value)
  }

  const handleBackorderChange = (e) => {
    setOrderBackordered(!orderBackordered)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let orderNumberTextValOnSubmit = orderNumber.trim()

    if (
      orderNumberTextValOnSubmit.charAt(0) === 'L' &&
      orderNumberTextValOnSubmit.indexOf('LG-') <= 0 &&
      /\d/.test(orderNumberTextValOnSubmit) === true
    ) {
      const newOrder = {
        orderStatus,
        orderNumber,
        orderHasNotes,
        orderNote,
        orderBackordered,
        orderProgress,
      }

      if (orderEdit.edit === true) {
        updateOrder(orderEdit.item.id, newOrder)
      } else {
        addOrder(newOrder)
      }

      setOrderNumber('')
      setOrderHasNotes(false)
      setOrderNote('')
      setOrderBackordered(false)
      setBtnDisabled(true)
      setOrderUpdated(false)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>
          {orderUpdate ? 'Update' : 'What is'} the status of this Package
          {orderUpdate ? '' : '?'}
        </h2>

        <OrderStatusSelect
          progressBar={(status) => setOrderProgress(status)}
          orderSelect={(select) => setOrderStatus(select)}
        />

        <div className='form-row'>
          <div className='form-item'>
            <label>
              Order Number:
              <div className='input-group input-group-order-number'>
                <input
                  className='input-order-number'
                  onChange={handleOrderNumberTextChange}
                  type='text'
                  placeholder='Enter Order Number (ie: LG-5)'
                  value={orderNumber}
                />
              </div>
            </label>
            {orderNumberMessage && (
              <div className='order-number-message'>{orderNumberMessage}</div>
            )}
          </div>
          <div className='form-item'>
            <label>
              Order Notes:
              <div className='input-group'>
                <input
                  className='input-order-notes'
                  onChange={handleOrderNotesTextChange}
                  type='text'
                  placeholder='Enter Order Notes'
                  value={orderNote}
                />
              </div>
            </label>
          </div>
        </div>

        <div className='form-row float-left'>
          <div className='form-checkbox-container'>
            <input
              type='checkbox'
              id='backordered'
              name='backordered'
              value='backordered'
              checked={orderBackordered}
              onChange={handleBackorderChange}
            />{' '}
            <span className='backordered-label'>Backordered</span>
          </div>
        </div>

        <Button type='submit' isDisabled={btnDisabled}>
          {orderUpdate ? 'Update' : 'Send'}
        </Button>
      </form>
    </Card>
  )
}

export default OrderForm
