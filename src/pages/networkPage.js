import { useState } from "react";
import { db } from "../util/firebase";


import { Container, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../util/AuthContext";
// import { db } from "../util/firebase";

// import GetAllUsers from "../components/GetAllUsers";
import NetworkTable from "../components/NetworkTable";

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
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchNames();
//   }, []);
function ToggleAlertVis(e) {
  if (AlertVis === true){
    setAlertVis(false)
  }
}
const [AlertVis, setAlertVis] = useState(true) 
  return (
    <>
      <Container className="py-5"
    style={{minHeight:"86vh"}}
            >
 <h3>AG Foster Care Network Members</h3>

{ AlertVis === true && 
 <Alert className="text-center" variant="primary">
   <MailUserForm />
   <br />
        <small>Or reach out to other network members below.</small> <Button onClick={ToggleAlertVis}>Got it</Button>
      </Alert>
}

              <NetworkTable />
        {/* <GetAllUsers /> */}
      </Container>
    </>
  );
}



     // -----------------
      // begin user mail form
      function MailUserForm({emailTo, first_name}) {
        const { currentUser } = useAuth();

        const [msg, setMsg] = useState("")
        const [msgSent, setMsgSent] = useState(false)
        
        function SendIt(e) {
          e.preventDefault();
          db.collection('mail').add({
            to: "tstackpole@agfsa.org",
            replyTo:`${currentUser.email}`,
            // from:`${currentUser.email}`,
            message: {
              subject: 'Message from AG Foster Care Network Member',
              text: `${currentUser.email} says:${" "} ${msg}
              `,
              html: `${currentUser.email} says:${" "} ${msg}
              `,
            }
          }).then(() => console.log('Queued email for delivery!'));
        
          setMsgSent(true)
          setMsg("")
          }
          
          return (
            <Form onSubmit={SendIt} className="bg-white p-4">
            <p className="lead">Start a conversation with a team network team member here:</p>

            <Form.Control
            as="textarea" 
            value={msg} onInput={e => setMsg(e.target.value)} type="text" />
        
        {msgSent === false &&
        <Button
           type="submit" 
           className="my-1"
        >Send email</Button>
        }
        
        {msgSent === true &&
        <Button disabled type="submit" className="my-1"
        >Email sent!</Button>
        }

            </Form>
          )
        }
        // end send email form
        // ---------------------------------