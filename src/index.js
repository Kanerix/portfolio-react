import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'fontsource-roboto';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
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