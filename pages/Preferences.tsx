import React from "react";
import Link from "next/link";
import { GitHub } from "react-feather";
import Row from "react-bootstrap-v5/lib/Row";
import Col from "react-bootstrap-v5/lib/Col";
import Nav from "react-bootstrap-v5/lib/Nav";
import Tab from "react-bootstrap-v5/lib/Tab";
import AlertDialog from "@/components/AlertDialog/AlertDialog";

import Form from "react-bootstrap-v5/lib/Form";
import Button from "react-bootstrap-v5/lib/Button";

const Sonnet = () => {
    return (
        <p>
            Were't aught to me I bore the canopy, With my extern the outward
            honouring, Or laid great bases for eternity, Which proves more short
            than waste or ruining? Have I not seen dwellers on form and favour
            Lose all and more by paying too much rent For compound sweet;
            forgoing simple savour, Pitiful thrivers
        </p>
    );
};

const PrefForm2 = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Number of results in search</Form.Label>
                <Form.Select>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                </Form.Select>
                {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Group>

            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    );
};

const Preferences = () => {
    return (
        <div className="mt-5">
            <AlertDialog variant="warning" message="🚧 Under Construction" />
            <Row>
                <Col md={12} lg={12}>
                    <Row>
                        <h1 className="display-4">Preferences</h1>
                        <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="first"
                        >
                            <Row>
                                <Col sm={3}>
                                    <Nav
                                        variant="pills"
                                        className="flex-column"
                                    >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                General
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                Tab 2
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <PrefForm2 />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Sonnet />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Preferences;
