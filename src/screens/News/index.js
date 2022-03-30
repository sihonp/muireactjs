import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/actions/postActions';
import DisplayPost from './DisplayPost';
import useStyles from "./style";

const News = ({ postReducer, getPosts }) => {
    const classes = useStyles();

    useEffect(() => {
        getPosts()
    }, [getPosts])

    return (
        <Container className={classes.container}>
            <Grid container 
                direction="row"
                alignItems="center" justifyContent="center"
                style={{ minHeight: '50vh' }}>
                {!postReducer.postsArry ? (
                    <><CircularProgress /></>
                ) : (
                    <DisplayPost data={postReducer.postsArry} />
                )
                }
            </Grid>
        </Container>
    )
}
const mapStateToProps = (state) => ({
    postReducer: state.postReducer
});

const mapDispatchToProps = {
    getPosts: getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);