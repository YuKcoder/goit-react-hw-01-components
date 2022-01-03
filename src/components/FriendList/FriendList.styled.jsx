import styled from 'styled-components';
import { ProfileCard } from '../Profile/Profile.styled';

export const Friends = styled(ProfileCard)``;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #fff;

  :not(:last-child) {
    border-bottom: 1px solid #a8c5e0;
  }
`;

export const Status = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 2em;
  border-radius: 50%;
  background: ${props => (props.status ? '#40b346' : '#ff4e55')};
`;

export const Avatar = styled.img`
  width: 4rem;
  margin-right: 2em;
  border-radius: 0.5rem;
  background-color: #d7dde8;
`;

export const Name = styled.span`
  font-size: 1.5em;
`;
