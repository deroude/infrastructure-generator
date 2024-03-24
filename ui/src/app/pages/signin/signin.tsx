import React from 'react';
import { Card, Box, CardContent, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import style from './signin.module.scss'
import { login } from '../../services/auth.service'

export default () => {

    const signInWithGithub = () => {
        login()
    }

    return <Box className={style.box}>
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

}