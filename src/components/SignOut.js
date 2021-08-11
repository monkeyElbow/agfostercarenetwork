import { useAuth } from "../util/AuthContext"
import { Link, useHistory} from "react-router-dom";


export default function SignOut() {
  const { currentUser, signout } = useAuth()

  const [error, setError] = useState("")
  const history = useHistory()

  async function handleLogout() {
      setError("")
  
      try {
        await signout()
        history.push("/signin")
      } catch {
        setError("Failed to log out")
      }
    }
    
    return (
        <>
            
        </>
    )
}
