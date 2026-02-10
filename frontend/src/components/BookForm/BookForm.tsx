import {
    type ChangeEvent, type FormEvent,
    useState
} from "react";
import './BookForm.css'

const BookForm =()=>{
const[title,setTitle]=useState<string>('')
const[author,setAuthor]=useState<string>('')

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    // dispath action
        e.preventDefault()

        if(title && author){
            console.log(title, author)
            setTitle('')
            setAuthor('')
        }
    }

    const  setTitleHandler=(e: ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
    setTitle(e.target.value)
    }

    const  setAuthorHandler=(e: ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
    setAuthor(e.target.value)
    }

    return(
        <div className='app-block book-form'>
<h2>Add a New Book </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input type='text'  id='title' value={title} onChange={setTitleHandler}/>
                </div>
                <div>
                    <label htmlFor='author'>Author:</label>
                    <input type='text'  id='author' value={author} onChange={setAuthorHandler}/>
                </div>
<button type='submit'>Add Book</button>
            </form>
        </div>
    )
}

export default BookForm