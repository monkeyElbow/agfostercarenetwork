import { Container, Alert } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../util/AuthContext";

import { Link, useHistory} from "react-router-dom";


export default function MenuMain() {
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

    return(  
        <>
             {error && <Alert variant="danger">{error}</Alert>}
        <Container fluid className="menuMain p-3 d-flex justify-content-around">
            
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>



        {!currentUser && 
        <Link to="/signin">
        Sign In
        </Link>
            }

        {/* {!currentUser && 
<Link to="/signup">Sign Up!</Link>
            } */}



{currentUser &&
<Link to="/network">
Network
</Link>
}

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


        </Container>
  </>     
    )
}

