import { Link } from "react-router-dom"
import {Container} from "react-bootstrap"
import { useAuth } from "../util/AuthContext"
// import { useState } from "react";


export default function Footer() {
  const { currentUser } = useAuth()

  // const [error, setError] = useState("")
  // const history = useHistory()

  // async function handleLogout() {
  //     setError("")
  
  //     try {
  //       await signout()
  //       history.push("/signin")
  //     } catch {
  //       setError("Failed to log out")
  //     }
  //   }




  // const { currentUser } = useAuth()

    return (
        <>
        {/* {error && <Alert variant="warning">{error}</Alert>} */}
<Container fluid className="p-2 text-white bg-dark menuFooter d-flex justify-content-evenly">


<Link to="/">Home</Link>

{currentUser &&
<Link to="/dashboard">
 
{currentUser.email}

</Link>
}
{/* {currentUser && 
        <Link to="/" onClick={handleLogout}>
        Sign Out
    </Link>
} */}

{/* <Link to="/contact">Contact us</Link> */}

</Container>
        </>
    )
}
