import { Container } from "react-bootstrap";
// import { useState } from "react";
// import { useAuth } from "../util/AuthContext";

import { Link } from "react-router-dom";
import "../styles/menuMain.css"


export default function MenuMain({currentUser}) {
    
    // const [error, setError] = useState("")
    // const { currentUser, logout } = useAuth()
    // const history = useHistory()

    // async function handleLogout() {
    //     setError("")
    
    //     try {
    //       await logout()
    //       history.push("/login")
    //     } catch {
    //       setError("Failed to log out")
    //     }
    //   }

    return(  
        <>
        <Container fluid className="menuMain p-3 d-flex justify-content-around">
            
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {!currentUser && 
        <Link to="/signin">
        Sign In
        </Link>
            }

        {/* {!currentUser && <div>
<Link to="/signup">Sign Up!</Link>
            </div>} */}

{/* hide profile when not logged in */}
<Link to="/profile">Profile</Link>

        {/* make work and hide when logged out */}

        {/* <Link onClick={handleLogout}>
        Logout
    </Link> */}

    {/* {currentUser && <div>{currentUser}</div>} */}
        </Container>
  </>     
    )
}

