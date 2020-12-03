import React from 'react';
import { AppBar, Tabs, Tab, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
    'Body': {
    },
    'Tabs': {
        'top': '50%',
    },
    'Tab': {
        'color': 'white',
        'opacity': '1',
        'borderRight': '1px solid #4d4d4d',
        'height': '60px',
        'padding': '16px',
        'fontSize': '14px',
        'fontFamily': '\'Segoe UI\'',
        'transition': 'font-size 0.2s',
        '&:hover': {
            'color': 'lightgrey',
        },
    },
    'IconButton': {
        'color': 'white',
        'position': 'absolute',
        'right': '35px',
        'top': '50%',
        'width': '0px',
        'height': '0px',
        'transform': 'translateY(-50%)',
        '&:hover': {
            'color': 'lightgrey',
        },
    },
});


export default function App() {
    const classes = useStyles()

    return (
        <div className={classes.Body}>
            <AppBar color='primary'>
                <Tabs className={classes.Tabs}>
                    <Tab className={classes.Tab} label='Portfolie'></Tab>
                    <Tab className={classes.Tab} label='Kontakt'></Tab>
                    <IconButton href='https://github.com/Kanerix' className={classes.IconButton}>
                        <GitHubIcon style={{ fontSize: 30 }} />
                    </IconButton>
                </Tabs>
            </AppBar>
        </div>
    )
}