import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'fontsource-roboto';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#24292e',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

class Index extends React.Component {
    render() {
        return(
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        )
    }
}


ReactDOM.render(
    <Index />,
    document.getElementById('root')
)