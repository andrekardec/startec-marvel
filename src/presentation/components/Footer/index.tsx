import React from 'react';
import { Container, DevelopedBy } from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <DevelopedBy>
                <h5>Startec Challenge</h5>
                <h4>Developed with ❤️ by Andre Kardec</h4>
                <p>
                    Data provided by <a href="https://developer.marvel.com/">Marvel</a>. ©
                    2014 Marvel
                </p>
            </DevelopedBy>
        </Container>
    );
};

export default Footer;
