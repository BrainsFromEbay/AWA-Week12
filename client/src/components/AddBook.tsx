import {useState} from "react"

interface AddBookProps {
  onAdd: (book: { name: string; author: string; pages: number }) => void
}

const AddBook: React.FC<AddBookProps> = ({onAdd}) => {
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [pages, setPages] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    onAdd({name, author, pages: Number(pages)})
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Book name
                <input type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}/>
            </label>
            <label>Author
                <input type="text"
                onChange={(e) => setAuthor(e.target.value)}      
                value={author}/> 
            </label>     
            <label>Pages
                <input type="number"
                onChange={(e) => setPages(e.target.value)}
                value={pages}/>
            </label>
            <button type="submit">Add book</button>
        </form>
    </div>
  )
}

export default AddBook