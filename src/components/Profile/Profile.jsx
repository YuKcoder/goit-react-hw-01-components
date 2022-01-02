import PropTypes from 'prop-types';
import {
  ProfileCard,
  Info,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Insight,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard key={tag}>
      <Info>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Info>

      <Stats>
        <Insight>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Insight>
        <Insight>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Insight>
        <Insight>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Insight>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
