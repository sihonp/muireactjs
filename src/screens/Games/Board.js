import { Box } from '@mui/material';
import useStyles from "./style";
import Square from './Square';

const Board = ({ squares, onClick }) => {
    const classes = useStyles();

    return (
        <Box className={classes.board} >
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </Box>
    )
}

export default Board