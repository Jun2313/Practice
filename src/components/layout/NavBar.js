import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <div className="NavBar" >
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/Movie" className='Link'>Movie</Nav.Link>
                        <Nav.Link href="/" className='Link'>Main</Nav.Link>
                        <Nav.Link href="/Actor" className='Link'>Actor</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;