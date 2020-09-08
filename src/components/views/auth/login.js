import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { open_login, close_login } from "../../../actions/authActions";

const Login = (props) => {
  const { login_user_request, close_login, ...rest } = props;
  return (
    <Modal
      {...rest}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton onClick={()=> close_login()}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="custom-color"
        >
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md="8" className="ml-auto mr-auto">
            <Formik
              initialValues={{
                userName: "",
                email: "",
                password: "",
                passwordConfirmation: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email")
                  .required("Enter your password"),
                password: Yup.string().required("Password is required").min(8, "Atleast 8 Characters")
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  login_user_request(values);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                  <Form className="register">
                      
                    <Form.Group>
                      <Form.Label className="font-14 p-color">
                        Email address
                    </Form.Label>
                      <Form.Control
                        type="email"
                        size="md"
                        placeholder="Enter your email"
                        className={
                          touched.email && errors.email
                            ? "custom-input errorInput"
                            : "custom-input"
                        }
                        id="email"
                        name="email"
                        value={values.email}
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email ? (
                        <div className="text-danger mt-1 font-12">
                          {errors.email}
                        </div>
                      ) : null}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="font-14 p-color">
                        Password
                    </Form.Label>
                      <Form.Control
                        type="password"
                        size="md"
                        placeholder="Password"
                        className={
                          touched.password && errors.password
                            ? "custom-input errorInput"
                            : "custom-input"
                        }
                        id="password"
                        name="password"
                        value={values.password}
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password ? (
                        <div className="text-danger mt-1 font-12">
                          {errors.password}
                        </div>
                      ) : null}
                    </Form.Group>
                    <Button
                      size="md"
                      variant="outline-info"
                      className="outline-custom-purple float-right"
                      type="submit"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                    >
                        <i className="fa fa-check-circle-o" aria-hidden="true"></i>{" "}
                        Login
                    </Button>
                  </Form>
                )}
            </Formik>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <p className="font-12">
          Have and account, click{" "}
          <a href="/" className="text-primary">
            here to login
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
};
const mapStateToProps = ({ Auth }) => {
  const { auth_error, user_details } = Auth;
  return { auth_error, user_details };
}
export default connect(mapStateToProps, { open_login, close_login })(Login);