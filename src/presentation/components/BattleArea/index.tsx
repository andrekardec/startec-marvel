import { useInitialData } from '@presentation/hooks/useInitialData';
import React from 'react';
import ComicCard from '../ComicCard';
import VoteButton from '../VoteButton';
import {
  Container, BattleAreaWrapper, ComicAreaWrapper, BattleTitleWrapper, ComicWrapper, CounterBattle, TitleWrapper, CallToAction,
} from './styles';

const BattleArea: React.FC = () => {
  const {
    voteA, voteB, handleVoteA, handleVoteB,
  } = useInitialData();

  return (
    <Container>
      <BattleAreaWrapper>
        <BattleTitleWrapper>
          <TitleWrapper>
            <h1>A giant battle</h1>
            <h1>A giant battle</h1>
          </TitleWrapper>
          <CallToAction>
            <p>
              Which one deserves to win?
              <span>#Vote</span>
            </p>
          </CallToAction>
        </BattleTitleWrapper>
      </BattleAreaWrapper>
      <ComicAreaWrapper>
        <ComicWrapper>
          <VoteButton onClick={handleVoteA} />
          <ComicCard
            image="http://i.annihil.us/u/prod/marvel/i/mg/6/d0/60fad3864b875.jpg"
            title="Lorem Ipsum"
          />
        </ComicWrapper>

        <CounterBattle>
          {voteA}
          x
          {voteB}
        </CounterBattle>

        <ComicWrapper>
          <VoteButton onClick={handleVoteB} />
          <ComicCard
            image="http://i.annihil.us/u/prod/marvel/i/mg/6/c0/60f73849ef12b.jpg"
            title="Lorem Ipsum"
          />
        </ComicWrapper>
      </ComicAreaWrapper>
    </Container>
  );
};
export default BattleArea;
