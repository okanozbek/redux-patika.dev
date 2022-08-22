import React from 'react';
import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getContrastYIQ } from '../../helpers';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TbNotesOff } from 'react-icons/tb';
import { destroy } from '../../redux/notes/notesSlice';

const Content = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => {
    if (state.notes.searchNote === '') {
      return state.notes.items;
    }
    return state.notes.items.filter((notes) =>
      notes.text.toLowerCase().includes(state.notes.searchNote)
    );
  });

  const handleDestroyNote = (id) => {
    dispatch(destroy(id));
  };
  return (
    <div className={style.noteCardWrapper}>
      {notes.map((note, index) => (
        <div
          key={index}
          className={style.noteCard}
          style={{
            '--bgColor': `${note.color}`,
            '--textColor': `${getContrastYIQ(note.color)}`,
          }}
        >
          <div className={style.noteHeader}>
            <h4 className={style.noteTitle}>
              {note.title === '' ? '-' : note.title}
            </h4>
            <div className={style.actionArea}>
              <button onClick={() => handleDestroyNote(note.id)}>
                <FaRegTrashAlt />
              </button>
            </div>
          </div>

          {note.text}
        </div>
      ))}
      {notes.length === 0 && (
        <div className={style.noNoteHere}>
          <TbNotesOff />
          <h4>No notes here</h4>
        </div>
      )}
    </div>
  );
};

export default Content;
