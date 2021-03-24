import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './FriendDetail.css';

const FriendDetail = () => {
    let { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const { name, email, phone } = friend;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <Container>
            <div className="mt-5">
                <h2>Friend {friendId} Detail Coming soon...</h2>
                <div className="friend-data">
                    <h5>Name: {name}</h5>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                </div>
            </div>
        </Container>
    );
};

export default FriendDetail;