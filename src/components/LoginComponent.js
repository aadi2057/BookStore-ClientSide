import React, { useState, useEffect } from "react";
import { Label, Form, Input, FormGroup, Col, Row, Button } from "reactstrap";
// import { Control, Form } from "react-redux-form";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link, withRouter, useHistory } from "react-router-dom";
import { SentimentSatisfied } from "@material-ui/icons";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successSnackbar, setSuccessSnackbar] = useState(
    props.auth.loginSuccess
  );
  const [isLoginErr, setIsLoginErr] = useState(props.auth.errMess);
  const history = useHistory();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsLoginErr(null);
    setSuccessSnackbar(false);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    // alert(`Username: ${username} and Password: ${password}`);
    props.login(username, password);
    // props.fetchFavourites();
  };
  useEffect(() => {
    if (props.auth.user) {
      history.push('/menu');
    }
  });

  return (
    <div className="container" style={{ marginBottom: "21vh" }}>
      <div className="row mb-5" style={{ justifyContent: "center" }}>
        <h2 className="text-center">Login Page</h2>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <Form className="col-8" onSubmit={handleSubmit}>
          <FormGroup>
            <Row className="mb-2">
              <Label md={2} for="username">
                Username
              </Label>
              <Col md={9}>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row className="mb-2">
              <Label md={2} for="password">
                Password
              </Label>
              <Col md={9}>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="passowrd"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} className="offset-md-2">
                <Button color="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col className="col-12 offset-md-2">
                <p className="mr-2 d-inline">Don't have an account? </p>{" "}
                <Link to="/users/register">
                  <a className="d-inline streched-link h6">Sign Up</a>{" "}
                </Link>
              </Col>
            </Row>
          </FormGroup>
        </Form>
        <Snackbar
          open={successSnackbar}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity="success">
            Login Successful <SentimentSatisfied />
          </Alert>
        </Snackbar>
        <Snackbar
          open={isLoginErr}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity="error">
            Login Unsuccessful. Please Try again with correct credentials.
            <br />
          </Alert>
        </Snackbar>
        {/* {props.auth.user ? history.goBack() : null} */}
        {/* {props.auth.loginSuccess ? history.goBack() : <div></div>} */}
      </div>
    </div>
  );
}

export default withRouter(Login);
