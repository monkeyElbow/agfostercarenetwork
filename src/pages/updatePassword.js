// import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, Form, Alert, Button } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";
// import { Link } from "react-router-dom";


export default function UpdatePassword() {

    
const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
const {currentUser, updatePassword, updateEmail } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const history = useHistory()


function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }


    return(
        <>
        {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}

<Container className="my-3 d-flex flex-column align-items-center justify-content-center"
    style={{minHeight:"84vh"}}
>

        <Card className="w-100" style={{maxWidth: "400px"}}>

            <Card.Body>
<h2>Update Email or Password</h2>

<Form onSubmit={handleSubmit}>
    <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}></Form.Control>
    </Form.Group>

    <Form.Group id="password" className="mt-3">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same"></Form.Control>
    </Form.Group>

    <Form.Group id="password-confirm" className="mt-3">
        <Form.Label>password confirmation</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"></Form.Control>
    </Form.Group>

<br />
<Button disabled={loading} className="w-100" type="submit">Update</Button>
</Form>

            </Card.Body>
        </Card>
         
            {/* <br />
<p>Need to delete your account?{" "}<Link to="/delete-account" className="link">Click here</Link></p> */}



</Container>
        </>
    )
}
