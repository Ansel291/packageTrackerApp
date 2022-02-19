import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([
    {
      id: 1,
      orderStatus: 'orderReceived',
      orderNumber: 'LG-1',
      orderHasNotes: true,
      orderNote: 'Back Ordered',
      orderBackordered: true,
      orderProgress: 'progress-order-received',
    },
    {
      id: 2,
      orderStatus: 'labelCreated',
      orderNumber: 'LG-2',
      orderHasNotes: false,
      orderNote: '',
      orderBackordered: false,
      orderProgress: 'progress-label-created',
    },
    {
      id: 3,
      orderStatus: 'orderInTransit',
      orderNumber: 'LG-3',
      orderHasNotes: true,
      orderNote: 'Request to leave package on porch',
      orderBackordered: false,
      orderProgress: 'progress-in-transit',
    },
    {
      id: 4,
      orderStatus: 'orderDelivered',
      orderNumber: 'LG-4',
      orderHasNotes: false,
      orderNote: '',
      orderBackordered: false,
      orderProgress: 'progress-order-delivered',
    },
  ])

  const [orderEdit, setOrderEdit] = useState({
    item: {},
    edit: false,
  })

  // Add Order
  const addOrder = (newOrder) => {
    newOrder.id = uuidv4()
    //console.log(newOrder)
    setOrder([newOrder, ...order])
  }

  // Delete Order
  const deleteOrder = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setOrder(order.filter((item) => item.id !== id))
    }
  }

  // Update Order Item
  const updateOrder = (id, updItem) => {
    setOrder(
      order.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
    setOrderEdit({
      item: {},
      edit: false,
    })
  }

  // Set Order to be updated
  const editOrder = (item) => {
    //window.scrollTo({ top: 0, behavior: 'smooth' })
    //scroll.scrollToTop()
    setTimeout(() => {
      setOrderEdit({
        item,
        edit: true,
      })
    }, 350)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        orderEdit,
        addOrder,
        deleteOrder,
        editOrder,
        updateOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext
