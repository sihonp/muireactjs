import React from 'react';
import { Card, CardMedia, CardActions, CardContent, Typography, Button } from '@mui/material';
import { CardWrapper } from './style';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, image, description, actionBtn, key, path }) => {

  return (
    <CardWrapper >
      <Card key={key}>
        <CardMedia
          component="img"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography  variant="h5" >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions >
          <Link to={path} style={{ textDecoration: 'none' }} >
            <Button  color="primary">{actionBtn}</Button>
          </Link>
        </CardActions>
      </Card>
    </CardWrapper>
  )
}

export default DashboardCard