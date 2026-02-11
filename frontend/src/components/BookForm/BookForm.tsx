import {
    type ChangeEvent, type FormEvent,
    useState
} from "react";
import booksData from '../../data/books.json'
import './BookForm.css'
import {useAppDispatch} from "../../redux/hooks/hooks.ts";
import {addBookAC} from "../../redux/slice/books-slice.ts";

const BookForm = () => {
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const dispath = useAppDispatch()

    const handleAddRandomBook = ()=>{
const randomIndex = Math.floor(Math.random()*booksData.length)
        const randomBook = booksData[randomIndex]
        dispath(addBookAC({title:randomBook.title, author:randomBook.author}))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (title && author) {
            dispath(addBookAC({title, author}))
            setTitle('')
            setAuthor('')
        }
    }

    const setTitleHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const setAuthorHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setAuthor(e.target.value)
    }

    return (
        <div className='app-block book-form'>
            <h2>Add a New Book </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' value={title} onChange={setTitleHandler}/>
                </div>
                <div>
                    <label htmlFor='author'>Author:</label>
                    <input type='text' id='author' value={author} onChange={setAuthorHandler}/>
                </div>
                <button type='submit'>Add Book</button>
                <button type='button'  onClick={handleAddRandomBook}>Add Random Book</button>
            </form>
        </div>
    )
}

export default BookForm