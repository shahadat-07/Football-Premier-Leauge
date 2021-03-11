import React from 'react';
import { Card, Container } from 'react-bootstrap';
import gallery from '../../images/gallery.jpg'

const Header = () => {
    return (
        <div>
        <Card className="bg-dark text-white">
        <Card.Img src={gallery} width="100" height="300" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title className='text-center mt-5'><h3>Welcome To The Soccer World</h3></Card.Title>
        </Card.ImgOverlay>
        </Card>
        </div>
    );
};

export default Header;