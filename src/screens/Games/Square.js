import { Button } from '@mui/material';
import useStyles from "./style";

const Square = ({ value, onClick }) => {
    const classes = useStyles();
    
    return (
        <Button variant="contained" onClick={onClick} className={classes.squares}>
            {value}
        </Button>
    )
}

export default Square