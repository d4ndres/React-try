
import './App.css'
import { Card } from './Card.jsx'

const formatUserName = (userName) => `@${userName}`
const buttonElement = <button className='tw-followCard-button'>#</button>

function App() {
  return (
    <div className='tw-wrapper-cards'>
      <Card buttonElement={buttonElement} formatUserName={formatUserName} initialFollowing userName="d4ndres" name="Diego" >Dr. </Card>
      <Card formatUserName={formatUserName} initialFollowing={false} userName="CVander" name="Cristian vender" >Dr. </Card>
      <Card formatUserName={formatUserName} initialFollowing   name="Cristian vender" >Dr. </Card>

    </div>
  )
}

export default App
