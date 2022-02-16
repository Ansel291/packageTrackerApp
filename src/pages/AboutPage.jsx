import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
import './styles/AboutPage.css'
import HomeIconLink from '../components/HomeIconLink'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h2>About This Project</h2>
        <p>
          This is a React App which acts as a UI prototype for a company that
          wants to keep track of the status of their packages that is being
          shipped to their clients.
        </p>
        <p>
          It easily allows the user to add new package orders, update the
          status, and delete packages once they have been delivered.
        </p>
        <p>
          <span>Version:</span> 1.0.0
        </p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
      <HomeIconLink />
    </Card>
  )
}

export default AboutPage
