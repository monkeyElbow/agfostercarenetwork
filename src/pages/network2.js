import { db } from "../util/firebase";
import {  Card, Alert, Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

import { useAuth } from "../util/AuthContext";


export default function Network2() {
    const { currentUser } = useAuth();

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

const [q, setQ] = useState("")

const filterData = profiles.filter(a => {
  return a.last_name.toUpperCase().includes(q.toUpperCase())
});
// const filterData = profiles.filter(a => {
//   if(`a.${sortBy}`.includes(q)) {
//     return `a.${sortBy}`
//     // .toString()
//     .toLocaleLowerCase()
//     .indexOf(q.toLocaleLowerCase()) !== -1
//   }
// })

    return (
        <>
        
<Row>
    <Col md={3} className="p-3">
            <input type="search" name="search-form" id="search-form" placeholder="search..." value={q} onChange={(e) => setQ(e.target.value)} />
        <h5>Arrange List by:</h5>
    <p>First Name</p>
    <p>Last Name</p>
    <p>AG Credentialed</p>
    <p>Foster Parent</p>
    <p>State</p>
    </Col>

    <Col>
            {profiles && (
                <>
{filterData.map(pr =>(
    <Card key={pr.uid} className="m-3">
<Card.Body>

<Card.Title>
    {`First Name: ${pr.first_name}`}
   {" "} {pr.last_name}
</Card.Title>
<Card.Text>
State:{" "}{pr.state}
</Card.Text>
<p>Foster Parent:{" "}{pr.fosterParent}</p>
<p>AG Credential:{" "}{pr.ag_credentialed}</p>

</Card.Body>
    </Card>
))}

</>
            )} 
            {/* end map profiles */}
            </Col>
            </Row>
        </>
    )
}
