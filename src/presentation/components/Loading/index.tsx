import React from 'react';
import ReactLoading from 'react-loading';
import { Container } from './styles';

const Loading : React.FC = () =>
  (
    <Container>
      <ReactLoading
        type="spin"
        color="#E23636"
        height={300}
        width={300}
      />
    </Container>

  );

export default Loading;
