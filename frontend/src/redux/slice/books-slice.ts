import {createSlice, nanoid} from "@reduxjs/toolkit";


export const booksSlice = createSlice({
    name: 'books',
    initialState: [] as Book[],
    selectors: {
        selectBook: (state) => state,
    },
    reducers: (create) => ({
        addBookAC: create.reducer<{ title: string, author: string }>((state, action) => {
            const newBook: Book = {
                title: action.payload.title,
                author: action.payload.author,
                id: nanoid(),
                isFavorite: false
            }
            state.push(newBook)
        }),
        deleteBookAc:create.reducer<{bookId:string}>((state, action)=>{
            const index = state.findIndex((book)=>book.id===action.payload.bookId)
            if (index!==-1){
                state.splice(index,1)
            }
        }),
        isFavoriteAC: create.reducer<{bookId: string}>((state, action) => {
            const book = state.find(b => b.id === action.payload.bookId);
            if (book) {
                book.isFavorite = !book.isFavorite;
            }
        }),
        deleteAllBookAc: create.reducer((_state, _action)=>{
            return []
        })
    })
})


export const {selectBook} = booksSlice.selectors
export const {addBookAC, deleteBookAc, isFavoriteAC, deleteAllBookAc} = booksSlice.actions
export const bookReducer = booksSlice.reducer

export type Book = {
    id: string,
    title: string,
    author: string,
    isFavorite: boolean
}

