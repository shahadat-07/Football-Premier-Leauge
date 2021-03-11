import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './League.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Container, Row } from 'react-bootstrap';

const League = (props) => {
    // console.log(props)
    const {strLeague,strSport,idLeague} = props.league
    return (

       
        <Container>
            <div className="league mt-4">
                <h5>{strLeague}</h5>
                <p >Sport Type : {strSport}</p>
                <Link to={`/league/${idLeague}`}>
                    <Button variant="info">Explore <FontAwesomeIcon icon={faArrowCircleRight} /></Button>
                </Link>
            </div>
        </Container>
        
    );
};

export default League;