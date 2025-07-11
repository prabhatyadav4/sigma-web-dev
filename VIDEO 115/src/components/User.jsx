import './user.css'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div className='user'>
      I am user {params.username}
    </div>
  )
}

export default User
