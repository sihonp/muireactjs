import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    maxWidth: 400
  },
  board: {
    maxWidth: 400,
    height: "300px",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    gap: "5px"
    
  },
  squares: {
    background: "#D3D3D3",
    fontSize: "1rem",
    fontWeight: 800, 
  
  },
  snackbar: {
    background: "#00e676",
    color: "white"
  },
}));

export default useStyles