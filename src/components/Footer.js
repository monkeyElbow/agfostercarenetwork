import { Link, useHistory } from "react-router-dom"
import {Container} from "react-bootstrap"
import { useAuth } from "../util/AuthContext"
import { useState } from "react";


export default function Footer() {

  const [error, setError] = useState("")
  const { currentUser, signout } = useAuth()
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




  // const { currentUser } = useAuth()

    return (
        <>
<Container fluid className="p-2 text-white bg-dark menuFooter d-flex justify-content-evenly">


<Link to="/">Home</Link>

{currentUser &&
<Link to="/dashboard">
 
{currentUser.email}

</Link>
}
{currentUser && 
        <Link to="/" onClick={handleLogout}>
        Sign Out
    </Link>
}

{/* <Link to="/contact">Contact us</Link> */}

</Container>
        </>
    )
}
