import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import ProfilePage from "main/pages/ProfilePage";
import AdminUsersPage from "main/pages/AdminUsersPage";

import TodosIndexPage from "main/pages/Todos/TodosIndexPage";
import TodosCreatePage from "main/pages/Todos/TodosCreatePage";
import TodosEditPage from "main/pages/Todos/TodosEditPage";
import OrganizationIndexPage from "main/pages/Organization/OrganizationIndexPage";
import DiningCommonsIndexPage from "main/pages/DiningCommons/DiningCommonsIndexPage";
import ArticlesIndexPage from "main/pages/Articles/ArticlesIndexPage"

import UCSBDatesIndexPage from "main/pages/UCSBDates/UCSBDatesIndexPage";
import UCSBDatesCreatePage from "main/pages/UCSBDates/UCSBDatesCreatePage";
import UCSBDatesEditPage from "main/pages/UCSBDates/UCSBDatesEditPage";

//comment for testing

import RecommendationIndexPage from "main/pages/Recommendation/RecommendationIndexPage";

// our code

// // Dinning Commons Menu
import UCSBDiningCommonsMenuIndexPage from "main/pages/UCSBDiningCommonsMenu/UCSBDiningCommonsMenuIndexPage";
// // UCSB Organization
// import <PlaceHolder>IndexPage from "main/pages/<PlaceHolder>/<PlaceHolder>IndexPage";
// // Recommendation Request
// import <PlaceHolder>IndexPage from "main/pages/<PlaceHolder>/<PlaceHolder>IndexPage";
// // Menu Item Review
// import <PlaceHolder>IndexPage from "main/pages/<PlaceHolder>/<PlaceHolder>IndexPage";
// // Help Request
// import HelpRequestIndexPage from "main/pages/HelpRequest/HelpRequestIndexPage";
// // Articles
// import <PlaceHolder>IndexPage from "main/pages/<PlaceHolder>/<PlaceHolder>IndexPage";

import { hasRole, useCurrentUser } from "main/utils/currentUser";

import "bootstrap/dist/css/bootstrap.css";


function App() {

  const { data: currentUser } = useCurrentUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        {
          hasRole(currentUser, "ROLE_ADMIN") && <Route exact path="/admin/users" element={<AdminUsersPage />} />
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/todos/list" element={<TodosIndexPage />} />
              <Route exact path="/todos/create" element={<TodosCreatePage />} />
              <Route exact path="/todos/edit/:todoId" element={<TodosEditPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/diningCommons/list" element={<DiningCommonsIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/ucsbdates/list" element={<UCSBDatesIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_ADMIN") && (
            <>
              <Route exact path="/ucsbdates/edit/:id" element={<UCSBDatesEditPage />} />
              <Route exact path="/ucsbdates/create" element={<UCSBDatesCreatePage />} />
            </>
          )
        }
        
        {/* our code */}

        {/* {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/ucsbdiningcommonsmenu/list" element={<UCSBDiningCommonsMenuIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/ucsborganization/list" element={<OrganizationIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/recommendation/list" element={<RecommendationIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/menuitemreview/list" element={<TodosIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/helprequest/list" element={<TodosIndexPage />} />
            </>
          )
        } */}
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/articles/list" element={<ArticlesIndexPage />} />
            </>
          )
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
