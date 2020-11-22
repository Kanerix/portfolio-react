import React from 'react';
import { AppBar, Tabs, Tab, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
    'Tab': {
        'color': 'white',
        'height': '50px',
    }

});


export default function App() {
    const classes = useStyles()

    return (
        <AppBar color='primary'>
            <Tabs className={classes.Tabs}>
                <Tab className={classes.Tab} label='Porfolie'></Tab>
                <Tab className={classes.Tab} label='Kontakt'></Tab>
                <IconButton className={classes.Tab}>
                    <GitHubIcon />
                </IconButton>
            </Tabs>
        </AppBar>
    )
}