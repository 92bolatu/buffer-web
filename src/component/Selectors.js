import React from 'react';
import Button from '@material-ui/core/Button';

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {withStyles} from '@material-ui/core/styles';


const rarity1 = {};

class RaritySelect extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({open: !state.open}));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;
        return (
            <span>
                <Button size="small"
                        variant="outlined"
                        color="primary"
                        style={{width: 100}}
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                >稀有度</Button>
                 <Popper open={open} anchorEl={this.anchorEl} transition placement="bottom-start">
                    {({TransitionProps, placement}) => (
                        <Grow style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                              {...TransitionProps}>
                            <Paper style={{maxWidth: 100}}>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        {Object.keys(rarity1).map(x =>
                                            <MenuItem onClick={this.handleClose}
                                                      selected={rarity1[x].name === 'Legendary'}
                                            >{rarity1[x].name}</MenuItem>)}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </span>

        );
    }
}


export default withStyles(styles)(RaritySelect);

class Selector extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(prev => ({open: !prev.open}));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({open: false});
    };

    render() {
        const {name, items, value, classes, onChange} = config;// this.props;
        const {open, selectedIndex} = this.state;


        return (
            <div>
                <Button variant="outlined" size="small" color="primary"
                        buttonRef={node => this.anchorEl = node}
                        onClick={this.handleToggle}
                        fullWidth>{value ? items[value].name : name}</Button>
                <Popper open={open} anchorEl={this.anchorEl} transition placement="bottom-start">
                    {({TransitionProps, placement}) => (
                        <Grow style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                              {...TransitionProps}>
                            <Paper style={{width: this.anchorEl.clientWidth + 2}}>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        {items && items.map((item, index) =>
                                            <MenuItem key={index}
                                                      style={item.style}
                                                      selected={value === index}
                                                      onClick={evt => {
                                                          if (onChange && value !== index) {
                                                              onChange(index);
                                                          }
                                                          this.handleToggle();
                                                      }}>{item.name || index}</MenuItem>)}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>

        );
    }


}

const config = {
    name: 'adf',
    items: [
        {name: 'Arcana', value: 'arcana'},
        {name: 'Legendary', value: 'legendary'},
        {name: 'Immortal', value: 'immortal',},
        {name: 'Mythical', value: 'mythical',},
        {name: 'Rare', value: 'rare'},
        {name: 'Uncommon', value: 'uncommon',},
        {name: 'Common', value: 'common', style: {color: 'blue'}}

    ]

};

const WithStylesSelector = withStyles(styles)(Selector);

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },


});

export {WithStylesSelector};