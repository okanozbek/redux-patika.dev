import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.scss';
import axios from 'axios';
import Loading from '../../../components/Loading';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [char, setChar] = useState(null);
  const { char_id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => {
        setChar(data[0]);
      })
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <>
      {loading ? (
        <div className={style.loading}>
          <Loading />
        </div>
      ) : (
        <div className={style.characterContent}>
          <img src={char.img} alt={char.name} />
          <div className={style.characterDetail}>
            <p>
              <b>Full Name : </b>
              <br />
              {char.name}
            </p>
            <p>
              <b>Nickname : </b>
              <br />
              {char.nickname}
            </p>
            <p>
              <b>Portrayet : </b>
              <br />
              {char.portrayed}
            </p>
            <p>
              <b>Occupation : </b>
              <br />
              {char.occupation?.[0]}
              {char.occupation.length > 1 && ' - '}
              {char.occupation?.[1]}
            </p>
            <p>
              <b>Birthday : </b>
              <br />
              {char.birthday}
            </p>
            <p>
              <b>Status : </b>
              <br />
              {char.status}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
