// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});

  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }

  function retrieveNS() {
    return ns;
  }

  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}

stryNS_9fa48();

function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });

  function cover() {
    var c = cov.static;

    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }

    var a = arguments;

    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }

  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}

function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();

  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }

      return true;
    }

    return false;
  }

  stryMutAct_9fa48 = isActive;
  return isActive(id);
}

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";
import AppNavbarLocalhost from "main/components/Nav/AppNavbarLocalhost";
export default function AppNavbar({
  currentUser,
  systemInfo,
  doLogout,
  currentUrl = window.location.href
}) {
  if (stryMutAct_9fa48("148")) {
    {}
  } else {
    stryCov_9fa48("148");
    return <>
      {stryMutAct_9fa48("151") ? currentUrl.startsWith("http://localhost:3000") || currentUrl.startsWith("http://127.0.0.1:3000") || <AppNavbarLocalhost url={currentUrl} /> : stryMutAct_9fa48("150") ? false : stryMutAct_9fa48("149") ? true : (stryCov_9fa48("149", "150", "151"), (stryMutAct_9fa48("153") ? currentUrl.startsWith("http://localhost:3000") && currentUrl.startsWith("http://127.0.0.1:3000") : stryMutAct_9fa48("152") ? true : (stryCov_9fa48("152", "153"), currentUrl.startsWith(stryMutAct_9fa48("154") ? "" : (stryCov_9fa48("154"), "http://localhost:3000")) || currentUrl.startsWith(stryMutAct_9fa48("155") ? "" : (stryCov_9fa48("155"), "http://127.0.0.1:3000")))) && <AppNavbarLocalhost url={currentUrl} />)}
      <Navbar expand="xl" variant="dark" bg="dark" sticky="top" data-testid="AppNavbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Example
          </Navbar.Brand>

          <Navbar.Toggle />

          <>
            {
              /* be sure that each NavDropdown has a unique id and data-testid */
            }
          </>

          <Navbar.Collapse>
            {
              /* This `nav` component contains all navigation items that show up on the left side */
            }
            <Nav className="me-auto">
              {stryMutAct_9fa48("158") ? systemInfo?.springH2ConsoleEnabled || <>
                    <Nav.Link href="/h2-console">H2Console</Nav.Link>
                  </> : stryMutAct_9fa48("157") ? false : stryMutAct_9fa48("156") ? true : (stryCov_9fa48("156", "157", "158"), (stryMutAct_9fa48("159") ? systemInfo.springH2ConsoleEnabled : (stryCov_9fa48("159"), systemInfo?.springH2ConsoleEnabled)) && <>
                    <Nav.Link href="/h2-console">H2Console</Nav.Link>
                  </>)}
              {stryMutAct_9fa48("162") ? systemInfo?.showSwaggerUILink || <>
                    <Nav.Link href="/swagger-ui/index.html">Swagger</Nav.Link>
                  </> : stryMutAct_9fa48("161") ? false : stryMutAct_9fa48("160") ? true : (stryCov_9fa48("160", "161", "162"), (stryMutAct_9fa48("163") ? systemInfo.showSwaggerUILink : (stryCov_9fa48("163"), systemInfo?.showSwaggerUILink)) && <>
                    <Nav.Link href="/swagger-ui/index.html">Swagger</Nav.Link>
                  </>)}
              {stryMutAct_9fa48("166") ? hasRole(currentUser, "ROLE_ADMIN") || <NavDropdown title="Admin" id="appnavbar-admin-dropdown" data-testid="appnavbar-admin-dropdown">
                    <NavDropdown.Item as={Link} to="/admin/users">Users</NavDropdown.Item>
                  </NavDropdown> : stryMutAct_9fa48("165") ? false : stryMutAct_9fa48("164") ? true : (stryCov_9fa48("164", "165", "166"), hasRole(currentUser, stryMutAct_9fa48("167") ? "" : (stryCov_9fa48("167"), "ROLE_ADMIN")) && <NavDropdown title="Admin" id="appnavbar-admin-dropdown" data-testid="appnavbar-admin-dropdown">
                    <NavDropdown.Item as={Link} to="/admin/users">Users</NavDropdown.Item>
                  </NavDropdown>)}
              {stryMutAct_9fa48("170") ? hasRole(currentUser, "ROLE_USER") || <NavDropdown title="Todos" id="appnavbar-todos-dropdown" data-testid="appnavbar-todos-dropdown">
                    <NavDropdown.Item as={Link} to="/todos/list">List Todos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/todos/create">Create Todo</NavDropdown.Item>
                  </NavDropdown> : stryMutAct_9fa48("169") ? false : stryMutAct_9fa48("168") ? true : (stryCov_9fa48("168", "169", "170"), hasRole(currentUser, stryMutAct_9fa48("171") ? "" : (stryCov_9fa48("171"), "ROLE_USER")) && <NavDropdown title="Todos" id="appnavbar-todos-dropdown" data-testid="appnavbar-todos-dropdown">
                    <NavDropdown.Item as={Link} to="/todos/list">List Todos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/todos/create">Create Todo</NavDropdown.Item>
                  </NavDropdown>)}
               {stryMutAct_9fa48("174") ? hasRole(currentUser, "ROLE_USER") || <NavDropdown title="UCSB Dining Commons" id="appnavbar-dining-commons-dropdown" data-testid="appnavbar-dining-commons-dropdown">
                    <NavDropdown.Item as={Link} to="/diningCommons/list" data-testid="appnavbar-dining-commons-list">List Dining Commons</NavDropdown.Item>
                  </NavDropdown> : stryMutAct_9fa48("173") ? false : stryMutAct_9fa48("172") ? true : (stryCov_9fa48("172", "173", "174"), hasRole(currentUser, stryMutAct_9fa48("175") ? "" : (stryCov_9fa48("175"), "ROLE_USER")) && <NavDropdown title="UCSB Dining Commons" id="appnavbar-dining-commons-dropdown" data-testid="appnavbar-dining-commons-dropdown">
                    <NavDropdown.Item as={Link} to="/diningCommons/list" data-testid="appnavbar-dining-commons-list">List Dining Commons</NavDropdown.Item>
                  </NavDropdown>)}
              {stryMutAct_9fa48("178") ? hasRole(currentUser, "ROLE_USER") || <NavDropdown title="UCSBDates" id="appnavbar-ucsbdates-dropdown" data-testid="appnavbar-ucsbdates-dropdown">
                    <NavDropdown.Item as={Link} to="/ucsbdates/list" data-testid="appnavbar-ucsbdates-list">List</NavDropdown.Item>
                    {hasRole(currentUser, "ROLE_ADMIN") && <NavDropdown.Item as={Link} to="/ucsbdates/create" data-testid="appnavbar-ucsbdates-create">Create</NavDropdown.Item>}
                  </NavDropdown> : stryMutAct_9fa48("177") ? false : stryMutAct_9fa48("176") ? true : (stryCov_9fa48("176", "177", "178"), hasRole(currentUser, stryMutAct_9fa48("179") ? "" : (stryCov_9fa48("179"), "ROLE_USER")) && <NavDropdown title="UCSBDates" id="appnavbar-ucsbdates-dropdown" data-testid="appnavbar-ucsbdates-dropdown">
                    <NavDropdown.Item as={Link} to="/ucsbdates/list" data-testid="appnavbar-ucsbdates-list">List</NavDropdown.Item>
                    {stryMutAct_9fa48("182") ? hasRole(currentUser, "ROLE_ADMIN") || <NavDropdown.Item as={Link} to="/ucsbdates/create" data-testid="appnavbar-ucsbdates-create">Create</NavDropdown.Item> : stryMutAct_9fa48("181") ? false : stryMutAct_9fa48("180") ? true : (stryCov_9fa48("180", "181", "182"), hasRole(currentUser, stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), "ROLE_ADMIN")) && <NavDropdown.Item as={Link} to="/ucsbdates/create" data-testid="appnavbar-ucsbdates-create">Create</NavDropdown.Item>)}
                  </NavDropdown>)}

               {
                /* our code */
              }
              
              {stryMutAct_9fa48("186") ? hasRole(currentUser, "ROLE_USER") || <NavDropdown title="UCSB Dining Commons Menu" id="appnavbar-ucsbdiningcommonsmenu-dropdown" data-testid="appnavbar-ucsbdiningcommonsmenu-dropdown">
                    <NavDropdown.Item as={Link} to="/ucsbdiningcommonsmenu/list" data-testid="appnavbar-ucsbdiningcommonsmenu-list">List Dining Commons Menu</NavDropdown.Item>
                  </NavDropdown> : stryMutAct_9fa48("185") ? false : stryMutAct_9fa48("184") ? true : (stryCov_9fa48("184", "185", "186"), hasRole(currentUser, stryMutAct_9fa48("187") ? "" : (stryCov_9fa48("187"), "ROLE_USER")) && <NavDropdown title="UCSB Dining Commons Menu" id="appnavbar-ucsbdiningcommonsmenu-dropdown" data-testid="appnavbar-ucsbdiningcommonsmenu-dropdown">
                    <NavDropdown.Item as={Link} to="/ucsbdiningcommonsmenu/list" data-testid="appnavbar-ucsbdiningcommonsmenu-list">List Dining Commons Menu</NavDropdown.Item>
                  </NavDropdown>)}
              {stryMutAct_9fa48("190") ? hasRole(currentUser, "ROLE_USER") || <NavDropdown title="UCSB Organization" id="appnavbar-ucsborganization-dropdown" data-testid="appnavbar-ucsborganization-dropdown">
                    <NavDropdown.Item as={Link} to="/ucsborganization/list" data-testid="appnavbar-ucsborganization-list">List Organization</NavDropdown.Item>
                  </NavDropdown> : stryMutAct_9fa48("189") ? false : stryMutAct_9fa48("188") ? true : (stryCov_9fa48("188", "189", "190"), hasRole(currentUser, stryMutAct_9fa48("191") ? "" : (stryCov_9fa48("191"), "ROLE_USER")) && <NavDropdown title="UCSB Organization" id="appnavbar-ucsborganization-dropdown" data-testid="appnavbar-ucsborganization-dropdown">
                    <NavDropdown.Item as={Link} to="/ucsborganization/list" data-testid="appnavbar-ucsborganization-list">List Organization</NavDropdown.Item>
                  </NavDropdown>)}
              {stryMutAct_9fa48("194") ? hasRole(currentUser, "ROLE_USER") || <NavDropdown title="Recommendation" id="appnavbar-recommendation-dropdown" data-testid="appnavbar-recommendation-dropdown">
                    <NavDropdown.Item as={Link} to="/recommendation/list" data-testid="appnavbar-recommendation-list">List Recommendation</NavDropdown.Item>
                  </NavDropdown> : stryMutAct_9fa48("193") ? false : stryMutAct_9fa48("192") ? true : (stryCov_9fa48("192", "193", "194"), hasRole(currentUser, stryMutAct_9fa48("195") ? "" : (stryCov_9fa48("195"), "ROLE_USER")) && <NavDropdown title="Recommendation" id="appnavbar-recommendation-dropdown" data-testid="appnavbar-recommendation-dropdown">
                    <NavDropdown.Item as={Link} to="/recommendation/list" data-testid="appnavbar-recommendation-list">List Recommendation</NavDropdown.Item>
                  </NavDropdown>)}
              {stryMutAct_9fa48("198") ? hasRole(currentUser, "ROLE_USER") || <NavDropdown title="Menu Item Review" id="appnavbar-menuitemreview-dropdown" data-testid="appnavbar-menuitemreview-dropdown">
                    <NavDropdown.Item as={Link} to="/menuitemreview/list" data-testid="appnavbar-menuitemreview-list">List Menu Item Review</NavDropdown.Item>
                  </NavDropdown> : stryMutAct_9fa48("197") ? false : stryMutAct_9fa48("196") ? true : (stryCov_9fa48("196", "197", "198"), hasRole(currentUser, stryMutAct_9fa48("199") ? "" : (stryCov_9fa48("199"), "ROLE_USER")) && <NavDropdown title="Menu Item Review" id="appnavbar-menuitemreview-dropdown" data-testid="appnavbar-menuitemreview-dropdown">
                    <NavDropdown.Item as={Link} to="/menuitemreview/list" data-testid="appnavbar-menuitemreview-list">List Menu Item Review</NavDropdown.Item>
                  </NavDropdown>)}
              {stryMutAct_9fa48("202") ? hasRole(currentUser, "ROLE_USER") || <NavDropdown title="Help Request" id="appnavbar-helprequest-dropdown" data-testid="appnavbar-helprequest-dropdown">
                    <NavDropdown.Item as={Link} to="/helprequest/list" data-testid="appnavbar-helprequest-list">List Help Request</NavDropdown.Item>
                  </NavDropdown> : stryMutAct_9fa48("201") ? false : stryMutAct_9fa48("200") ? true : (stryCov_9fa48("200", "201", "202"), hasRole(currentUser, stryMutAct_9fa48("203") ? "" : (stryCov_9fa48("203"), "ROLE_USER")) && <NavDropdown title="Help Request" id="appnavbar-helprequest-dropdown" data-testid="appnavbar-helprequest-dropdown">
                    <NavDropdown.Item as={Link} to="/helprequest/list" data-testid="appnavbar-helprequest-list">List Help Request</NavDropdown.Item>
                  </NavDropdown>)}
              {stryMutAct_9fa48("206") ? hasRole(currentUser, "ROLE_USER") || <NavDropdown title="Articles" id="appnavbar-article-dropdown" data-testid="appnavbar-article-dropdown">
                    <NavDropdown.Item as={Link} to="/articles/list" data-testid="appnavbar-article-list">List Articles</NavDropdown.Item>
                  </NavDropdown> : stryMutAct_9fa48("205") ? false : stryMutAct_9fa48("204") ? true : (stryCov_9fa48("204", "205", "206"), hasRole(currentUser, stryMutAct_9fa48("207") ? "" : (stryCov_9fa48("207"), "ROLE_USER")) && <NavDropdown title="Articles" id="appnavbar-article-dropdown" data-testid="appnavbar-article-dropdown">
                    <NavDropdown.Item as={Link} to="/articles/list" data-testid="appnavbar-article-list">List Articles</NavDropdown.Item>
                  </NavDropdown>)}
            </Nav>

            <Nav className="ml-auto">
              {
                /* This `nav` component contains all navigation items that show up on the right side */
              }
              {(stryMutAct_9fa48("210") ? currentUser || currentUser.loggedIn : stryMutAct_9fa48("209") ? false : stryMutAct_9fa48("208") ? true : (stryCov_9fa48("208", "209", "210"), currentUser && currentUser.loggedIn)) ? <>
                    <Navbar.Text className="me-3" as={Link} to="/profile">Welcome, {currentUser.root.user.email}</Navbar.Text>
                    <Button onClick={doLogout}>Log Out</Button>
                  </> : <Button href="/oauth2/authorization/google">Log In</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>;
  }
}