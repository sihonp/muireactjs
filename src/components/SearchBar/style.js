import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

  recommendedBox: {
    width: "230px",
  },
  location: {
    textAlign: "left",
    '&:hover': {
      backgroundColor: "#d3d3d3",
      color: "#000",
      cursor: "pointer",
    }
  },
}));

export default useStyles