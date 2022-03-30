import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    // paddingBottom: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles