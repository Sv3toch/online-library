import {type ChangeEvent, type FormEvent, useState} from "react";
import {addBookAC, fetchBook} from "../../redux/slice/books-slice.ts";
import {useAppDispatch} from "../../redux/hooks/hooks.ts";
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
      dispatch(fetchBook())
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