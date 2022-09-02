import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchCharacters } from '../../redux/characterSlice';
import { fetchQuotes } from '../../redux/quoteSlice';
import style from './style.module.scss';
import Loading from '../../components/Loading';

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const nextHasPage = useSelector((state) => state.characters.nextHasPage);
  const status = useSelector((state) => state.characters.status);

  useEffect(() => {
    status === 'idle' && dispatch(fetchCharacters());
    dispatch(fetchQuotes());
  }, [status, dispatch]);

  return (
    <>
      <div className={style.charactersHeader}>
        <h1>Characters</h1>
      </div>
      <div className={style.charactersContent}>
        {characters.map((character, index) => (
          <div className={style.characterCard} key={index}>
            <Link to={`/character/${character.char_id}`}>
              <div className={style.characterImg}>
                <img src={character.img} alt={character.name} />
              </div>
              <div className={style.cardBody}>{character.name}</div>
            </Link>
          </div>
        ))}
      </div>
      <>
        {status === 'loading' && (
          <div className={style.loading}>
            <Loading />
          </div>
        )}
        {status === 'succeeded' && nextHasPage && (
          <div className={style.loadMoreBtn}>
            <button onClick={() => dispatch(fetchCharacters(nextPage))}>
              Load more
            </button>
          </div>
        )}
        {!nextHasPage && (
          <p className={style.notCharacter}>There is nothing to be shown.</p>
        )}
      </>
    </>
  );
};

export default Characters;
