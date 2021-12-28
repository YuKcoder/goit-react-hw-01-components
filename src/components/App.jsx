import React from 'react';
import Profile from './Profile/Profile';
import userData from '../data/user.json';

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
      </div>
    </React.StrictMode>
  );
}
