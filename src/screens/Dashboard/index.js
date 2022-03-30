import React from 'react';
import { Container, Grid } from "@mui/material";
import { gridSpacing } from '../../themes/constant';
import useStyles from "./style";
import DashboardCard from '../../components/DashboardCard';
import SmallCard from '../../components/SmallCard';
import SkeletonCards from '../../components/Skeleton';
import { NewsInfo, WeatherInfo, TodoInfo, BitcoinInfo, CovidInfo, ReactInfo } from './DashboarData';

const Dashboard = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            {NewsInfo.map((item, index) => {
                                return (
                                    <span key={index} >
                                        <DashboardCard
                                            title={item.title}
                                            image={item.image}
                                            description={item.description}
                                            actionBtn={item.actionBtn}
                                            path={item.path}
                                        />
                                    </span>
                                );
                            })}
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            {WeatherInfo.map((item, index) => {
                                return (
                                    <span key={index} >
                                        <DashboardCard
                                            title={item.title}
                                            image={item.image}
                                            description={item.description}
                                            actionBtn={item.actionBtn}
                                            path={item.path}
                                        />
                                    </span>
                                );
                            })}
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    {BitcoinInfo.map((item, index) => {
                                        return (
                                            <span key={index} >
                                                <SmallCard
                                                    title={item.title}
                                                    image={item.image}
                                                    description={item.description}
                                                />
                                            </span>
                                        );
                                    })}
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    {CovidInfo.map((item, index) => {
                                        return (
                                            <span key={index} >
                                                <SmallCard
                                                    title={item.title}
                                                    image={item.image}
                                                    description={item.description}
                                                />
                                            </span>
                                        );
                                    })}
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    {ReactInfo.map((item, index) => {
                                        return (
                                            <span key={index} >
                                                <SmallCard
                                                    title={item.title}
                                                    image={item.image}
                                                    description={item.description}
                                                />
                                            </span>
                                        );
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={8}>
                            <SkeletonCards />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            {TodoInfo.map((item, index) => {
                                return (
                                    <span key={index} >
                                        <DashboardCard
                                            title={item.title}
                                            image={item.image}
                                            description={item.description}
                                            actionBtn={item.actionBtn}
                                            path={item.path}
                                        />
                                    </span>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} >
                            <SkeletonCards />
                        </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard