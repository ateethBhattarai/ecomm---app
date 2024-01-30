import { Route, Routes } from "react-router-dom";
import { Home, Layout, Login, SignUp, ItemDetail } from "./pages";
import Dashboard from "./pages/dashboard-pages/Dashboard";
import UserContextProvider from "./context/UserContext";
import Protected from "./components/dashboard-components/Protected";
import Emails from "./pages/dashboard-pages/Emails";
import Contents from "./components/dashboard-components/Contents";
import Projects from "./pages/dashboard-pages/Projects";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Route>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Contents />
            </Protected>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/projects" element={<Projects />} />
          <Route path="/dashboard/emails" element={<Emails />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
