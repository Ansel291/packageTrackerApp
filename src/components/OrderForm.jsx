import './styles/OrderForm.css'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import OrderStatusSelect from './OrderStatusSelect'

function OrderForm({ handleAdd }) {
  const [orderStatus, setOrderStatus] = useState('orderReceived')
  const [orderNumber, setOrderNumber] = useState('')
  const [orderHasNotes, setOrderHasNotes] = useState(false)
  const [orderNote, setOrderNote] = useState('')
  const [orderBackordered, setOrderBackordered] = useState(false)

  const [btnDisabled, setBtnDisabled] = useState(true)
  const [orderNumberMessage, setOrderNumberMessage] = useState('')

  const handleOrderNumberTextChange = (e) => {
    let orderNumberTextVal = e.target.value.trim()

    if (orderNumberTextVal === '') {
      setBtnDisabled(true)
      setOrderNumberMessage(null)
    } else {
      setBtnDisabled(true)
      if (orderNumberTextVal.charAt(0) !== 'L') {
        //console.log('Must start w/ LG-')
        setBtnDisabled(true)
        setOrderNumberMessage("*Must start w/ 'LG-'")
      } else {
        //console.log('Yay it STARTS w/ LG-')
        setBtnDisabled(true)
        if (
          orderNumberTextVal.indexOf('LG-') === -1 &&
          /\d/.test(orderNumberTextVal) === false
        ) {
          //console.log('Field must contain LG- and a number')
          setBtnDisabled(true)
          setOrderNumberMessage("*Field must contain 'LG-' and number")
        } else if (
          orderNumberTextVal.indexOf('LG-') <= 0 &&
          /\d/.test(orderNumberTextVal) === false
        ) {
          //console.log('Field missing number')
          setBtnDisabled(true)
          setOrderNumberMessage('*Field missing number')
        } else {
          //console.log('Yay you have both!')
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
    /*
    //console.log(e.target.checked)
    let backorderChecked = e.target.checked
    if (backorderChecked) {
      setOrderHasNotes(true)
      setOrderNote('Backordered')
    } else {
      setOrderHasNotes(false)
      setOrderNote('')
    }
    */
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log('handle submit click')
    let orderNumberTextValOnSubmit = orderNumber.trim()

    console.log(orderNumberTextValOnSubmit)
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
      }
      handleAdd(newOrder)

      setOrderNumber('')
      setOrderNote('')
      setOrderHasNotes(false)
      setOrderBackordered(false)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>What is the status of this Package?</h2>

        <OrderStatusSelect orderSelect={(select) => setOrderStatus(select)} />

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
          Send
        </Button>
      </form>
    </Card>
  )
}

export default OrderForm
