import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema'
import './ListaTema.css';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Services';

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([]) //Ele ta pegando a variavel 'temas' e utilizando o useState, eles esta mudando o estado da variavel, exemplo: mudando os dados dela, colocando e etc
    const [token, setToken] = useLocalStorage('token'); //O useLocalStorage ele é responsavel por armazenar objetos, e ele esta armazenando os dados que eu coloquei ali 
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Voce precia estar logado")
            navigate("/login")
        }
    }, [token])


    async function getTema() {
        await busca("/tema", setTemas, {
            Headers: {
                'Authorization': token
            }

        })

    }

    useEffect(() =>{
        
    }


    return (
        <>
            <Box m={2} >
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Minha descrição
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >
                            <Link to="" className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size='small' color="primary">
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to="" className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' color="secondary">
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default ListaTema;