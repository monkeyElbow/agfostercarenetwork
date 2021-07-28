import React, { useState, useEffect } from 'react';
import { db } from "../util/firebase";
import { useAuth } from "../util/AuthContext";

const TestProfile = () => {
  const { currentUser } = useAuth()
  console.log(currentUser);

  // SAVING PROFILE INFO CODE //
  const saveAnswer = (event) => {
    event.preventDefault();
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

  // FETCH PROFILES CODE //
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getProfilesFromFirebase = [];
    const getCurrentProfileFromFirebase = [];
    const subscriber = db.collection("Users").get(currentUser.uid).then((querySnapshot) => {
      console.log("pulling data");
      if(getProfilesFromFirebase.length < 1){
        console.log("fetching from firebase");
        querySnapshot.forEach((doc) => {
          getProfilesFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.id, // 'id' given to us by Firebase
          });
          const currentDoc = doc.data();
          if(currentDoc.uid === currentUser.uid){
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
    return (subscriber);
  }, [loading, currentUser, currentProfile]); // empty dependencies array => useEffect only called once
  

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
    }, []);

    const getCurrentProfileFromFirebase = [];
    db.collection("Users")
    .get(currentUser.uid)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const currentDoc = doc.data();
        if(currentDoc.uid === currentUser.uid){
          getCurrentProfileFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.id, // 'id' given to us by Firebase
          });
        }
      });
      var currentProfileRef = db.collection("Users").doc(getCurrentProfileFromFirebase[0].key);
      currentProfileRef.update(formData);
    });

    setSuccess(true);
  };
  
  if (loading) {
    return <h1>loading firebase data...</h1>;
  }
  // END UPDATE EXISTING PROFILE //

  return (
    <div style={{margin: "100px"}}>
      <h1>Add New Test User Profile</h1>
      <br />
      <form onSubmit={saveAnswer}>
        <input type="text" id="name" placeholder="Full name..." required></input><br /><br />

        <input type="text" id="favoritecolor" placeholder="Favorite color..." required></input><br /><br />
        <input type="hidden" id="email" value={currentUser.email}></input>
        <input type="hidden" id="uid" value={currentUser.uid}></input>
        <button>Submit to Firebase</button>
      </form>
      <br /><br />

      <h1>All Profiles:</h1>
      <br />
      {profiles.length > 0 ? (
        profiles.map((profile) => <div key={profile.key}>{profile.name} - {profile.email} - {profile.favoritecolor}</div>) // Post is the record in the database and the attributes are from those records (i.e. name, email, etc.)
      ) : (
        <h1>no profiles yet</h1>
      )}
      <br /><br />

      <h1>Current User's Profile:</h1>
      <br />
      {currentProfile.length > 0 ? (
        currentProfile.map((profile) => <div key={profile.key}>{profile.name} - {profile.email} - {profile.favoritecolor}</div>) // Post is the record in the database and the attributes are from those records (i.e. name, email, etc.)
      ) : (<h1>no profiles yet</h1>)}
      <br /><br />

      <h1>Update Existing User</h1>
      {currentProfile.length > 0 ? (
      <form onSubmit={updateProfile}>
        <input type="text" id="name" defaultValue={currentProfile[0].name} required></input><br /><br />
        <input type="text" id="favoritecolor" defaultValue={currentProfile[0].favoritecolor} required></input><br /><br />
        <input type="hidden" id="email" value={currentUser.email}></input>
        <button>Update Firebase</button>
      </form>
      ) : (<h1>no profiles yet</h1>)}
      
      {success && (
        <div className="alert alert-success" style={{padding: "20px", marginTop: "25px"}}>Your profile has been updated!</div>
      )}
      
    </div>
  );
};

export default TestProfile;
