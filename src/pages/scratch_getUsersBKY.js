import { db } from "../util/firebase";
import { Card, Container, Row, Col, Alert, Button, Accordion, Pageination } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function GetAllUsers() {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);


  // FETCH PROFILES CODE ON LOAD //

  useEffect(() => {
    setLoading(true);
    const getProfilesFromFirebase = [];
   try {
     return db
     .collection("Users")
     .where("ag_affiliated", "==", "true")
     .orderBy("last_name")
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
          setLoading(false);
        }
      })

    } catch (error) {
          setError("Trouble gathering profiles. Please try again later.");
        }
    
  }, []);





const [sortBy, setSortBy] = useState('name')

// function sortByState() {
//   if (profiles > 0) {

//   }
// setSortBy('state')
// }


useEffect(() => {
try{
  const newSort = [...profiles]
// profiles.sort(function(a, b))

//  please org by state and setting state

// setData(newSort)
} catch {
  setError('nah')
}
},[])



  return (
    <>



      <Container>
      <h3>AG Foster Care Network Members</h3>


    {/* <Button variant="link" onClick={sortByState}>State</Button> */}
      {/* <p>Sorted by: {sortBy} </p> */}

      {loading && <Alert variant="light">Loading...</Alert>}
      {error && <Alert variant="warning">{error}</Alert>}


<Accordion>
<Row>

{/* last name sorted list */}
{sortBy === "name" &&
(
  profiles
  // .filter()
  // .sort(( a, b ) => (a.state - b.state ? 1 : -1))
  // .sort((profiles.state[0], profiles.state[1]) => a - b)
  .map((profile) => (
    <Col sm={12} md={12} lg={6} key={profile.key}>
   
    <Card className="my-1">
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={profile.key} className="stretched-link">
        <h5 className="mt-2" style={{color:"var(--color1)", textDecoration:"none", fontSize:"1rem"}}>
          <strong>
        {profile.first_name}{" "}
        {profile.last_name}
          </strong>
        </h5>
        
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={profile.key}>
<Card.Body>

{/* ORG */}
{profile.org && <h5>{profile.org}</h5>}

{/* TITLE */}
{profile.title && (
  <p className="text-capitalize" style={{lineHeight:".25rem"}}>
    <strong>{profile.title}</strong>
  </p>
)}

{/* ORG URL */}
{profile.org_url && (
  <p>
    {/* Organization Website:{" "} */}
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`https://${profile.org_url}`}
    >
      <strong>{profile.org_url}</strong>
    </a>
  </p>
)}

{/* FOSTER PARENT */}
{profile.fosterParent === "true" && (
  <p>I am a Foster parent</p>
)}

{/* STATE */}
{profile.state !== "NONE" &&
<p>State: {profile.state}</p>
}

{/* CREDENTIALED */}
{profile.ag_credentialed === "true" && (
  <p>AG Credentialed</p>
)}

{/* SOCIAL MEDIA URL */}
{profile.social_media && (
  <p>
    {/* Social Media:{" "} */}
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`https://${profile.social_media}`}
    >
      <strong>{profile.social_media}</strong>
    </a>
  </p>
)}
{/* COMMENTS */}
{profile.comments && (
  <p>
    <strong>
      <small>Comments:</small>
    </strong>
    :
    <br />
    {profile.comments}
  </p>
)}

</Card.Body>
      </Accordion.Collapse>
    </Card>
    </Col>
  ))
  )} 
{/* end sort by last name */}
</Row>

  </Accordion>
  {/* end accordian */}




      
      </Container>
    </>
  );
}
