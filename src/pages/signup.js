import { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";


export default function Signup() {
//   const { currentUser, uid } = useAuth()


const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
const { signup } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const history = useHistory()


async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match')
    }

    try {
        setError('')
        setLoading(true)
     await signup(
         emailRef.current.value, 
         passwordRef.current.value,
        )
     history.push('/create-profile')
    } catch {
        setError('Failed to create an account')
    }
    setLoading(false)
}

    return(
        <>
<Container className="my-3 d-flex justify-content-center">

        <Card className="w-100" style={{maxWidth: "400px"}}>
            <Card.Body>
<h2>Sign Up</h2>

<p>Already have an account?{" "}<Link to="/signin">Sign in here</Link></p>


<small>By registering with the Network you agree to allow your information to be published to the website to enable others in the Network to connect with you.</small>
<br />

        {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}

<Form onSubmit={handleSubmit}>

    <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef}></Form.Control>
    </Form.Group>

    <Form.Group id="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef}></Form.Control>
    </Form.Group>

    <Form.Group id="Password-confirm">
        <Form.Label>password confirmation</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef}></Form.Control>
    </Form.Group>

<br />
<Button disabled={loading} className="w-100" type="submit">Sign Up</Button>

</Form>

<br />
<p>Already have an account?{" "}<Link to="/signin">Sign in here</Link></p>


            </Card.Body>
        
        </Card>




</Container>
        </>
    )
}
