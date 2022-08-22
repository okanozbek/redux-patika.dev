import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectColor } from '../../redux/color/colorSlice';
import { addNote } from '../../redux/notes/notesSlice';

const TextArea = () => {
  const colors = useSelector((state) => state.color.colors);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState('');

  const handleColorSelect = (handleColor) => {
    dispatch(selectColor(handleColor));
    setColor(handleColor);
  };

  const handleAddNote = () => {
    text && dispatch(addNote({ title, text, color }));
    setText('');
    setTitle('');
  };

  useEffect(() => {
    colors.filter((color) => color.selected && setColor(color.code));
  }, [colors]);

  return (
    <div className={style.textareaWrapper}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Enter your note title here"
      />
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        rows={6}
        placeholder="Enter your note here"
      />
      <div className={style.textareaBottomArea}>
        <div className={style.colorArea}>
          {colors.map((color, index) => (
            <button
              key={index}
              className={color.selected ? 'active' : ''}
              onClick={() => handleColorSelect(color.code)}
              style={{
                '--bgColor': `${color.code}`,
              }}
            ></button>
          ))}
        </div>
        <button
          disabled={text === ''}
          onClick={handleAddNote}
          className={style.addNoteBtn}
          type="button"
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default TextArea;
