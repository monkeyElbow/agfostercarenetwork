import { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";
import { db } from "../util/firebase";

export default function CreateProfile() {
  const { currentUser } = useAuth();

  // toggle for affiliated checkbox
  const [affiliated, setAffiliated] = useState(false);
  const toggleAffiliated = () => setAffiliated((value) => !value);

  // toggle for credentialed checkbox
  const [credentialed, setCredentialed] = useState(false);
  const toggleCredentialed = () => setCredentialed((value) => !value);

  // toggle for fosterParent checkbox
  const [fosterParent, setFosterParent] = useState(false);
  const togglefosterParent = () => setFosterParent((value) => !value);

  // toggle for fosterParent checkbox
  const [agChurch, setAgChurch] = useState(false);
  const toggleAgChurch = () => setAgChurch((value) => !value);

  const [loading, setLoading] = useState(false);
  // const [profiles, setProfiles] = useState([]);
  // const [currentProfile, setCurrentProfile] = useState([]);
  // const [success, setSuccess] = useState(false);


  // SAVING PROFILE INFO CODE //
  const saveAnswer = (event) => {
    event.preventDefault();
    setLoading(true)
    const elementsArray = [...event.target.elements];
    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    db.collection("Users").doc(currentUser.uid).set(formData);
  };
  // END SAVING PROFILE INFO CODE //



  return (
    <div style={{ margin: "75px" }}>
      <h2>Create your User Profile</h2>
      <br />
      <Form onSubmit={saveAnswer}>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            id="name"
            type="text"
            placeholder="Full Name..."
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Check
            id="ag_affiliated"
            label="I attend or am part of an Assemblies of God ministry or organization."
            value={affiliated}
            type="checkbox"
            onChange={toggleAffiliated}
          />
        </Form.Group>

        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Check
            id="ag_credentialed"
            label="I am an Assemblies of God credentialed minister."
            value={credentialed}
            type="checkbox"
            onChange={toggleCredentialed}
          />
        </Form.Group>

        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Check
          inline
            id="fosterParent"
            label="I am a foster parent."
            value={fosterParent}
            type="checkbox"
            onChange={togglefosterParent}
          />
          
          <Row className="mt-3">
<Col md={10}>
          <Form.Label>Number of foster children in my home this year.<small> (Kindship and non-kinship)</small></Form.Label>
          </Col>
          <Col>
          <Form.Control
          inline
          id="numberOfFosterKids"
          type="number"
          ></Form.Control>

          </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            id="street_address"
            type="text"
            placeholder="Street Address"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mt-3">
            <Row>
                <Col>
          <Form.Label>City</Form.Label>
          <Form.Control id="city" type="text" placeholder="City"></Form.Control>

                </Col>
                <Col>
          <Form.Label>State</Form.Label>
          <Form.Control required id="state" as="select">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Form.Control>
          </Col>
          <Col>

          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            id="user_zip"
            type="text"
            placeholder="Zip"
            ></Form.Control>
            </Col>
        </Row>
        </Form.Group>

<Form.Group className="mt-3">
    <Form.Label>Social Media</Form.Label>
    <Row>
        <Col md={1} className="d-flex align-items-center">
        <small>https://</small>
        </Col>
        <Col>
    <Form.Control id="social_media" type="text" placeholder="URL"></Form.Control>
        </Col>
    </Row>
</Form.Group>


<Form.Group className="mt-3 bg-light p-3 border">
    <Form.Label>My church of attendence</Form.Label>
    <Form.Control id="church" type="text"></Form.Control>

          <Form.Check className="mt-2"
            id="ag_church"
            label="My church is an Assemblies of God church"
            value={agChurch}
            type="checkbox"
            onChange={toggleAgChurch}
          />
        </Form.Group>


<Form.Group className="mt-3 bg-light p-3 border">
    <Form.Label>My Assemblies of God organization and employer</Form.Label>
    <Form.Control id="org" type="text"></Form.Control>

    <Form.Label className="mt-3">Organization website URL</Form.Label>
    <Row>
        <Col md={1} className="d-flex align-items-center">
        <small>https://</small>
        </Col>
        <Col>
    <Form.Control id="org_url" type="text" placeholder="URL"></Form.Control>
        </Col>
    </Row>
</Form.Group>



<Form.Group className="mt-3">
    <Form.Label>Comments about you or your organization</Form.Label>
    <Form.Control style={{height:"150px"}} id="comments" type="text"></Form.Control>
</Form.Group>




        <input type="hidden" id="uid" value={currentUser.uid}></input>

        <Button className="mt-4" disabled={loading} type="submit">
          Create Profile
        </Button>
      </Form>

      {/* <h1>All Profiles:</h1>
      <br />
      {profiles.length > 0 ? (
          profiles.map((profile) => <div key={profile.key}>{profile.name} - {profile.email} - {profile.favoritecolor}</div>) // Post is the record in the database and the attributes are from those records (i.e. name, email, etc.)
      ) : (
        <h1>no profiles yet</h1>
      )}
      <br /><br /> */}

      {/* <h1>Current User's Profile:</h1>
      <br />
      {currentProfile.length > 0 ? (
        currentProfile.map((profile) => <div key={profile.key}>{profile.name} - {profile.email} - {profile.favoritecolor}</div>) // Post is the record in the database and the attributes are from those records (i.e. name, email, etc.)
      ) : (<h1>no profiles yet</h1>)}
      <br /><br /> */}

      {/* <h1>Your profile</h1>

      {currentProfile.length > 0 ? (
      
      <Form onSubmit={updateProfile}>

<Form.Label>Name</Form.Label>
<Form.Group>
        <Form.Control type="text" id="name" defaultValue={currentProfile[0].name} required></Form.Control><br />
</Form.Group>
        
        <Form.Control type="text" id="favoritecolor" defaultValue={currentProfile[0].favoritecolor} required></Form.Control><br />

        <input type="hidden" id="email" value={currentUser.email}></input>

        <Button type="submit">Update Firebase</Button>
      </Form>
      ) : (<h1>no profiles yet</h1>)}
      
      
      {success && (
        <div className="alert alert-success" style={{padding: "20px", marginTop: "25px"}}>Your profile has been updated!</div>
      )} */}
    </div>
  );
}
