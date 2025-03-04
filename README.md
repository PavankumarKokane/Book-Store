# Book Store

## Description

Book Store is a React-based web application that fetches and displays books using the Google Books API. The project is built with **Vite** for fast development and performance optimization.

## Features

- **Search Functionality** to find books easily by title or keyword

- Fetch book data from the **Google Books API**
- **Custom Hooks**:
  - `useFetchBooks` – Fetches a list of books based on search queries
  - `useFetchBook` – Fetches a single book by its ID
  - `useFetchBooks` – Fetches a list of books
- **Context API** for state management
- **Lazy Loading** for book list on the home page
- **Shimmer UI** for loading states using [`react-loading-skeleton`](https://www.npmjs.com/package/react-loading-skeleton)
- **SCSS** for styling

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (>= 14.x)
- npm or yarn

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/book-store.git
   cd book-store
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
4. Open the application in your browser at `http://localhost:5173`

## Project Structure

```
book-store/
│-- src/
│   ├── components/        # Reusable components
│   ├── hooks/             # Custom hooks (useFetchBook, useFetchBooks)
│   ├── context/           # Context API for state management
│   ├── pages/             # Page components
│   ├── styles/            # SCSS styles
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│-- public/                # Static assets
│-- package.json           # Project dependencies
│-- vite.config.js         # Vite configuration
│-- README.md              # Project documentation
```

## Custom Hooks

### `useFetchBooks.js`

Fetches a list of books from Google Books API.

```js
import { useEffect, useState } from "react";

const useFetchBooks = (book_name,page) => {
  const [books, setBooks] = useState([]);
  const [startIndex, setstartIndex] = useState(0);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const search_query = book_name || "a";

  
  const getBooks = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search_query}&orderBy=newest&maxResults=36&startIndex=${startIndex}`);
      const data = await res.json();
      setBooks([...books, ...data.items])
      setTotal(data.totalItems);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBooks();
  }, [startIndex,search_query,page]);

  return { books, setBooks, startIndex, setstartIndex, total, setTotal, error, setError, loading };
};

export default useFetchBooks;
```

### `useFetchBook.js`

Fetches details of a single book by ID.

```js
import { useEffect, useState } from "react";
const useFetchBook = (id) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBook = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = await res.json();
      setBook(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBook();
  }, [id]);

  return { book, loading, error };
};

export default useFetchBook;
```

## Dependencies

- React + Vite
- Context API for global state management
- SCSS for styling
- [`react-loading-skeleton`](https://www.npmjs.com/package/react-loading-skeleton) for shimmer UI

