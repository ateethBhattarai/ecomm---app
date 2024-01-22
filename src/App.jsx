import { Route, Routes } from "react-router-dom";
import { Home, Layout, Login, SignUp, ItemDetail } from "./pages";
import UserContextProvider from "./context/UserContext";

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
      </Routes>
    </UserContextProvider>
  );
}

export default App;
