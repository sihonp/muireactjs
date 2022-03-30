import React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { LeftbarData } from './LeftbarData';
import useStyles from "./style";
import { Link } from 'react-router-dom';
import { Button, CardMedia, Container, Icon } from '@mui/material';
import menuLogo from '../../assets/images/menuLogo.png'

const Sidemenu = ({ open, setOpen }) => {
  const classes = useStyles();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(!open)} onClick={toggleDrawer}>
        <CardMedia
          component="img"
          height={62}
          image={menuLogo}
        />
        <Container className={classes.container} >
          {LeftbarData.map((item, index) => {
            return (
              <span key={index} >
                <Link to={item.path} className={classes.item}>
                  <Icon className={classes.icon} >{item.icon}</Icon>
                  <Button color="primary" className={classes.text}>{item.title}</Button>
                </Link>
                <Divider />
              </span>
            );
          })}
        </Container>
      </Drawer>
    </>
  )
}

export default Sidemenu