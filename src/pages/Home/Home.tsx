import React from "react";
import {Button, Box, Paper} from '@material-ui/core'
import './Home.css';
import { flexbox } from "@mui/system";

function Home (){
    return(
        <>
        <Paper >
            <Box p={2}>
                <Box display="flex" justifyContent="center">
                    <h1>Titulo</h1>
                </Box>
                <img src="https://toppng.com/public/uploads/preview/burger-11528340630dx5paxa77f.png" alt="img" style={{width: "100%", height:"100"}}/>
                <Box className="A" display="flex" justifyContent="space-around" p={1}>
                    <Button variant="contained" color="primary">teste 1</Button>
                    <Button variant="contained" color="secondary">teste 2</Button>
                </Box>
            </Box>
        </Paper> 
        </>
    );
}

export default Home;


