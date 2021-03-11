import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Header from '../Header/Header';
import League from '../League/League';

const Home = () => {
    const [leagues,setLeagues ] = useState([])
    useEffect(()=>{
      const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
      fetch(url)
      .then(res=>res.json())
      .then(data =>setLeagues(data.leagues.slice(0,15)))
    },[])
    return (
        <div>
          <Header></Header>
      {/* <h3>leagues Count {leagues.length}</h3> */}
      {
        leagues.map(league=> <League league={league}></League>)
      }

        </div>
    );
};

export default Home;