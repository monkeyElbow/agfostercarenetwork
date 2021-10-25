import { useState } from "react";
import { db } from "../util/firebase";


import { Container, Form, Button, Alert } from "react-bootstrap";
// import { useAuth } from "../util/AuthContext";


export default function Contact() {


    return (
        <Container className="py-3 d-flex flex-column align-items-center justify-content-center" style={{minHeight:"88vh"}}>
<h5>
         Contact Us
</h5>
<MailUserForm />
        </Container>
    )
}




// -----------------
      // begin mail from public form
      function MailUserForm() {
        // const { currentUser } = useAuth();
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [msg, setMsg] = useState("")
        const [msgSent, setMsgSent] = useState(false)
const [human, setHuman] = useState(false)

        

        function humanCheck(e) {
            e.preventDefault()
            setHuman(true)
        }


        function SendIt(e) {
          e.preventDefault();
          db.collection('mail').add({
            to: "tstackpole@agfsa.org",
            replyTo:`${email}`,
            // from:`${currentUser.email}`,
            message: {
              subject: 'Message from AG Foster Care Network Contact Us Page',
              text: `${msg}
              `,
              html: `${msg}
              `,
            }
          }).then(() => console.log('Queued email for delivery!'));
        
          setMsgSent(true)
          setMsg("")
          }
          
          return (
<>
{msgSent &&
<h5>Message sent. Thanks!</h5>

}


{!msgSent &&
            <Form style={{maxWidth:"30rem"}} onSubmit={SendIt} className="bg-white p-4 text-center">
            <h5>Start a conversation with a team network team member here:</h5>

<Form.Group controlId="name">
            <Form.Control
            type="text" 
            value={name} 
            onInput={e => setName(e.target.value)} type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="email" className="my-2">
            <Form.Control
            required
            type="text" 
            placeholder="email"
            defaultValue={email} 
            onInput={e => setEmail(e.target.value)} type="email" />
            </Form.Group>

                
            <Form.Group controlId="message">
            <Form.Control
            required
            as="textarea" 
            value={msg} 
            placeholder="Your message..."
            onInput={e => setMsg(e.target.value)} type="text" />
            </Form.Group>
        
        {!human &&
        <Button
        onClick={humanCheck}
        className="my-1 btn-secondary"
        >I am indeed human</Button>
        }
        
        {human &&
        <Button disabled={msgSent} type="submit" className="my-1"
        >Send Email</Button>
        }
            </Form>
    } 
    {/* end msg sent form */}


            </>
          )
        }
        // end send email form
        // ---------------------------------