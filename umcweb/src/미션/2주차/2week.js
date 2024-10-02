import s from './2week.module.css';
import React from 'react';

//경로에 있는 파일을 MOVIES라는 변수로 부름!
import {MOVIES} from './mocks/movies';

export default function Index() {

    const baseURL = "https://image.tmdb.org/t/p/w500"

    return (
        <>
        <main>
            //MOVIES의 배열중 RESULT가 첫번째인 값의 타이틀을 호출함
            {MOVIES.results[1].title}
            <img src={baseURL + MOVIES.results[1].poster_path} alt="" />
        </main>
        </>
    )
}