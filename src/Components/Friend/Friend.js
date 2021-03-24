import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const { id, name, email, phone, website } = props.friend;
    const history = useHistory(); // For hooks

    // Button Handler Func
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url)
    }

    return (
        <Container>
            <div className="friend-container">
                <h5>Name: {name}</h5>
                <p>ID NO: {id}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <button onClick={ () => handleClick(id)}>Show More</button>
                {/* <button><Link to={`/friend/${id}`}>Show detail of {id}</Link></button> */}
            </div>
        </Container>
    );
};

export default Friend;