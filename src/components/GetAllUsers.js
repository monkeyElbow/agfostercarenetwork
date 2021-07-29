import { db } from "../util/firebase";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function GetAllUsers() {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  // fetch all users except non affiliated members
  // useEffect(() => {
  //   try {
  //     setLoading(true);
  //     return db
  //       .collection("users")
  //       .where("ag_affiliated", "==", "true")
  // .orderBy("last_name")
  //       .get()
  //       .then((querySnapshot) => {
  //         const userData = [];
  //         querySnapshot.forEach((doc) => {
  //           userData.push({
  //             ...doc.data(),
  //             key: doc.id,
  //           });
  //         });

  //         setProfiles(userData);
  //         setLoading(false);
  //         console.log(profiles);
  //       });
  //   } catch (error) {
  //     setError("Trouble gathering profiles. Please try again later.");
  //   }
  // }, []);


  // FETCH PROFILES CODE ON LOAD //

  useEffect(() => {
    setLoading(true)
    const getProfilesFromFirebase = [];
    return db
      .collection("Users")
      .where("ag_affiliated", "==", "true")
      // .limit(1)
      .orderBy("last_name")
      .get()
      .then((querySnapshot) => {
        if (getProfilesFromFirebase.length < 1) {
          console.log("fetching");
          querySnapshot.forEach((doc) => {
            getProfilesFromFirebase.push({
              ...doc.data(), key: doc.id,
            });

          });
          setProfiles(getProfilesFromFirebase);
          setLoading(false);
        }
      }, []);
  }, []);

  return (
    <>
      <h3>AG Foster Care Network Members</h3>

      {loading && <Alert variant="warning">Loading...</Alert>}
      {error && <Alert variant="warning">{error}</Alert>}

      <Container>
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <Row className="m-3 row-cols-1 p-0" key={profile.key}>
              <Col className="col">
                <Card>
                  <Card.Header
                    className="pt-3"
                    // style={{ backgroundColor: "var(--color1)", color: "#000" }}
                  >
                    <h5>
                      {profile.first_name} {profile.last_name}
                    </h5>
                  </Card.Header>

                  <Card.Body className="p-3">
                    {profile.org !== "" && (
                      <Card.Subtitle>Organization: {profile.org}</Card.Subtitle>
                    )}
                    <p>
                      Organization Website:{" "}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://${profile.org_url}`}
                      >
                        {profile.org_url}
                      </a>
                    </p>

                    {profile.fosterParent === "true" && <p>Foster parent</p>}

                    <p>
                      Social Media:{" "}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://${profile.social_media}`}
                      >
                        {profile.social_media}
                      </a>
                    </p>

                    {/* <p>{profile.state}</p> */}

                    {profile.ag_credentialed === "true" && (
                      <p>AG Credentialed</p>
                    )}

                    {profile.org && <p>Comments: {profile.org}:</p>}
                    {profile.comments && <p>{profile.comments}</p>}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))
        ) : (
          <Alert variant="light">
            <p>
              Member profiles are not available under current conditions.
              <br />
              Please try a different parameter or try again later.
            </p>
          </Alert>
        )}
      </Container>
    </>
  );
}
