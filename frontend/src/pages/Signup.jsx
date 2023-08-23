import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Signup = () => {

    const initialState = {
        form: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }, errors: {
            hasError: false,
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
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
        if (formData.name === "") {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, name: "   Name is required" };
            });
            anyError = true;
        }
        if (formData.email === "") {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, email: "   Email is required" };
            });
            anyError = true;
        }
        if (formData.password === "") {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, password: "   Password is required" };
            });
            anyError = true;
        }
        if (formData.confirmPassword === "") {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, confirmPassword: "   Confirm Password is required" };
            });
            anyError = true;
        }
        if (formData.password !== formData.confirmPassword) {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, confirmPassword: "   Password and Confirm Password must be same" };
            });
            anyError = true;
        }
        if (!anyError) {
            console.log(formData);
            alert("Successfully signed up")
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
                                                    Name
                                                </Form.Label>
                                                {formErrors.hasError && formErrors.name !== "" && (
                                                    <Form.Text className="text-danger">
                                                        {formErrors.name}
                                                    </Form.Text>
                                                )}
                                                <Form.Control type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                {formErrors.hasError && formErrors.email !== "" && (
                                                    <Form.Text className="text-danger">
                                                        {formErrors.email}
                                                    </Form.Text>
                                                )}
                                                <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange} />
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
                                                {loader && <>loading...</>}

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