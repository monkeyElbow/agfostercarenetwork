import { db } from "../util/firebase";
import { useAuth } from "../util/AuthContext";
import { Container, Form, Button, Alert } from "react-bootstrap";

import { useState, useEffect } from "react";



export default function Messages() {  
    const [currentDate ] = useState(Date());
    const [inputValue, setInputValue] = useState('');
    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    const { currentUser } = useAuth();

    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([])
  const [error, setError] = useState(null);

useEffect(() => {
console.log('begin fetch messages')
    setError('')
try {
    
return db
.collection('Messages')
// .get()
// .orderBy('createdAt')
// .limit(100)
.then((querySnapshot) => {
    const data = querySnapshot.forEach(doc => ({
        ...doc.data(),
        id: doc.id,
    }));
    setMessages(data)
    console.log('finished setting messages')
})
} catch (error) {
 setError("Problem getting messages.")
}

}, [])
    
// useEffect(() => {
//     const getMessagesFromFirestore = [];
//     const getThisUserMessages = [];
//     try {
//         return db
//         .collection("Messages")
//         .get(currentUser.uid)
//         .then((querySnapshot) => {
//             if (getMessagesFromFirestore.length < 1) {
//                 querySnapshot.forEach((doc) => {
//                     getMessagesFromFirestore.push({
//                         ...doc.data(),
//                         key: doc.id,
//                     });
//                     const currentDoc = doc.data();
//                     if (currentDoc.uid === currentUser.uid) {
//                         getThisUserMessages.push({
//                             ...doc.data(),
//                             key: doc.id,
//                         })
//                     }
//                 });
//                 setMessages(getThisUserMessages);
//                 setLoading(false);
//             }
//         });
//     } catch (error) {
//         setError("trouble")
//     }
// }, [])



// send message from form
    const sendMessage = (event) => {
        event.preventDefault()
        setLoading(true)
        const elementsArray = [...event.target.elements];
        const formData = elementsArray.reduce((accumulator, currentValue) => {
          if (currentValue.id) {
            accumulator[currentValue.id] = currentValue.value;
          }
    
          return accumulator;
        }, {});
    
        db.collection("Messages").doc().set(formData);
    setLoading(false)
      setInputValue('')
    }

    return (
        <>

<Container>
    {loading && <Alert variant="primary">Loading</Alert>}
    {error && <Alert variant="warning">{error}</Alert>}
    <h2>Incoming Messages</h2>


{messages.length > 0 ? (
messages.map((message) => <div key={message.id}>{message.message}</div>)
) : (
<h5>No messages just yet.</h5>
)}


</Container>

           <Container>
               <h2>Send Message</h2>
               <Form onSubmit={sendMessage}>
<Form.Group hidden>
<Form.Control id="createdAt" type="text" defaultValue={currentDate}></Form.Control>
</Form.Group>

<Form.Group hidden>
    <Form.Control id="senderId" type="text" defaultValue={currentUser.uid}></Form.Control>
</Form.Group>
{inputValue}
<Form.Group className="my-3">
    <Form.Label>Message:</Form.Label>
    <Form.Control onChange={handleUserInput} value={inputValue} as="textarea" rows="4" id="message"></Form.Control>
</Form.Group>

<Button className="mb-4" disabled={loading} type="submit">Send Message</Button>
               </Form>
               </Container> 
        </>
    )
}
