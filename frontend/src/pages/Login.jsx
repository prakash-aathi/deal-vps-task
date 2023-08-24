import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const initialState = {
        form: {
            username: "",
            password: "",
        }, errors: {
            hasError: false,
            username: "",
            password: "",
            customError: "",
        }
    }

    const [formData, setFormData] = React.useState(initialState.form);
    const [formErrors, setFormErrors] = React.useState(initialState.errors);
    const [loader, setLoader] = React.useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        setFormErrors(initialState.errors);
        let anyError = false;
        if (formData.username === "") {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, username: "   username is required" };
            });
            anyError = true;
        }
        if (formData.password === "") {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, password: "   Password is required" };
            });
            anyError = true;
        }
        if (!anyError) {
            console.log(formData);
            axios.get(`http://localhost:8080/login?username=${formData.username}&password=${formData.password}`)
                .then(res => {
                    console.log(res.data);
                    if (res.data.success === "true") {
                        localStorage.setItem("token", res.data.authenticationtoken);
                        alert("Successfully logged in")
                    } else {
                        setFormErrors((prev) => {
                            return { ...prev, hasError: true, customError: "Invalid username or password" };
                        });
                        alert("Invalid username or password")
                    }
                }).catch(err => {
                    console.log(err);
                    alert("Something went wrong")
                })
        }
        setLoader(false);
    }

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-2 border-primary"></div>
                        <Card className="shadow px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">Web app Name</h2>
                                    <div className="mb-3">
                                        <Form>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Username
                                                </Form.Label>
                                                {formErrors.hasError && formErrors.username !== "" && (
                                                    <Form.Text className="text-danger">
                                                        {formErrors.username}
                                                    </Form.Text>
                                                )}
                                                <Form.Control type="text" placeholder="Enter username" name="username" value={formData.username} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                {formErrors.hasError && formErrors.password !== "" && (
                                                    <Form.Text className="text-danger">
                                                        {formErrors.password}
                                                    </Form.Text>
                                                )}
                                                <Form.Control type="password" placeholder="Password" name='password' value={formData.password} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                            </Form.Group>
                                            <div className="d-grid">
                                                {loader && <div>loading...</div>}
                                                {formErrors.hasError && formErrors.customError !== "" && (
                                                    <Form.Text className="text-danger">
                                                        {formErrors.customError}
                                                    </Form.Text>
                                                )}

                                                <Button variant="primary" onClick={handleSubmit} >
                                                    Log in
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account?{" "}
                                                <Link to="/signup" className="text-primary fw-bold">
                                                    Sign Up
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Login