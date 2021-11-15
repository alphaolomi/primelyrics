import Link from "next/link";

import Navbar from "react-bootstrap-v5/lib/Navbar";
import Nav from "react-bootstrap-v5/lib/Nav";
import Container from "react-bootstrap-v5/lib/Container";

const AppNavbar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} href="/">
                    <h3 className="">PrimeLyrics</h3>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    className="justify-content-end"
                    id="basic-navbar-nav"
                >
                    <Navbar.Text>
                        <Nav.Link as={Link} href="/preferences">
                            Preference
                        </Nav.Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Nav.Link as={Link} href="/about">
                            About
                        </Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
