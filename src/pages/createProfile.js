import { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";
import { db } from "../util/firebase";

export default function CreateProfile() {
  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


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

    setSuccess(true)
  };
  // END SAVING PROFILE INFO CODE //



  return (
    <div style={{ margin: "75px" }}>
      <h2>Create your User Profile</h2>
      <br />
      <Form onSubmit={saveAnswer}>
       
        <Form.Group className="mt-3 bg-light p-3 border">
      <Row>
           <Col>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            id="first_name"
            type="text"
            placeholder="First Name"
            ></Form.Control>
            </Col>
  
          <Col>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            id="last_name"
            type="text"
            placeholder="Last Name"
            ></Form.Control>
            </Col>
          </Row>
        </Form.Group>


        <Form.Group className="mt-3 bg-light p-3 border">
              <Row>
                <Col sm={6}>
                  <p>
                    I attend or am part of an Assemblies of God ministry or
                    organization.
                  </p>
                </Col>
                <Col sm={3}>
                  <Form.Control
                    as="select"
                    id="ag_affiliated"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>


            <Form.Group className="mt-3 bg-light p-3 border">
              <Row>
                <Col sm={6} className="d-flex align-items-center">
                  <p>I am an Assemblies of God credentialed minister.</p>
                </Col>
                <Col sm={3}>
                  <Form.Control
                    id="ag_credentialed"
                    as="select"
                  >
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>


        <Form.Group className="mt-3 bg-light p-3 border">
    <Form.Label>My Assemblies of God employer <small>(if applicable)</small></Form.Label>
    <br /><small>ex. General Council of the Assemblies of God, District Council of the AG, Local AG Church, AG Family Servers Dba COMPACT, AG US Missions, AG University etc </small>
    <Form.Control id="org_ag" type="text"
    placeholder="General Council of the AG, District Council of the AG, Local AG Church ..."
    ></Form.Control>
   
    <Form.Label className="mt-3">My Title/Role</Form.Label>
    <Form.Control id="org_ag_title" type="text"></Form.Control>

    <Form.Label className="mt-3">My AG employer website URL</Form.Label>
    <Row>
        <Col md={1} className="d-flex align-items-center">
        <small>https://</small>
        </Col>
        <Col>
    <Form.Control id="org_ag_url" type="text" placeholder="URL"></Form.Control>
        </Col>
    </Row>
</Form.Group>

        <Form.Group className="mt-3 bg-light p-3 border">
    <Form.Label>Name of my organization or corporation <small>(if applicable)</small></Form.Label>
    <Form.Control id="org_other" type="text"
    placeholder="ex. 501c3, for profit corporation etc"
    ></Form.Control>
   
    <Form.Label className="mt-3">My Title/Role</Form.Label>
    <Form.Control id="org_other_title" type="text"></Form.Control>

    <Form.Label className="mt-3">My organization or corporation website URL</Form.Label>
    <Row>
        <Col md={1} className="d-flex align-items-center">
        <small>https://</small>
        </Col>
        <Col>
    <Form.Control id="org_other_url" type="text" placeholder="URL"></Form.Control>
        </Col>
    </Row>
</Form.Group>

      
<Form.Group className="mt-3 bg-light p-3 border">
              <Row>
                <Col sm={3} className="d-flex align-items-center">
                  <p>I am a foster parent.</p>
                </Col>
                <Col sm={3}>
                  <Form.Control
                    as="select"
                    id="fosterParent"
                    // Value="No"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Form.Label>
                    Number of foster children in my home this year.
                    <small> (Kindship and non-kinship)</small>
                  </Form.Label>
                </Col>
                <Col md={2}>
                  <Form.Control
                    inline
                    id="numberOfFosterKids"
                    type="number"
                    Value=""
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>

        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Label>Street Address <small>(Your street address will not be made public.)</small></Form.Label>
          <Form.Control
            id="street_address"
            type="text"
            placeholder="Street Address"
          ></Form.Control>

            <Row className="mt-3">
                <Col>
          <Form.Label>City</Form.Label>
          <Form.Control id="city" type="text" placeholder="City"></Form.Control>

                </Col>
                <Col>
          <Form.Label>State</Form.Label>
          <Form.Control required id="state" as="select">
            <option value="NONE">None Selected</option>
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

<Form.Group className="mt-3 bg-light p-3 border">
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
              <Form.Label>The Name of my Church</Form.Label>
              <Form.Control
                id="church"
                type="text"
                Value=""
              ></Form.Control>

              <br />

              <Row>
                <Col sm={6}>
                  <p>My church is an Assemblies of God church.</p>
                </Col>
                <Col sm={3}>
                  <Form.Control
                    as="select"
                    id="ag_church"
                    // Value="No"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>





<Form.Group className="mt-3">
    <Form.Label>Comments about you or your organization</Form.Label>
    <Form.Control as="textarea" rows="4" id="comments" type="text"></Form.Control>
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
      
    */}
      
      {success && (
        <div className="alert alert-success" style={{padding: "20px", marginTop: "25px"}}>Your profile has been updated!
        <br />
        Check out the <Link to="/network">Network page</Link>
        </div>
      )} 
    </div>
  );
}
