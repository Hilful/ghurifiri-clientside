import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import "./Login.css";
const Login = () => {
  const {
    googleSignIn,
    setError,
    setUser,
    setIsLoading,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || '/';

  const handleGoogleSignin = () => {
    setIsLoading(true)
    googleSignIn()
      .then((result) => {
        setUser(result.user)
        setError('')
        history.push(redirect_uri);
      }).catch((error) => {
        setError(error.message)
      }).finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <div className="auth-home margin">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6} className="mx-auto">
            <div className="login-container p-5 my-5 rounded-1 ">
              <h2 className="font-monospace fw-bold text-center">Sign in using</h2>
              <br />
              <div className="text-center">
                <button onClick={handleGoogleSignin} className="btn btn-outline-light rounded-pill"><i className="fab fa-google"></i> Google Sign in</button>     <br />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;