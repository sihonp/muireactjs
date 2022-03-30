import { makeStyles } from '@mui/styles';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(1,2),
        width: drawerWidth,
        [theme.breakpoints.down("sm")]: {
          width: 200
        }
      },
      item: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        marginTop: theme.spacing(2),
      },
      icon: {
        marginRight: theme.spacing(2),
        color: theme.palette.navBar.primary
      },
      text: {
        fontWeight: "500",
        color: theme.palette.navBar.primary
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'center',
      },
}));

export default useStyles