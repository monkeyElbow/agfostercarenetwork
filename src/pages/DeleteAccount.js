// import { Link } from "react-router-dom";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Container, Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";
import { db } from "../util/firebase";


export default function DeleteAccount() {
    const { currentUser } = useAuth();

const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const [success ] = useState(false)
    
    
// const history = useHistory()


  // DELETE PROFILE and Account
  function deleteAccount(e) {
    e.preventDefault();
    setLoading(true);
    console.log("delete account");

    // delete profile
    db.collection("Users").doc(currentUser.uid).delete().then(() => {

        console.log("deleted profile")

        
    }).catch((error) => {
        setError("Problem deleting profile")
    })
    
    // delete account
    // auth().deleteUser(currentUser.uid)
      

    // const credential = promptForCredentials();

    // currentUser.reauthenticateWithCredential(credential)
    // .then(() => {

    // auth().deleteUser(currentUser.uid)

    // }).catch((error) => {
    //     setError("Problem deleting account")
    // })
    


    setLoading(false);
  }
  // end delete user profile and account



    return(
        <>
        {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}
        {success && <Alert variant="success" className="mb-4 text-center">Success! Your account is deleted.</Alert>}

<Container className="my-3 d-flex flex-column align-items-center justify-content-center"
    style={{minHeight:"84vh"}}
>

        <Card className="w-100" style={{maxWidth: "400px"}}>

            <Card.Body>
<h2>Delele Profile and Account</h2>
<br />
<h4>{currentUser.email}</h4>


<br />
<Button variant="danger" disabled={loading} className="w-100" onClick={deleteAccount}>DELETE ACCOUNT</Button>

<br />
<br />
{/* <p className="alert-warning p-3">*This button currently only deletes profile. Account deletion coming</p> */}

<p className="alert-danger p-3">*This button will delete your profile that appears in the network director as well as your account and ability to log back in.</p>

            </Card.Body>

        </Card>


</Container>
        </>
    )
}
