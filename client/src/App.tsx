import './App.css'
import {useState} from "react"
import AddBook from "./components/AddBook"
import Books from "./components/Books"
import BookDetails from "./components/BookDetails"
import {BrowserRouter, Route, Routes} from "react-router-dom"

interface IBook {
  id: number,
  name: string,
  author: string,
  pages: number,
}

function App() {
  const [books, setBooks] = useState<IBook[]>([])

  const addBook = async (book: {name: string, author: string, pages: number}) => {
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(book),
      })

      if (!response.ok) {
        alert("Something went wrong!")
        return
      }

      const newBook = await response.json()
      setBooks([...books, newBook])

    } catch (error) {
        console.error("Error:", error)
      }
    }

  return (
    <div>
      <BrowserRouter>
        <h1>books</h1>
        <AddBook onAdd={addBook} />
        <Books books={books} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/book/:bookName" element={<BookDetails books={books} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
