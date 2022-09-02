import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.scss';
import axios from 'axios';
import Loading from '../../../components/Loading';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchQuote } from '../../../redux/quoteSlice';

const Detail = () => {
  const { quote_id } = useParams();
  const dispatch = useDispatch();
  const quoteStatus = useSelector((quote) => quote.quotes.quoteStatus);
  const quote = useSelector((quote) => quote.quotes.item);

  useEffect(() => {
    quoteStatus === 'idle' && dispatch(fetchQuote(quote_id));
  }, [quoteStatus, quote_id, dispatch]);

  return (
    <>
      {quoteStatus === 'loading' ? (
        <div className={style.loading}>
          <Loading />
        </div>
      ) : (
        <div className={style.quoteDetail}>
          <p>
            <b>Quote : </b>
            <br />
            {quote.quote}
          </p>
          <p>
            <b>Author : </b>
            <br />
            {quote.author}
          </p>
        </div>
      )}
    </>
  );
};

export default Detail;
