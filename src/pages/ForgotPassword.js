import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setMessage('')
            setError('')
            setLoading(true)
         await resetPassword(emailRef.current.value)
         setMessage('check your inbox for instructions')
        } catch {
            setError('Failed to reset')
        }
        setLoading(false)
    }
    

    return(
        <>
     
     {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}
     {message && <Alert variant="success" className="mb-4 text-center">{message}</Alert>}

<Card className="w-100" style={{maxWidth: "400px"}}>
    <Card.Body>
<h2>Password Reset</h2>

<Form onSubmit={handleSubmit}>
<Form.Group id="email">
<Form.Label>Email</Form.Label>
<Form.Control type="email" ref={emailRef}></Form.Control>
</Form.Group>


<Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
</Form>

<div className="w.100 text-center mt-3">
<Link to="/signin">Login</Link>
</div>

    </Card.Body>
</Card>


<Link to="/signup">Need an account?</Link>

        </>
    )
}

