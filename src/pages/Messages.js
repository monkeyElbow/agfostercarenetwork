import { db } from "../util/firebase";
import { useAuth } from "../util/AuthContext";
import { Container, Form, Button, Alert } from "react-bootstrap";
import firebase from "firebase/compat/app";

import { useState, useEffect } from "react";

export default function Messages() {
//   const [currentDate] = useState(Date());
const messagesRef = db.collection('Messages')
  const [newMessage, setNewMessage] = useState("");
  const handleUserInput = (e) => {
    setNewMessage(e.target.value);
  };

  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

//   fetch messages on page load
  useEffect(() => {
    console.log("begin fetch messages");
    setError("");
    const getMessagesFromFirestore = [];
    const getUserMessagesFromFirestore = [];
    try {
      return (
        db
          .collection("Messages")
          .get()
          // .orderBy('createdAt')
          // .limit(100)
          .then((querySnapshot) => {
            if (getMessagesFromFirestore.length < 1) {
              querySnapshot.forEach((doc) => {
                getMessagesFromFirestore.push({
                  ...doc.data(),
                  key: doc.id,
                });
                const currentDoc = doc.data();
                if (currentDoc.uid === currentUser.uid) {
                  getUserMessagesFromFirestore.push({
                    ...doc.data(),
                    key: doc.id,
                  });
                }
              });

              setMessages(getMessagesFromFirestore);
              console.log(messages);
            }
          })
      );
    } catch (error) {
      setError("Problem getting messages.");
    }
  }, []);


  // send message from form
  const sendMessage = (event) => {
    event.preventDefault();
    setLoading(true);

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
messagesRef.add({
    message: trimmedMessage,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    senderId: currentUser.uid,

});
    }

    // db.collection("Messages").doc(currentUser.uid).set(formData);
    setLoading(false);
    setNewMessage("");
  };


//   delete message button
function deleteMessage(e) {
    e.preventDefault();
    db.collection("Messages").doc().delete();
    console.log('delete message engaged');
}


  return (
    <>
      <Container>
        {loading && <Alert variant="primary">Loading</Alert>}
        {error && <Alert variant="warning">{error}</Alert>}
        <h2>Incoming Messages</h2>

        {messages.length > 0 ? (
          messages.map((message) => (
            <Alert className="d-flex" variant="success" key={message.key}>
              <Button onClick={deleteMessage}>x</Button>
              <p>{message.id}</p>
                <p>
              {message.message}
                </p>
                <p> {" "}
              {message.key}
                </p>
            </Alert>
          ))
        ) : (
          <p>No messages just yet.</p>
        )}
      </Container>


      <Container>
        <h2>Send Message</h2>
        <Form onSubmit={sendMessage}>
          {/* <Form.Group hidden>
            <Form.Control
              id="createdAt"
              type="text"
              defaultValue={currentDate}
            ></Form.Control>
          </Form.Group>

          <Form.Group hidden>
            <Form.Control
              id="senderId"
              type="text"
              defaultValue={currentUser.uid}
            ></Form.Control>
          </Form.Group> */}
          {/* {inputValue} */}
          <Form.Group className="my-3">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              onChange={handleUserInput}
              value={newMessage}
              as="textarea"
              rows="4"
              id="message"
            ></Form.Control>
          </Form.Group>

          <Button className="mb-4" disabled={loading} type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </>
  );
}
