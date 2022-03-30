import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Box';


export const CardWrapper = styled(MuiCard)(({ theme }) => ({
    backgroundColor: theme.palette.box.secondary,
   
}));