import React, { useState } from 'react';
import { Card, Box, CardContent, Typography, IconButton, Snackbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import style from './signin.module.scss'
import { login } from '../../services/auth.service'
import { useNavigate } from 'react-router-dom';

export default () => {

    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const signInWithGithub = async () => {
        try {
            setError(false)
            await login()
            navigate('/home')
        } catch (err) {
            setError(true)
        }
    }

    return <><Box className={style.box}>
        <Card variant="outlined">
            <CardContent>
                <Typography className={style.title} color="text.secondary" gutterBottom>
                    Sign in
                </Typography>

                <IconButton color="primary" aria-label="sign in with Github" onClick={signInWithGithub}>
                    <GitHubIcon />
                </IconButton>
            </CardContent>
        </Card>
    </Box>
        <Snackbar
            open={error}
            autoHideDuration={4000}
            message="Sign in failed"
        />
    </>

}