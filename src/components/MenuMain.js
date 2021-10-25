import { Navbar, Nav } from "react-bootstrap";
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

<Navbar className="menuMain d-flex justify-content-center" expand="md" variant="dark">
  {/* <Navbar.Brand href="/">AGFosterCare.Network</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-items-around" style={{width:"100%"}}>
      <Link to="/">Home</Link>
      
      <Link to="/about">About</Link>
      {!currentUser && 
      <Link to="/signin">Sign In</Link>
    }
    {currentUser &&
    <Link to="/network">Network</Link>
    }

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

<Link to="/contact">Contact</Link>
     
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    {error && <small>{error}</small>}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>



  </>     
    )
}

