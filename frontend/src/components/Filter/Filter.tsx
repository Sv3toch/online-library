import "./Filter.css"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.ts";
import {selectTitleFilter, setTitleFilterAC} from "../../redux/slice/filter-slice.ts";
import type {ChangeEvent} from "react";

const Filter = () => {
const dispatch = useAppDispatch()
    const titleFilter=useAppSelector(selectTitleFilter)

const handleTitleFilterChange=(e: ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
    dispatch(setTitleFilterAC({title:e.target.value}))
}

    return (
        <div className='app-block filter'>
            <div className='filter-group'>
                <input onChange={handleTitleFilterChange}
                       type='text'
                       placeholder='Filter by title'
                value={titleFilter}/>
            </div>
        </div>
    )
}

export default Filter