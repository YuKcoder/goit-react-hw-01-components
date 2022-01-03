import PropTypes from 'prop-types';
import { Avatar, FriendItem, Friends, Name, Status } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            <Status status={friend.isOnline} />
            <Avatar src={friend.avatar} alt="User avatar" width="48" />
            <Name>{friend.name}</Name>
          </FriendItem>
        );
      })}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};
