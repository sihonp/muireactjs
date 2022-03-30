import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,
        margin: theme.spacing(2),
      },
      container: {
        paddingTop: theme.spacing(10),
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
      },
      media: {
        paddingTop: '50%',
      },
      description: {
        height: 60,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
      text: {
        height: 80,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },

}));

export default useStyles