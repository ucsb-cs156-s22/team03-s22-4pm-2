import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";
import AppNavbarLocalhost from "main/components/Nav/AppNavbarLocalhost"

export default function AppNavbar({ currentUser, systemInfo, doLogout, currentUrl = window.location.href }) {
  return (
    <>
      {
        (currentUrl.startsWith("http://localhost:3000") || currentUrl.startsWith("http://127.0.0.1:3000")) && (
          <AppNavbarLocalhost url={currentUrl} />
        )
      }
      <Navbar expand="xl" variant="dark" bg="dark" sticky="top" data-testid="AppNavbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Example
          </Navbar.Brand>

          <Navbar.Toggle />

          <>
            {/* be sure that each NavDropdown has a unique id and data-testid */}
          </>

          <Navbar.Collapse>
            {/* This `nav` component contains all navigation items that show up on the left side */}
            <Nav className="me-auto">
              {
                systemInfo?.springH2ConsoleEnabled && (
                  <>
                    <Nav.Link href="/h2-console">H2Console</Nav.Link>
                  </>
                )
              }
              {
                systemInfo?.showSwaggerUILink && (
                  <>
                    <Nav.Link href="/swagger-ui/index.html">Swagger</Nav.Link>
                  </>
                )
              }
              {
                hasRole(currentUser, "ROLE_ADMIN") && (
                  <NavDropdown title="Admin" id="appnavbar-admin-dropdown" data-testid="appnavbar-admin-dropdown" >
                    <NavDropdown.Item as={Link} to="/admin/users">Users</NavDropdown.Item>
                  </NavDropdown>
                )
              }
              {
                hasRole(currentUser, "ROLE_USER") && (
                  <NavDropdown title="Todos" id="appnavbar-todos-dropdown" data-testid="appnavbar-todos-dropdown" >
                    <NavDropdown.Item as={Link} to="/todos/list">List Todos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/todos/create">Create Todo</NavDropdown.Item>
                  </NavDropdown>
                )
              }
               {
                hasRole(currentUser, "ROLE_USER") && (
                  <NavDropdown title="UCSB Dining Commons" id="appnavbar-dining-commons-dropdown" data-testid="appnavbar-dining-commons-dropdown" >
                    <NavDropdown.Item as={Link} to="/diningCommons/list" data-testid="appnavbar-dining-commons-list">List Dining Commons</NavDropdown.Item>
                  </NavDropdown>
                )
              }
              {
                hasRole(currentUser, "ROLE_USER") && (
                  <NavDropdown title="UCSBDates" id="appnavbar-ucsbdates-dropdown" data-testid="appnavbar-ucsbdates-dropdown" >
                    <NavDropdown.Item as={Link} to="/ucsbdates/list" data-testid="appnavbar-ucsbdates-list">List</NavDropdown.Item>
                    {
                      hasRole(currentUser, "ROLE_ADMIN") && (
                        <NavDropdown.Item as={Link} to="/ucsbdates/create" data-testid="appnavbar-ucsbdates-create">Create</NavDropdown.Item>
                      )
                    }
                  </NavDropdown>
                )
              }

               {/* our code */}
              
              {
                hasRole(currentUser, "ROLE_USER") && (
                  <NavDropdown title="UCSB Dining Commons Menu" id="appnavbar-ucsbdiningcommonsmenu-dropdown" data-testid="appnavbar-ucsbdiningcommonsmenu-dropdown" >
                    <NavDropdown.Item as={Link} to="/ucsbdiningcommonsmenu/list" data-testid="appnavbar-ucsbdiningcommonsmenu-list">List Dining Commons Menu</NavDropdown.Item>
                  </NavDropdown>
                )
              }
              {
                hasRole(currentUser, "ROLE_USER") && (
                  <NavDropdown title="UCSB Organization" id="appnavbar-ucsborganization-dropdown" data-testid="appnavbar-ucsborganization-dropdown" >
                    <NavDropdown.Item as={Link} to="/ucsborganization/list" data-testid="appnavbar-ucsborganization-list">List Organization</NavDropdown.Item>
                  </NavDropdown>
                )
              }
              {
                hasRole(currentUser, "ROLE_USER") && (
                  <NavDropdown title="Recommendation" id="appnavbar-recommendation-dropdown" data-testid="appnavbar-recommendation-dropdown" >
                    <NavDropdown.Item as={Link} to="/recommendation/list" data-testid="appnavbar-recommendation-list">List Recommendation</NavDropdown.Item>
                  </NavDropdown>
                )
              }
              {
                hasRole(currentUser, "ROLE_USER") && (
                  <NavDropdown title="Menu Item Review" id="appnavbar-menuitemreview-dropdown" data-testid="appnavbar-menuitemreview-dropdown" >
                    <NavDropdown.Item as={Link} to="/menuitemreview/list" data-testid="appnavbar-menuitemreview-list">List Menu Item Review</NavDropdown.Item>
                  </NavDropdown>
                )
              }
              {
                hasRole(currentUser, "ROLE_USER") && (
                  <NavDropdown title="Help Request" id="appnavbar-helprequest-dropdown" data-testid="appnavbar-helprequest-dropdown" >
                    <NavDropdown.Item as={Link} to="/helprequest/list" data-testid="appnavbar-helprequest-list">List Help Request</NavDropdown.Item>
                  </NavDropdown>
                )
              }
              {
                hasRole(currentUser, "ROLE_USER") && (
                  <NavDropdown title="Articles" id="appnavbar-article-dropdown" data-testid="appnavbar-article-dropdown" >
                    <NavDropdown.Item as={Link} to="/articles/list" data-testid="appnavbar-article-list">List Articles</NavDropdown.Item>
                  </NavDropdown>
                )
              }
            </Nav>

            <Nav className="ml-auto">
              {/* This `nav` component contains all navigation items that show up on the right side */}
              {
                currentUser && currentUser.loggedIn ? (
                  <>
                    <Navbar.Text className="me-3" as={Link} to="/profile">Welcome, {currentUser.root.user.email}</Navbar.Text>
                    <Button onClick={doLogout}>Log Out</Button>
                  </>
                ) : (
                  <Button href="/oauth2/authorization/google">Log In</Button>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar >
    </>
  );
}
