import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';

const Signup = () => {

    const initialState = {
        form: {
            accountId: "",
            email: "",
            altEmail: "",
            firstName: "",
            lastName: "",
            contactNumber: "",
            password: "",
            confirmPassword: "",
        }, errors: {
            hasError: false,
            confirmPassword: "",
            customError: "",
            name: "",
            email: "",
            password: "",
            Fname: ""
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
        setFormErrors(initialState.errors);
        let anyError = false;
        if (formData.accountId === "") {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, name: "   UserName is required" };
            });
            anyError = true;
        }
        if (formData.email === "") {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, email: "   Email is required" };
            });
            anyError = true;
        }
        if (formData.firstName === "") {
            setFormErrors((prev) => {
                return { ...prev, hasError: true, Fname: "   First name is required" };
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
            setLoader(true);
            console.log(formData);

            axios.post("http://localhost:8080/register", formData)
                .then((res) => {
                    let data = res.data;
                    if (data.status === "error") {
                        setFormErrors((prev) => {
                            return { ...prev, hasError: true, customError: data.message };
                        });
                        toast.error(data.message, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            });
                    } else {
                        alert("Successfully signed up")
                        navigate("/login")
                    }
                }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    setLoader(false);
                })

        }
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
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">Web app Logo</h2>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="Name">
                                                <Form.Label className="text-center">
                                                    User Name
                                                </Form.Label>

                                                {formErrors.hasError && formErrors.name !== "" && (
                                                    <Form.Text className="text-danger">
                                                        {formErrors.name}
                                                    </Form.Text>
                                                )}

                                                <Form.Control type="text" required placeholder="Enter Unique user name" name="accountId" value={formData.accountId} onChange={handleInputChange} />
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

                                                {formErrors.hasError && formErrors.Fname !== "" && (
                                                    <Form.Text className="text-danger">
                                                        {formErrors.Fname}
                                                    </Form.Text>
                                                )}

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

                                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                                <Form.Label>Password</Form.Label>

                                                {formErrors.hasError && formErrors.password !== "" && (
                                                    <Form.Text className="text-danger">
                                                        {formErrors.password}
                                                    </Form.Text>
                                                )}

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
                                                {loader && <Loader/>}
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