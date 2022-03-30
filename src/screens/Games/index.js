import { Box, Button, Container, Grid, Snackbar, Typography } from '@mui/material';
import useStyles from "./style";
import { useState } from "react";
import Board from "./Board";
import calculateWinner from "./Helper";
import Alert from '@mui/material/Alert';

const Games = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if (winner || squares[i]) return;
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
        setOpen(true)
    };


    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Move #${move}` : "Go to Start";
            return (
                <Box key={move} sx={{ display: 'inline' }}>
                    <Button onClick={() => jumpTo(move)}>{destination}</Button>
                </Box>
            );
        });

    return (
        <Container className={classes.container} >
            <Grid  >
                <Grid item xs={12} sm={9} md={6} lg={4} >
                    <Typography className={classes.text} gutterBottom variant="h6">{winner ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                        <Alert className={classes.snackbar} onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            The Winner is {winner}
                        </Alert>
                    </Snackbar> : "Next Player: " + xO}</Typography>
                    <Board squares={history[stepNumber]} onClick={handleClick} />
                    <Typography variant="h6" gutterBottom >History</Typography>
                    {renderMoves()}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Games