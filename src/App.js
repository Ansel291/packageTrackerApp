import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import OrderForm from './components/OrderForm'
import OrderList from './components/OrderList'
import OrderStats from './components/OrderStats'
import AboutIconLink from './components/AboutIconLink'
import OrderData from './data/OrderData'
import AboutPage from './pages/AboutPage'

function App() {
  const [order, setOrder] = useState(OrderData)

  const addOrder = (newOrder) => {
    newOrder.id = uuidv4()
    console.log(newOrder)
    setOrder([newOrder, ...order])
  }

  const deleteOrder = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setOrder(order.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <OrderForm handleAdd={addOrder} />
                  <OrderStats order={order} />
                  <OrderList order={order} handleDelete={deleteOrder} />
                  <AboutIconLink />
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          {/*<AboutIconLink />*/}
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
