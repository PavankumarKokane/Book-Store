import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import BookPage from "./pages/BookPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { BooksProvider } from "./context/BooksContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/main.scss";

function App() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BooksProvider>
  );
}

export default App;
