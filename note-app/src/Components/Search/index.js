import React from 'react';
import style from './style.module.scss';
import { useDispatch } from 'react-redux';
import { searchNote } from '../../redux/notes/notesSlice';

const Search = () => {
  const dispatch = useDispatch();

  return <div className={style.searchInput}>
    <input type="search" placeholder="Search notes" onChange={(e) => dispatch(searchNote(e.target.value))} />
  </div>;
};

export default Search;
