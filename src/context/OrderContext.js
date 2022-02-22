import { createContext, useState, useEffect } from 'react'

const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [orderEdit, setOrderEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchOrder()
  }, [])

  // Fetch Order
  const fetchOrder = async () => {
    const response = await fetch(`/order?_sort=id&_order=desc`)
    const data = await response.json()

    setOrder(data)
    setIsLoading(false)
  }

  // Add Order
  const addOrder = async (newOrder) => {
    const response = await fetch(`/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    })

    const data = await response.json()

    setOrder([data, ...order])
  }

  // Delete Order
  const deleteOrder = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/order/${id}`, { method: 'DELETE' })

      setOrder(order.filter((item) => item.id !== id))
    }
  }

  // Update Order Item
  const updateOrder = async (id, updItem) => {
    const response = await fetch(`/order/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    setOrder(
      order.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
    setOrderEdit({
      item: {},
      edit: false,
    })
  }

  // Set Order to be updated
  const editOrder = (item) => {
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
        isLoading,
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
