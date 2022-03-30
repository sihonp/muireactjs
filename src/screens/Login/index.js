import React from 'react';
import { Checkbox, Container, Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel } from '@mui/material';
// import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';
import useStyles from "./style";

const Login = () => {
    const classes = useStyles();
    const paperStyle = { padding: 20,    }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }


    return (
        <Container className={classes.container}>
             <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={9} md={6} lg={4} >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' >
                    <Avatar style={avatarStyle} sx={{ mb: 2.25 }}><LockIcon /></Avatar>
                    <Typography variant='h2' sx={{ mb: 2.25 }}>Sign In</Typography>
                </Grid>
                <Grid sx={{ mb: 2.25 }}>
                <TextField label='Username' placeholder='Enter username' fullWidth required  sx={{ mb: 2.25 }}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required  sx={{ mb: 2.25 }}/>
                </Grid>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} >Sign in</Button>
                <Typography color='primary'>
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography variant='body2' > Do you have an account ?
                    <Link href="#" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
        </Grid>
        </Container>
    )
}

export default Login