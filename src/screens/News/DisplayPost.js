import React from 'react';
import { CardHeader, Avatar, Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import moment from 'moment';
import useStyles from "./style";

const DisplayPost = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      {data.map((item, index) => {
        return (
          <Card key={index} className={classes.root}>
            <CardHeader className={classes.text}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <Typography >
                    NEWS
                  </Typography>
                </Avatar>
              }
              title={item.title}
              subheader={moment(item.publishedAt).format("DD MMM YYYY")}
            />
            <CardMedia
              className={classes.media}
              image={item.image}
              title={item.source.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                {item.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button variant="contained" color="primary" href={item.source.url} target="_blank" >Read more</Button>
            </CardActions>
          </Card>
        )
      })
      }
    </>
  )
}

export default DisplayPost

