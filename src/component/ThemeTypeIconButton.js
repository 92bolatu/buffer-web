import React from 'react';
import PubSub from 'pubsub-js';
import {withTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

class ThemeTypeIconButton extends React.Component {
    render() {
        let {theme} = this.props;
        let night = theme.palette.type === 'dark';
        return (
            <Tooltip title={`Click to ${night ? 'light' : 'dark'}`}>
                <IconButton color="inherit" onClick={() => PubSub.publish('theme', {type: night ? 'light' : 'dark'})}>
                    {night ? <WbIncandescentIcon/> : <WbSunnyIcon/>}
                </IconButton>
            </Tooltip>
        );
    }
}

export default withTheme()(ThemeTypeIconButton);