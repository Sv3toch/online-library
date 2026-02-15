import {
    type ChangeEvent, type FormEvent,
    useState
} from "react";
import axios from "axios";
import {useAppDispatch} from "../../redux/hooks/hooks.ts";
import {addBookAC} from "../../redux/slice/books-slice.ts";
import {resetFiltersAC} from "../../redux/slice/filter-slice.ts";
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (title && author) {
            dispatch(resetFiltersAC())
            dispatch(addBookAC({title, author,source:'manual'}))
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

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]
        dispatch(addBookAC({title: randomBook.title, author: randomBook.author, source:'random'}))

        dispatch(resetFiltersAC())
    }

    const handleAddRandomBookViaAPI = async () => {
        try {
            const res = await axios.get('http://localhost:4000/random-book')
            if (res?.data?.title && res?.data?.author) {
                dispatch(addBookAC({title: res.data.title, author: res.data.author, source:"API"}))
            }
        }catch (error){
console.log('Error fetching random book', error)
        }

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
                <button type='button' onClick={handleAddRandomBook}>Add Random Book</button>
                <button type='button' onClick={handleAddRandomBookViaAPI}>Add Random via API
                </button>

            </form>
        </div>
    )
}

export default BookForm