import "./Filter.css"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.ts";
import {resetFilters, selectTitleFilter, setTitleFilterAC} from "../../redux/slice/filter-slice.ts";
import type {ChangeEvent} from "react";

const Filter = () => {
const dispatch = useAppDispatch()
    const titleFilter=useAppSelector(selectTitleFilter)

const handleTitleFilterChange=(e: ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
    dispatch(setTitleFilterAC({title:e.target.value}))
}


const handleFiltersReset=()=>{
    dispatch(resetFilters())
}
    return (
        <div className='app-block filter'>
            <div className='filter-row'>
                <div className='filter-group'>
                    <input onChange={handleTitleFilterChange}
                           type='text'
                           placeholder='Filter by title'
                           value={titleFilter}/>
                </div>
                <button type='button' onClick={handleFiltersReset}>Reset filters</button>
            </div>


        </div>
    )
}

export default Filter