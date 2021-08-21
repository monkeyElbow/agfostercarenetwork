import { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Card, Form, Alert, Button } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";

export default function Signin() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {signin } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError('')
            setLoading(true)
         await signin(emailRef.current.value, passwordRef.current.value)
         history.push('/')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }
    

    return(
        <>
     
     {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}

<Container className="my-3 d-flex flex-column align-items-center justify-content-center"
style={{minHeight:"84vh"}}>

<Card className="w-100" style={{maxWidth: "400px"}}>
    <Card.Body>
<h2>Sign In</h2>

{/* <br />
<Button className="w-100" onClick={signInWithGoogle}>Sign in with Google</Button>

<br />
<br />
<p>or sign in with email</p> */}

<Form onSubmit={handleSubmit}>

<Form.Group id="email">
<Form.Label>Email</Form.Label>
<Form.Control type="email" ref={emailRef}></Form.Control>
</Form.Group>

<Form.Group id="password" className="mt-3">
<Form.Label>password</Form.Label>
<Form.Control type="password" ref={passwordRef}></Form.Control>
</Form.Group>

<br />

<Button disabled={loading} className="w-100" type="submit">Sign In</Button>
</Form>

<div className="w.100 text-center mt-3">
<Link to="/forgot-password">Forgot Password?</Link>
<br />
<Link to="/signup">Need an account?</Link>
</div>



    </Card.Body>
</Card>



</Container>
        </>
    )
}

