import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    // display: 'flex',
    // justifyContent: 'center'
  },
  root: {
    // maxWidth: 400,
    // flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
  },
  img: {
    width: '100%',
  },
}));

export default useStyles