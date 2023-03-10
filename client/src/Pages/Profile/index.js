import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import { Heading, Button } from '@chakra-ui/react';

function Profile() {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        logout(() => {
            navigate('/');
        });
    }
    return (
        <div>
            <Heading>Profile</Heading>
            <code>{JSON.stringify(user)}</code>
            <br/>
            <br/>
            <Button colorScheme="red" variant="solid" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Profile
