import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/LoginContext";

import CharacterInfo from "./pages/CharacterInfo";
import CharacterQuotes from "./pages/CharacterQuotes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TravelList from "./pages/TravelList";
import PageLayout from "./components/PageLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import WebShop from "./pages/WebShop";
import ActiveUser from "./components/ActiveUser";
import Books from "./components/Books";
import Movies from "./components/Movies";
import Characters from "./components/Characters";
import SelectedBook from "./components/SelectedBook";
import SelectedMovie from "./components/SelectedMovie";
import SelectedCharacter from "./components/SelectedCharacter";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="character-info" element={<CharacterInfo />}>
              <Route path="selected-book" element={<SelectedBook />} />
              <Route path="selected-movie" element={<SelectedMovie />} />
              <Route
                path="selected-character"
                element={<SelectedCharacter />}
              />
              {/* <Route path="selected-book" element={<SelectedBook />} /> */}
            </Route>
            <Route path="travel-list" element={<TravelList />} />
            <Route path="character-quotes" element={<CharacterQuotes />} />
            <Route
              path="web-shop"
              element={
                <ProtectedRoute>
                  <WebShop />
                </ProtectedRoute>
              }
            />
            <Route path="active-user" element={<ActiveUser />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
