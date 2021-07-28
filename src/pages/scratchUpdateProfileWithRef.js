//  element structure for update profile

import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";
import { db } from "../util/firebase";


export default function UpdateProfile() {

    const {currentUser } = useAuth()
    
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const history = useHistory()

const nameRef = useRef()
const streetRef = useRef()
const cityRef = useRef()
const stateRef = useRef()
const affiliateRef = useRef()
const ministerRef = useRef()
const socialRef = useRef()
const churchRef = useRef()
const churchAGRef = useRef()
const organizationRef = useRef()
const organizationSiteRef = useRef()
const commentsRef = useRef()
const fosterParentRef = useRef()
const fosterParentChildrenRef = useRef()
const zipRef = useRef()


async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const elementsArray = [
        // ...event.target.elements
        nameRef.current.value,
        streetRef.current.value,
        cityRef.current.value,
        stateRef.current.value,
        affiliateRef.current.value,
        ministerRef.current.value,
        socialRef.current.value,
        churchRef.current.value,
        churchAGRef.current.value,
        organizationRef.current.value,
        organizationSiteRef.current.value,
        commentsRef.current.value,
        fosterParentRef.current.value,
        fosterParentChildrenRef.current.value,
        zipRef.current.value, 

    ];
    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, []);

    db.collection("Users").doc(currentUser.uid).set(formData);

}


    return(
        <>
        {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}

<Container className="my-3 d-flex justify-content-center">

        <Card className="w-100" style={{maxWidth: "400px"}}>

            <Card.Body>
<h2>Profile</h2>

<Form onSubmit={handleSubmit}>
   

<Form.Group id="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={nameRef}></Form.Control>
    </Form.Group>

<Form.Group id="agAffiliated">
        <Form.Check label="I attend or am part of an Assemblies of God ministry or organization." type="checkbox" ref={affiliateRef}></Form.Check>
    </Form.Group>

     <Form.Group id="agCredentialed">
        <Form.Check label="I am an Assemblies of God credentialed minister." type="checkbox" ref={ministerRef}></Form.Check>
    </Form.Group>

    <Form.Group id="street">
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="text" ref={streetRef}></Form.Control>
    </Form.Group>

    <Form.Group id="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" ref={cityRef}></Form.Control>
    </Form.Group>

    <Form.Group id="state">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" ref={stateRef}>
<option value="MO">Missouri</option>
<option value="MO">MO</option>
        </Form.Control>
    </Form.Group>
   
    <Form.Group id="zip">
        <Form.Label>Your Zip Code</Form.Label>
        <Form.Control type="text" ref={zipRef} maxLength="5"></Form.Control>
    </Form.Group>

    <Form.Group id="social">
        <Form.Label>Social Media</Form.Label>
        <Form.Control type="text" ref={socialRef}></Form.Control>
    </Form.Group>
    
    <Form.Group id="fosterParent">
        <Form.Check label="I am a foster parent." type="checkbox" ref={fosterParentRef}></Form.Check>
    </Form.Group>

    <Form.Group id="fosterParentChildren">
        <Form.Label>Number of foster children in my home this year. (Kindship and non-kinship)</Form.Label>
        <Form.Control type="number" ref={fosterParentChildrenRef}></Form.Control>
    </Form.Group>

    <Form.Group id="church">
        <Form.Label>My church of attendance name</Form.Label>
        <Form.Control type="text" ref={churchRef}></Form.Control>
    </Form.Group>

    <Form.Group id="churchAG">
        <Form.Check label="My church is an Assemblies of God church." type="checkbox" ref={churchAGRef}></Form.Check>
    </Form.Group>

    <Form.Group id="organization">
        <Form.Label>My Assembies of God organization and employer</Form.Label>
        <Form.Control type="text" ref={organizationRef}></Form.Control>
    </Form.Group>

    <Form.Group id="organizationSite">
        <Form.Label>Organization website URL</Form.Label>
        <Form.Control type="text" ref={organizationSiteRef}></Form.Control>
    </Form.Group>

    <Form.Group id="comments">
        <Form.Label>Comments about you or your organization</Form.Label>
        <Form.Control style={{height:"200px"}} type="textarea" ref={commentsRef}></Form.Control>
    </Form.Group>



<Button disabled={loading} className="w-100" type="submit">Update Profile</Button>
</Form>

            </Card.Body>


        </Card>

</Container>
        </>
    )
}
