import { Route, Routes } from "react-router-dom";
import { Home, Layout, Login, SignUp, ItemDetail } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
