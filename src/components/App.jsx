import React from 'react';
import userData from '../data/user.json';
import Profile from './Profile/Profile';

export default function App() {
  return (
    <React.StrictMode>
      <div>
        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </div>
    </React.StrictMode>
  );
}
