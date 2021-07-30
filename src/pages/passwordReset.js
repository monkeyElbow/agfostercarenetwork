import { useState } from "react"
import { Link } from "react-router-dom"

import { Container, Button } from "react-bootstrap";

export default function PasswordReset() {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);

 const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
      event.preventDefault();
  }


return(
    <>
    <Container>

<h2>Reset your password</h2>
<form action="">
    {emailHasBeenSent && (<div>An email has been sent to you.</div>)}

    {error !== null && <div>{error}</div>}

    <label htmlFor="userEmail">Email:</label>
    <input 
    type="email"
    name="userEmail"
    id="userEmail"
    value={email}
    placeholder="Input your email"
    onChange={onChangeHandler}
    />
<Button>
    Send me a reset link.
</Button>

</form>

<Link to="/signin">Back to sign in page</Link>
    </Container>

    </>
)
}
