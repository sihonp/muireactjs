import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { headerSX } from '../../themes/constant';


const MainCard = () => {
    const theme = useTheme();
    return (
        <Card
            sx={{
                border: true,
                borderColor: theme.palette.primary[200] + 75,
                ':hover': {
                    boxShadow: 'inherit'
                },
            }}
        >
            <CardHeader sx={headerSX} />
            <Typography variant="h3">GFHJG</Typography>
            <Divider />
            <CardContent >
                HGJGH
            </CardContent>
        </Card>
    )
}

export default MainCard