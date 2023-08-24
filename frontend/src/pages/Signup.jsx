import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {

    const initialState = {
        form: {
            accountId: "",
            email: "",
            altEmail: "",
            firstName: "",
            lastName: "",
            commonName: "",
            contactNumber: "",
            password: "",
            confirmPassword: "",
            roles: ["ROLE_USER"],
            groups: ["RAD"]
        }, errors: {
            hasError: false,
            confirmPassword: "",
            customError: "",
        }
    }

    const [formData, setFormData] = React.useState(initialState.form);
    const [formErrors, setFormErrors] = React.useState(initialState.errors);
    const [loader, setLoader] = React.useState(false);
    
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        setFormErrors(initialState.errors);
        let anyError = false;
        if (formData.password !== formData.confirmPassword) {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, confirmPassword: "   Password and Confirm Password must be same" };
            });
            anyError = true;
        }
        setFormData((prev) => {
            return { ...prev, commonName: formData.firstName + " " + formData.lastName };
        });
        if (!anyError) {
            console.log(formData);

            axios.post("http://localhost:8080/register", formData)
                .then((res) => {
                    let data = res.data;
                    if (data.status === "error") {
                        setFormErrors((prev) => {
                            return { ...prev, hasError: true, customError: data.message };
                        });
                    } else {
                        alert("Successfully signed up")
                        navigate("/login")
                    }
                }).catch((err) => {
                    console.log(err);
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
                                            <Form.Group className="mb-3" controlId="Name">
                                                <Form.Label className="text-center">
                                                    User Name
                                                </Form.Label>

                                                <Form.Control type="text" required placeholder="Enter Unique user name" name="accountId" value={formData.accountId} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email" required placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Alternate Email address
                                                </Form.Label>
                                                <Form.Control type="email" placeholder="Enter Alternate Email" name="altEmail" value={formData.altEmail} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    First Name
                                                </Form.Label>

                                                <Form.Control type="text" placeholder="Enter First name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Last Name
                                                </Form.Label>

                                                <Form.Control type="text" placeholder="Enter Last name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Contact Number
                                                </Form.Label>

                                                <Form.Control type="text" placeholder="Enter Contact Number" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>

                                                <Form.Control type="password" required placeholder="Password" name='password' value={formData.password} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPasswordConfirm"
                                            >
                                                <Form.Label>Confirm Password</Form.Label>
                                                {formErrors.hasError && formErrors.confirmPassword !== "" && (
                                                    <Form.Text className="text-danger">
                                                        {formErrors.confirmPassword}
                                                    </Form.Text>
                                                )}
                                                <Form.Control type="password" placeholder="Password" name='confirmPassword' value={formData.confirmPassword} onChange={handleInputChange} />
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
                                                    Create Account
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already have an account??{" "}
                                                <Link to="/login" className="text-primary fw-bold">
                                                    Sign In
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

export default Signup