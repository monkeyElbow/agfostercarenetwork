import { Link } from "react-router-dom"
import {Container} from "react-bootstrap"
import { useAuth } from "../util/AuthContext"


export default function Footer() {
  const { currentUser } = useAuth()

    return (
        <>
<Container fluid className="p-2 text-white bg-dark menuFooter d-flex justify-content-evenly">


<Link to="/">Home</Link>

{currentUser &&
<Link to="/dashboard">
  <small>

{currentUser.email}
  </small>
</Link>
}
{/* {currentUser && 
<Link to="/network">Network</Link>
} */}

{/* <Link to="/contact">Contact us</Link> */}

</Container>
        </>
    )
}
