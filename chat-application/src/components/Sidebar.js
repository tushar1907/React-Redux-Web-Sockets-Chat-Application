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

Sidebar.PropTypes = {
    messages: Proptypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default Sidebar;

