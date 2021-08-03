/* eslint-disable react/prop-types */
import React from 'react';
import {
  Border, Card, Title,
} from './styles';

interface Props {
    title: string;
    image: string;
}
export interface Bg {
  image: string;
}
const CharacterCard: React.FC<Props> = ({ title, image }) =>
  (
    <Card image={image}>
      <Border>
        <Title>{title}</Title>
      </Border>
    </Card>
  );

export default CharacterCard;
