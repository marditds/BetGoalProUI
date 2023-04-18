import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import { Back } from '../Back-Btn/Back'
import profPic from '../../assets/100x100.png'

export const Profile = ({ pairingData, disconnectPairing }) => {

    console.log('THIS IS PAIRING DATA IN ME2', pairingData);

    const navigate = useNavigate();
    const [username, setUsername] = useState("username");
    const [trackRecord, setTrackRecord] = useState("trackrecord");
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (!pairingData || !pairingData.accountIds) {
            navigate('/');
        }
    }, [pairingData, navigate]
    )

    return (
        <Container fluid>
            <Container style={{ color: "white" }}>
                <Back />
                <h3>Profile</h3>
                <Row>
                    <Col className='text-md-end text-center' md={6} sm={12}><Image src={profPic} roundedCircle /></Col>
                    <Col className='d-flex flex-column text-md-start text-center'>
                        <Col>{username}</Col>
                        <Col>Account Balance: $ {balance}</Col>
                        <Col>{trackRecord}</Col>

                    </Col>
                </Row>
                <Row className='flex-column'>
                    <h4>Profile Settings</h4>
                    <Col>
                        <Form>
                            {/* name lastname username email DOB */}
                            <Row>
                                <Form.Group as={Col} md={4} controlId="username">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type='username' />
                                </Form.Group>

                                <Form.Group as={Col} md={4} controlId="firstname">
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control type='name' />
                                </Form.Group>

                                <Form.Group as={Col} md={4} controlId="lastname">
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control type='name' />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md={6} controlId="email">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type='email' />
                                </Form.Group>

                                <Form.Group as={Col} md={6} controlId="date">
                                    <Form.Label>Date of Birth:</Form.Label>
                                    <Form.Control type='date' />
                                </Form.Group>

                                <Col className='d-flex justify-content-end align-items-end'>

                                    <Button onClick={() => disconnectPairing(pairingData)}>Disconnect</Button>

                                    <Button>Save Changes</Button>

                                </Col>
                            </Row>

                        </Form>
                    </Col>
                    <Col className='d-flex justify-content-end'></Col>
                </Row>
            </Container>
        </Container >
    )
}
