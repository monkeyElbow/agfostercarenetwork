// import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
// import { useAuth } from "../util/AuthContext";
// import { db } from "../util/firebase";

import GetAllUsers from "../components/GetAllUsers";

export default function NetworkPage() {
//   const { currentUser } = useAuth();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [allUsers, setAllUsers] = useState([]);

//   const [names, setNames] = useState([]);

//   useEffect(() => {
//     const fetchNames = async () => {
//       try {
//         const ref = db.collection("Users");
//         const docs = await ref.get();

//         let allNames = [];
//         docs.forEach((doc) => {
//           const data = doc.data();
//           allNames.push(data.name);
//         });
//         setNames(allNames);
//         // console.log(names)
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchNames();
//   }, []);

  return (
    <>
      <Container className="py-5"
    style={{minHeight:"86vh"}}
            >
        <GetAllUsers />
      </Container>
    </>
  );
}



// db.collection('Users').doc(user.uid).collection('name').onSnapshot((snapshot) => {...});