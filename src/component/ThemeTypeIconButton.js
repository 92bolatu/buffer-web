/**
 * ThemeTypeIconButton by Cassandra 2018.12.15
 */

import React from 'react';
import {connect} from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

class ThemeTypeIconButton extends React.Component {
    render() {
        let isDark = this.props.type === 'dark';
        let toggle = isDark ? 'light' : 'dark';
        return (
            <Tooltip title={`Click to ${toggle}`}>
                <IconButton color="inherit" onClick={() => this.props.onClick(toggle)}>
                    {isDark ? <WbIncandescentIcon/> : <WbSunnyIcon/>}
                </IconButton>
            </Tooltip>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        type: state.theme.config.type
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (value) => dispatch({type: 'SET_THEME_PALETTE_TYPE', value})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeTypeIconButton);