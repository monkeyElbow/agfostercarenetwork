import { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";


export default function UpdateProfile() {

const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
const {currentUser, updatePassword, updateEmail } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const history = useHistory

function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match')
    }
const promises = []
setLoading(true)
setError('')

    if(emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
    }
if(passwordRef.current.value) {
    promises.push(updatePassword(passwordRef.current.value))
}

Promise.all(promises).then(() => {
    history.push('/')
}).catch(() => {
    setError('Failed to update account')
}).finally(() => {
    setLoading(false)
})

}

    return(
        <>

        <Card className="w-100" style={{maxWidth: "400px"}}>
            <Card.Body>
<h2>Update Profile</h2>
        {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}

<Form onSubmit={handleSubmit}>
    <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}></Form.Control>
    </Form.Group>
    <Form.Group id="password">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" ref={passwordRef} placeholder="leave blank to keep the same"></Form.Control>
    </Form.Group>
    <Form.Group id="password-confirm">
        <Form.Label>password confirmation</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef} placeholder="leave blank to keep the same"></Form.Control>
    </Form.Group>
<Button disabled={loading} className="w-100" type="submit">Update</Button>
</Form>

            </Card.Body>
        </Card>


<p>Already have an account?</p>
<Link to="/">Cancel</Link>

        </>
    )
}
