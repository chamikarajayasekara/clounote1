import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button } from 'react-bootstrap';

interface FormValues {
    fullName: string;
    email: string;
    contactNo: string;
    message: string;
}

const ContactForm = () => {
    const initialValues: FormValues = {
        fullName: '',
        email: '',
        contactNo: '',
        message: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        contactNo: Yup.string().matches(/^\+\d{4}\s\d{7,}$/, 'Invalid phone number').required('Contact No is required'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values: FormValues) => {
        // Handle form submission here
        console.log(values);
    };

    return (
        <Container className={"contact-us-container"}>
            <Row>
                <Col>
                    <h2>Contact us</h2>
                    <p>Our goal is to be as helpful as possible.</p>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                        <Form className="contact-us-form">
                            <div className="mb-2">
                                <label htmlFor="fullName" className="label-text">Full Name</label>
                                <Field
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Your full name"
                                    className="form-control"
                                />
                                <ErrorMessage name="fullName" component="div" className="text-danger" />
                            </div>
                            <Row>
                                <Col lg={6}>
                                    <div className="mb-2 " >
                                        <label htmlFor="email" className="label-text">Email</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email address"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-2 ">
                                        <label htmlFor="contactNo" className="label-text">Contact No</label>
                                        <Field
                                            type="tel"
                                            id="contactNo"
                                            name="contactNo"
                                            placeholder="+9400 0000000"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="contactNo" component="div" className="text-danger" />
                                    </div>
                                </Col>
                            </Row>
                            <div className="mb-2">
                                <label htmlFor="message" className="label-text">Message</label>
                                <Field
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    placeholder="Write the message"
                                    className="form-control"
                                />
                                <ErrorMessage name="message" component="div" className="text-danger" />
                            </div>

                            <Button type="submit" className="submit-button">
                                Send Message
                            </Button>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;