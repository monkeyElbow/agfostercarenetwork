import { db } from "../util/firebase";
import { Card, Container, Row, Col, Alert, Button, Accordion } from "react-bootstrap";
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
     .where("ag_affiliated", "==", "Yes")
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


  const [userMessage, setUserMessage] = useState("")
  const handleUserMessage = (e) => {
setUserMessage(e.target.value)
  }


  function SendMail(e) {
    e.preventDefault();
    db.collection('mail').add({
      to: 'james.gerhold@gmail.com',
      message: {
        subject: 'Network User Message',
        text: `${currentUser.email} Wanted to reach out to you through the AG Foster Care Network. This is what they had to say: 
        `,
        replyTo:`${currentUser.email}`
        // html: 'This is the <code>HTML</code> section of the email body.',
      }
    }).then(() => console.log('Queued email for delivery!'));
    }
    



  return (
    <>



      <Container>
      <h3>AG Foster Care Network Members</h3>


      {loading && <Alert variant="light">Loading...</Alert>}
      {error && <Alert variant="warning">{error}</Alert>}


<Accordion>
<Row>

{/* last name sorted list */}
{profiles &&
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
{profile.fosterParent === "Yes" && (
  <p>I am a Foster parent</p>
)}

{/* STATE */}
{profile.state !== "NONE" &&
<p>State: {profile.state}</p>
}

{/* CREDENTIALED */}
{profile.ag_credentialed === "Yes" && (
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
