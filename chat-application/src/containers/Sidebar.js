import React from 'react';
import Proptypes from 'prop-types';


const Sidebar = ({ users }) => (
    <aside id="sidebar" className="sidebar">
        <ul>
            {useres.map(
                user => {
                    <li key={user.id}>{user.name}</li>
                }
            )}
        </ul>
    </aside>
)

