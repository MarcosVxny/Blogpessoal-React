import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
function TabPostagem() {
const [value, setValue] = useState('1')
function handleChange(event: React.ChangeEvent<{}>, newValue: string){
setValue(newValue);
}
return (
<>
<TabContext value={value}></TabContext>