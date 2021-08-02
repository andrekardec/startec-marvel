import useListComicWithLimit from '@presentation/hooks/useListComicWithLimit';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, BannerBox, TextArea, ImageArea, Button } from './styles';

export interface Background {
    image: string;
  }

const ComicFeatured: React.FC = () => {
    
    const { comics } = useListComicWithLimit(1);
    return (
        comics.length <= 0 ? <div>Loading</div> :(
        <Container>
            <BannerBox>
                <ImageArea image={"http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg"} />
                <TextArea>
                    <h2> MARVEL SERIE </h2>
                    <p>To binge read</p>
                    <h1>{comics[0].title}</h1>
                    <Link to={`/comics/${comics[0].id}`}><Button>See More</Button></Link>
                </TextArea>
            </BannerBox>
        </Container>
        )
    );
};

export default ComicFeatured;
