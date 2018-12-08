import React from 'react';
import PubSub from 'pubsub-js';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/blue';
import secondaryColor from '@material-ui/core/colors/purple';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'light'
        };

    }

    componentDidMount() {
        this.makeTheme();
        this.listener = PubSub.subscribe('theme', (msg, data) => {
            this.setState(data, () => this.makeTheme());
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.listener);
    }

    render() {
        return (
            <MuiThemeProvider theme={this.state.theme}>
                <CssBaseline>
                    <div>sss</div>
                </CssBaseline>
            </MuiThemeProvider>
        );
    }

    makeTheme() {
        let {type} = this.state;
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
                type: type
            },
            typography: {
                useNextVariants: true,
            },
        });
        this.setState({theme});
    }
}