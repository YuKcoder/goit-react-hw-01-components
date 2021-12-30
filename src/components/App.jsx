import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import userData from '../data/user.json';
import statisticsData from '../data/statistics.json';
import friendData from '../data/friends.json';

export default function App() {
  return (
    <React.StrictMode>
      <div>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <Statistics title="Upload stats" stats={statisticsData} />
        <Statistics stats={statisticsData} />
        <FriendList friends={friendData} />
      </div>
    </React.StrictMode>
  );
}