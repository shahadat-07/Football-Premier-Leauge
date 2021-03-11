import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,  faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './LeagueDetail.css';
import { faFlag, faFutbol, faGlobe, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png';


const LeagueDetail = () => {
    const {leagueId} = useParams();
    const [league, setLeague] = useState({});

    const {strCountry,strLeague,intFormedYear,strSport,strGender,strDescriptionEN ,strBanner,strBadge} = league
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeague(data.leagues[0]))
        
    }, [])

    return (
 

        <div style={{backgroundColor:'#f0f4f8'}}>

        <Card>
            <Card.Img src={strBanner} width="100" height="450" className="league-banner" alt="Card image" />
            <Card.ImgOverlay>
                <Image src={strBadge} width="170" height="170" className="d-block m-auto mt-4" rounded />
            </Card.ImgOverlay>
        </Card>

        <Container> 
            <div className="league-detail mt-5 p-3 text-white">
                <Row>
                    <Col sm={8}>
                        <h4 className="mt-4"> {strLeague}</h4>
                        <h6><FontAwesomeIcon icon={faPodcast} /> Founded : {intFormedYear}</h6>
                        <h6><FontAwesomeIcon icon={faFlag} /> Country : {strLeague,strCountry}</h6>
                        <h6><FontAwesomeIcon icon={faFutbol} /> Sport Type : {strSport}</h6>
                        <h6><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                    </Col>
                    <Col sm={4}>  
                      {
                          
                        strGender === 'Male'? <img src ={maleImg } width="350"  height="350" /> :<img src ={femaleImg}  width="350"  height="350" />
                       } 
                    </Col> 
                </Row>
            </div>
            <br></br>
            <p>{strDescriptionEN}</p>
            
            <div className="social-connect py-4">
                <a className="facebook" href="https://" target="" rel=""><FontAwesomeIcon icon={faFacebook}/></a>
                <a className="twitter" href="http://twitter.com/mls" target="_blank" rel=""><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="website" href="https://www.mlssoccer.com/" target="_blank" rel=""><FontAwesomeIcon icon={faGlobe} /></a>
                <a className="youtube" href="http://youtube.com/user/mls" target="_blank" rel=""><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          
        </Container>
       </div>

    );
};

export default LeagueDetail;