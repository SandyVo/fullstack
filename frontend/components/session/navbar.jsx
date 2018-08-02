import React from 'react';

export default ({ logout }) => {
  return (
    <div>
      <div>
        Instagram
      </div>
      <div>
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  )
}
