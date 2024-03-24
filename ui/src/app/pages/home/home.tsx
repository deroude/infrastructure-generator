import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth.service';

export default () => {

    const navigate = useNavigate()
    const doSignOut = async () => {
        await logout();
        navigate('/');
    }

    return <Button onClick={doSignOut}>Sign out</Button>
}