import { useState } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../util/AuthContext";
import { db } from "../util/firebase";

export default function Dashboard() {
  const { currentUser, signout } = useAuth();


  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await signout();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  // const [currentProfile, setCurrentProfile] = useState([]);

//   const fetchData = async () =>{
//     try {
  
//       const getProfile = db.collection("users")
//       .doc(currentUser.uid)
//       // .get();

//       const doc = await getProfile.get();
  
//       const data = doc.data()
//       setCurrentProfile(data)
//       console.log(currentProfile)
//       setLoading(false)
  
//     } catch(err) {
//       console.log(err)
//       setError('Nope. Something went wrong.')
//       setLoading(false)
//     }

//   }

// useEffect(() => {
//  if(!currentUser) {
//    return
//  }
//  if(currentUser) {

//    fetchData();
//  }

// }, [])

// function SendMail(e) {
// e.preventDefault();
// db.collection('mail').add({
//   to: 'james.gerhold@gmail.com',
//   message: {
//     subject: 'Firebase test email',
//     text: `${currentUser.email} Wanted to reach out to you through the AG Foster Care Network. 
//     `,
//     replyTo:`${currentUser.email}`
//     // html: 'This is the <code>HTML</code> section of the email body.',
//   }
// }).then(() => console.log('Queued email for delivery!'));
// }


  return (
    <>
{/* <Button className="m-3" onClick={SendMail} to="#">Email test</Button> */}

    <Container className="my-3 d-flex flex-column align-items-center justify-content-center"
    style={{minHeight:"84vh"}}
    >

      <Card style={{maxWidth:"400px"}}>
        <Card.Body className="text-center mb-4">
          <h2>Dashboard</h2>
          <br />

          {/* {loading && <div>Loading...</div>} */}
          {error && <Alert variant="danger">{error}</Alert>}

{currentUser && <div>
  <h4>{currentUser.email}</h4>
  </div>}
  <br />

          {/* <h5>
            <strong>Email:</strong> {currentUser.email}
          </h5> */}

          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <Link to="/update-password" className="btn btn-primary w-100 mt-3">
            Update Email or Password
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" className="link" onClick={handleLogout}>
          Sign Out
        </Button>
        {/* <Button variant="link" onClick={deleteAccount}>
          Delete account from AGFosterCare.network.
        </Button> */}
      </div>
        </Container>
    </>
  );
}
