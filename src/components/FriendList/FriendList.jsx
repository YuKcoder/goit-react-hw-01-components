import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <span>{friend.isOnline}</span>
            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
          </li>
        );
      })}
    </ul>
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
