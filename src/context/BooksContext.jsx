import { createContext, useState } from "react";
import useFetchBooks from "../hooks/useFetchBooks";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [bookName, setBookName] = useState("");
  const [page,setPage] = useState("");
  const { books, setBooks, startIndex, setstartIndex, total, setTotal, error, setError, loading } = useFetchBooks(bookName);

  const changePage = (newpage) =>{
    page != newpage ? (setPage(newpage),setBooks([]),setTotal(0)): ""
  }

  const changeBookName = (newbookName) =>{
    bookName != newbookName ? (setBookName(newbookName),setBooks([]),setTotal(0)): ""
  }
  

  return <BooksContext.Provider value={{ books, setBooks, startIndex, setstartIndex, total, setTotal, error, setError, loading, changeBookName, changePage }}>{children}</BooksContext.Provider>;
};