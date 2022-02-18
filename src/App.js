import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import OrderForm from './components/OrderForm'
import OrderList from './components/OrderList'
import OrderStats from './components/OrderStats'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { OrderProvider } from './context/OrderContext'

function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <OrderForm />
                  <OrderStats />
                  <OrderList />
                  <AboutIconLink />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </OrderProvider>
  )
}

export default App
