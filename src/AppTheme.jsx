/**
 * AppTheme by Cassandra 2018.12.15
 */

import React from 'react';
import {connect} from 'react-redux';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import primaryColor from '@material-ui/core/colors/blue';
import secondaryColor from '@material-ui/core/colors/purple';

class AppTheme extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={this.props.theme}>
                <CssBaseline/>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

const makeTheme = ({Type}) => {
    let theme = createMuiTheme({
        palette: {
            primary: {
                light: primaryColor[300],
                main: primaryColor[500],
                dark: primaryColor[700],
            },
            secondary: {
                light: secondaryColor[300],
                main: secondaryColor[500],
                dark: secondaryColor[700],
            },
            type: Type
        },
        typography: {
            useNextVariants: true,
        },
    });
    console.log('Theme Rebuild ', theme);
    return theme;
};

const mapStateToProps = (state, ownProps) => {
    return {
        theme: makeTheme(state.theme)
    }
};

export default connect(mapStateToProps)(AppTheme);