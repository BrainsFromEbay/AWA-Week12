import './App.css'
import AddBook from "./components/AddBook"
import {useState} from "react"

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
    <h1>books</h1>
  )
}

export default App
