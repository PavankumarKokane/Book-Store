import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import BookPage from "./pages/BookPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { BooksProvider } from "./context/BooksContext.jsx";

createRoot(document.getElementById("root")).render(
  <BooksProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </BooksProvider>
);
