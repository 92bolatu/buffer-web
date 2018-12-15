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

const makeTheme = ({primary, secondary, type} = {}) => {
    let theme = createMuiTheme({
        palette: {
            primary: primary || primaryColor,
            secondary: secondary || secondaryColor,
            type: type || 'light'
        },
        typography: {
            useNextVariants: true,
        },
    });
    return theme;
};

const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.theme.theme
    }
};

export {makeTheme};

export default connect(mapStateToProps)(AppTheme);