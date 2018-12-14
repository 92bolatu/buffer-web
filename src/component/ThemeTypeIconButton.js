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
        let {isDark} = this.props;
        return (
            <Tooltip title={`Click to ${isDark ? 'light' : 'dark'}`}>
                <IconButton color="inherit" onClick={this.props.onClick}>
                    {isDark ? <WbIncandescentIcon/> : <WbSunnyIcon/>}
                </IconButton>
            </Tooltip>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isDark: state.theme.Type === 'dark'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch({type: 'TOGGLE_THEME_TYPE'})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeTypeIconButton);