import React from 'react';

const CurrentUsers = ({ users }) => (
    <div>
        {
            users
                ? (
                    <div className="current-users">
                        <span className="users">Aktywne osoby ({users.length}): </span>
                                {users.map(({ name }) => (
                                    <span key={name}>
                                        {name}
                                    </span>
                                ))}
                    </div>
                )
                : null
        }
    </div>
);

export default CurrentUsers