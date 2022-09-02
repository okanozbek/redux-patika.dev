import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchQuotes } from '../../redux/quoteSlice';
import style from './style.module.scss';
import Loading from '../../components/Loading';

const Quotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.items);
  const status = useSelector((state) => state.quotes.status);

  useEffect(() => {
    status === 'idle' && dispatch(fetchQuotes());
  }, [status, dispatch]);

  return (
    <>
      <div className={style.quotesHeader}>
        <h1>Quotes</h1>
      </div>
      <div className={style.quotesContent}>
        {quotes.map((quote, index) => (
          <div className={style.quotesCard} key={index}>
            <Link to={`/quote/${quote.quote_id}`}>"{quote.quote}"</Link>
            <b>{quote.author}</b>
          </div>
        ))}
      </div>
      <>
        {status === 'loading' && (
          <div className={style.loading}>
            <Loading />
          </div>
        )}
      </>
    </>
  );
};

export default Quotes;
