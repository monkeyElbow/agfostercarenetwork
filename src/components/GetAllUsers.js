import { db } from "../util/firebase";
// import { useAuth } from "../util/AuthContext";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function GetAllUsers() {
  //   const { currentUser } = useAuth()

  // const [loading, setLoading] = useState(true)
  // const [profiles, setProfiles] = useState([]);
  // const [error, setError ] = useState("")

  // useEffect(() => {

  //     try {

  //         return db.collection('users').get().then((querySnapshot) => {

  //             const userData = [];

  //             querySnapshot.forEach((doc) => {
  //                 userData.push({
  //                     ...doc.data(), key:doc.id
  //                 })
  //             })

  //             setProfiles(userData)
  //             setLoading(false)
  //             console.log(profiles)
  //         })

  //     } catch(err) {
  // setError("trouble loading profiles")
  //     }

  // }, []);

  // console.log(currentUser);

  // FETCH PROFILES CODE //
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getProfilesFromFirebase = [];
    const subscriber = db
      .collection("Users")
      .get()
      .then((querySnapshot) => {
        if (getProfilesFromFirebase.length < 1) {
          console.log("fetching");
          querySnapshot.forEach((doc) => {
            getProfilesFromFirebase.push({
              ...doc.data(),
              key: doc.id,
            });
          
          });
          setProfiles(getProfilesFromFirebase);
          // setCurrentProfile(getCurrentProfileFromFirebase);
          setLoading(false);
        }
      }, []);

    // return cleanup function
    return subscriber;
  }, [loading]); // empty dependencies array => useEffect only called once

  return (
    <>
      <h3>AG Foster Care Network Members</h3>

      {loading && <div>Loading...</div>}
      {/* {error && <div>{error}</div>} */}

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
                  <h5>{profile.first_name}{' '}{profile.last_name}</h5>
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

                  {profile.ag_credentialed === "true" && <p>AG Credentialed</p>}

                  {profile.org && <p>Notes about {profile.org}:</p>}
                  {profile.comments && <p>{profile.comments}</p>}
                </Card.Body>
              </Card>
        </Col>
            </Row>
          ))






        ) : (
          <h5>no profiles found</h5>
        )}
      </Container>
    </>
  );
}
