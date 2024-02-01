import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ContactImg from "../assets/imgs/contact-img.png";
import emailjs from '@emailjs/browser';

//import icon
import FeatherIcon from "feather-icons-react";
import { Col, Container, Form, FormGroup, Input, Label, Row , Button} from "reactstrap";

export default function Contact() {
  const formRef = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e, form) => { // Receive the form reference as a parameter
    e.preventDefault();
    emailjs
      .sendForm('service_tl8l62i', 'template_l4nv9v7', form, 'UeDu0wVJUlmgiZkvK')
      .then((result) => {
        console.log(result.text);
        setMessage("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
        setMessage("Error sending message. Please try again later.");
      });
  };

  return (
    <React.Fragment>
      <section className="section" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-5">
                <h2 className="">Contact Us</h2>
                <p className="text-muted">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={10}>
              <div className="mb-5 mb-lg-0">
                <div className="text-center">
                  <img src={ContactImg} alt="" className="img-fluid d-block w-75 mx-auto" />
                  <h4 className="mt-4">Are You Facing Any Problem..?</h4>
                  <p className="text-muted mb-4">It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.</p>
                  <Link to="#" className="btn btn-success"><FeatherIcon className="icon mr-2 icon-fill-white" icon="message-circle" /> Start Live Chat</Link>
                  <p className="mt-4">Or you can contact us at</p>
                  <Row>
                    <Col md={6}>
                      <Link to="#">
                        <div className="badge f-14 bg-soft-dark text-muted"><span className="text-dark mr-1">Email:</span> Youremailid@gmail.com</div>
                      </Link>
                    </Col>
                    <Col md={6} className="mt-2 mt-sm-0">
                      <Link to="#">
                        <div className="badge f-14 bg-soft-dark text-muted"><span className="text-dark mr-1">Phone:</span> (001) 1234 567 890</div>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={5} className="offset-lg-1">
              <h4 className="line-height-1_4 mb-4">Get in Touch</h4>
              <div className="custom-form mt-4 mt-lg-0">
                <div id="message">{message}</div>
                <Form method="post" name="contact-form" id="contact-form" ref={formRef} onSubmit={(e) => sendEmail(e, formRef.current)}>
                  <Row>
                    <Col md={6}>
                      <FormGroup className="app-label">
                        <Label for="name" className="form-label">Name</Label>
                        <Input name="user_name" id="name" type="text" className="form-control" placeholder="Enter your name .." />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="app-label">
                        <Label for="lastname" className="form-label">Email address</Label>
                        <Input name="user_email" id="email" type="email" className="form-control" placeholder="Enter your email .." />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Label for="email" className="form-label">Subject</Label>
                        <Input name="text" id="text" type="text" className="form-control" placeholder="Enter Subject .." />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Label for="comments" className="form-label">Message</Label>
                        <Input name="message" id="comments" type="textarea" rows="4" className="form-control" placeholder="Enter message. . ." />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Button color="primary" id="submit" name="send" className="btn btn-primary">Send Message</Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
