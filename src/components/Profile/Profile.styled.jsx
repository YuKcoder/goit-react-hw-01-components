import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: block;
  width: 30vw;
  margin-bottom: 2rem;
  text-align: center;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 2px 1px rgba(34, 60, 80, 0.2);
`;

export const Info = styled.div`
  background-color: #fff;
  padding: 2rem 0;
`;

export const Avatar = styled.img`
  margin: 0 auto 2rem;
  width: 50%;
  border-radius: 50%;
  background-color: #d7dde8;
`;

export const Name = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Tag = styled.p`
  margin-bottom: 0.5rem;
  color: #285cbd;
`;

export const Location = styled(Tag)``;

export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid #757f9a;
  background-color: #d7dde8;
`;

export const Insight = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: calc(100% / 3);
  height: 5rem;
  border-right: 1px solid #757f9a;

  :last-child {
    border: none;
  }
`;

export const Label = styled(Tag)``;

export const Quantity = styled.span`
  font-weight: bold;
`;
