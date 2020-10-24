import React from "react";
import {
  Form,
  Button,
  Checkbox,
  Segment,
  Container,
  Icon,
  Header,
} from "semantic-ui-react";
import { WorldAnimation } from "../common/Common";

const Signup = () => {
  return (
    <Container textAlign="center" style={{ width: "50%" }}>
      <WorldAnimation />
      <Header style={{ margin: "0" }} as="h2">Create a New Account</Header>
      <p>Already have one? <a href="http://localhost:3000/home">Sign in here</a></p>
      <Segment>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Email Address</label>
            <input placeholder="test@test.test" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button color="teal" type="submit">Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
};
export default Signup;
