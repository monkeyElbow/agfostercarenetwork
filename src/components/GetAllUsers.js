import { db } from "../util/firebase";
import { useAuth } from "../util/AuthContext";
import { Card, Container } from "react-bootstrap";
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

  const { currentUser } = useAuth();
  // console.log(currentUser);



  // FETCH PROFILES CODE //
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getProfilesFromFirebase = [];
    const getCurrentProfileFromFirebase = [];
    const subscriber = db
      .collection("Users")
      .get(currentUser.uid)
      .then((querySnapshot) => {
        console.log("pulling data");
        if (getProfilesFromFirebase.length < 1) {
          console.log("fetching from firebase");
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
            <Container className="p-3" key={profile.key}>
       <Card>
                <Card.Header className="text-white pt-3"
                style={{backgroundColor:"var(--color1)", color:"#000"}}
                >

                  <h4>{profile.name}</h4>
</Card.Header>
<Card.Body className="p-3">



{profile.org !== "" && 
                  <Card.Subtitle>
                     Organization: {profile.org}
                      </Card.Subtitle>
}
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

              
                    
                  
                  {profile.fosterParent === "true" &&
<p>Foster parent</p>
                }
              
                




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

                {profile.ag_credentialed == "true" && <p>AG Credentialed</p>}
                <p>{profile.comments}</p>

                      </Card.Body>
            
        </Card>
            </Container>
          ))
        ) : (
          <h5>no profiles found</h5>
        )}
      </Container>
    </>
  );
}

// db.collection('Users').doc(user.uid).collection('name').onSnapshot((snapshot) => {...});
