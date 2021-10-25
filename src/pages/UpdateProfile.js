import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { Form, Row, Col, Button, Container, Alert } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";
import { db } from "../util/firebase";
import { Link } from "react-router-dom";

export default function UpdateProfile() {
  const { currentUser } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH PROFILES CODE //

  // eslint-disable-next-line
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getProfilesFromFirebase = [];
    const getCurrentProfileFromFirebase = [];
    try {
      return db
        .collection("Users")
        .get(currentUser.uid)
        .then((querySnapshot) => {
          if (getProfilesFromFirebase.length < 1) {
            querySnapshot.forEach((doc) => {
              getProfilesFromFirebase.push({
                ...doc.data(), //spread operator
                key: doc.id, // 'id' given to us by Firebase
              });
              const currentDoc = doc.data();
              if (currentDoc.uid === currentUser.uid) {
                getCurrentProfileFromFirebase.push({
                  ...doc.data(), //spread operator
                  key: doc.id, // 'id' given to us by Firebase
                });
              }
            });
            setProfiles(getProfilesFromFirebase);
            setCurrentProfile(getCurrentProfileFromFirebase);
            setLoading(false);
          }
        });
    } catch (error) {
      setError("Trouble gathering profiles. Please try again later.");
    }
  }, [loading, currentUser, currentProfile]);

  // UPDATE EXISTING PROFILE //
  const updateProfile = (event) => {
    event.preventDefault();

    // Collect the form data.
    const elementsArray = [...event.target.elements];
    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    const getCurrentProfileFromFirebase = [];
    db.collection("Users")
      .get(currentUser.uid)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          if (currentDoc.uid === currentUser.uid) {
            getCurrentProfileFromFirebase.push({
              ...doc.data(), //spread operator
              key: doc.id, // 'id' given to us by Firebase
            });
          }
        });
        var currentProfileRef = db
          .collection("Users")
          .doc(getCurrentProfileFromFirebase[0].key);
        currentProfileRef.update(formData);
      });

    setSuccess(true);
  };

  if (loading) {
    return <h5>loading data...</h5>;
  }
  // END UPDATE EXISTING PROFILE //

  // DELETE PROFILE
  function deleteProfile(e) {
    e.preventDefault();
    setLoading(true);

    db.collection("Users").doc(currentUser.uid).delete();

    setLoading(false);
  }
  // end delete user profile

  return (
    <div style={{ margin: "75px" }}>
      {error && <Alert variant="warning">{error}</Alert>}

      <h1>Update Your profile</h1>

      {currentProfile.length > 0 ? (
        <Container>
          <Form onSubmit={updateProfile}>
            <Form.Group className="mt-3 bg-light p-3 border">
              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="first_name"
                    defaultValue={currentProfile[0].first_name}
                    required
                  ></Form.Control>
                </Col>

                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="last_name"
                    defaultValue={currentProfile[0].last_name}
                    required
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
                    defaultValue={currentProfile[0].ag_affiliated}
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
                    defaultValue={currentProfile[0].ag_credentialed}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mt-3 bg-light p-3 border">
            <Form.Label>My Assemblies of God employer <small>(if applicable)</small></Form.Label>
    <br /><small>ex. General Council of the Assemblies of God, District Council of the AG, Local AG Church, AG Family Servers Dba COMPACT, AG US Missions, AG University etc </small>
              <Form.Control
                id="org_ag"
                type="text"
                defaultValue={currentProfile[0].org_ag}
                placeholder="General Council of the AG, District Council of the AG, Local AG Church ..."
              ></Form.Control>

              <Form.Label className="mt-3">My Title/Role</Form.Label>
              <Form.Control
                id="org_ag_title"
                type="text"
                defaultValue={currentProfile[0].org_ag_title}
              ></Form.Control>

              <Form.Label className="mt-3">My AG employer website URL</Form.Label>
              <Row>
                <Col md={1} className="d-flex align-items-center">
                  <small>https://</small>
                </Col>
                <Col>
                  <Form.Control
                    id="org_ag_url"
                    defaultValue={currentProfile[0].org_ag_url}
                    type="text"
                    placeholder="URL"
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>


            <Form.Group className="mt-3 bg-light p-3 border">
    <Form.Label>Name of my organization or corporation <small>(if applicable)</small></Form.Label>
    <Form.Control id="org_other" type="text"
    placeholder="ex. 501c3, for profit corporation etc"
    defaultValue={currentProfile[0].org_other}

    ></Form.Control>
   
    <Form.Label className="mt-3">My Title/Role</Form.Label>
    <Form.Control id="org_other_title" type="text"
                defaultValue={currentProfile[0].org_other_title}
                ></Form.Control>

    <Form.Label className="mt-3">My organization or corporation website URL</Form.Label>
    <Row>
        <Col md={1} className="d-flex align-items-center">
        <small>https://</small>
        </Col>
        <Col>
    <Form.Control id="org_other_url" type="text" placeholder="URL"
                defaultValue={currentProfile[0].org_other_url}
                ></Form.Control>
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
                    defaultValue={currentProfile[0].fosterParent}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={10}>
                  <Form.Label>
                    Number of foster children in my home this year.
                    <small> (Kindship and non-kinship)</small>
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    inline
                    id="numberOfFosterKids"
                    type="number"
                    defaultValue={currentProfile[0].numberOfFosterKids}
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mt-3 bg-light p-3 border">
              <Form.Label>
                Street Address{" "}
                <small>(Your street address will not be made public.)</small>
              </Form.Label>
              <Form.Control
                id="street_address"
                type="text"
                defaultValue={currentProfile[0].street_address}
                placeholder="Street Address"
              ></Form.Control>

              <Row className="mt-3">
                <Col>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    id="city"
                    type="text"
                    placeholder="City"
                    defaultValue={currentProfile[0].city}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    required
                    id="state"
                    as="select"
                    defaultValue={currentProfile[0].state}
                  >
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
                    defaultValue={currentProfile[0].user_zip}
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
                  <Form.Control
                    id="social_media"
                    type="text"
                    placeholder="URL"
                    defaultValue={currentProfile[0].social_media}
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mt-3 bg-light p-3 border">
              <Form.Label>The Name of my Church</Form.Label>
              <Form.Control
                id="church"
                type="text"
                defaultValue={currentProfile[0].church}
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
                    defaultValue={currentProfile[0].ag_church}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Comments about you or your organization</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                id="comments"
                type="text"
                defaultValue={currentProfile[0].comments}
              ></Form.Control>
            </Form.Group>

            <Form.Control
              type="hidden"
              id="email"
              defaultValue={currentUser.email}
            ></Form.Control>

            <Container className="my-3 d-flex justify-content-around">
              <Button disabled={loading} type="submit">
                Update Profile
              </Button>

              <Button
                disabled={loading}
                variant="danger"
                onClick={deleteProfile}
              >
                Delete Profile
              </Button>
            </Container>
            <p className="text-center">
              <small>
                <em>
                  *Deleting profile will only remove your profile from the
                  network directory. You will still be able to log into your
                  account.
                </em>
              </small>
            </p>
          </Form>
          {success && (
            <div
              className="alert alert-success"
              style={{ padding: "20px", marginTop: "25px" }}
            >
              Your profile has been updated!
            </div>
          )}
        </Container>
      ) : (
        <Container
          className="d-flex flex-column align-items-center justify-content-center text-center"
          style={{ minHeight: "65vh" }}
        >
          <h4>
            No profile found yet.
            <br /> Your profile is how you are found in the network.
          </h4>
          <br />
          <Link to="/create-profile">
            <h3>
              <strong>Let's create create one!</strong>
            </h3>
          </Link>
        </Container>
      )}
    </div>
  );
}
