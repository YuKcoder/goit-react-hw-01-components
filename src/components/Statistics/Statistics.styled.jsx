import styled from 'styled-components';
import makeRandomColor from '../../utils/randomColor';
import { ProfileCard } from '../Profile/Profile.styled';

export const StatisticsSection = styled(ProfileCard)``;

export const Title = styled.h2`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: #fff;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: calc(100% / 4);
  height: 5rem;
  color: #fff;
  background-color: ${makeRandomColor};

  > span:last-child {
    font-size: 1.5rem;
  }
`;
