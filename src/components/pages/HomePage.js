import React from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { WorldAnimation } from "../common/Common";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <Container textAlign="center" style={{ width: "50%" }}>
        <WorldAnimation />
        <Header as="h1" style={{ margin: "0" }}>
          React Test Application
        </Header>
        <Header as="h3" color="teal" style={{ margin: "0" }}>
          CYPRESS
        </Header>
        <p>The modern tool for writing UI and API tests.</p>
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                />

                <Button
                  content="Login"
                  color="teal"
                  title="Click to proceed."
                />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button
                name="register"
                content="Register"
                icon="signup"
                size="big"
                color="teal"
                title="Register to learn cypress."
                onClick={() => history.push("/signup")}
              />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </Container>
    </div>
  );
};
export default Home;
