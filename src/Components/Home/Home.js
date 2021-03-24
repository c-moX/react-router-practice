import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import { Container } from 'react-bootstrap';

const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <Container>
            <div className="mt-5 home-container">
                <div className="friends-container">
                    <h1>Friend: {friends.length}</h1>
                    {
                        friends.map(friend => <Friend
                            key={friend.id}
                            friend={friend}
                        ></Friend>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Home;