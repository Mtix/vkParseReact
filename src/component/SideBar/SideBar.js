import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {withRouter} from "react-router-dom";
import UserContainer from '../../containers/User';

const styles = theme => ({
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
});

class SideBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="side-bar">
                <UserContainer/>
                <Paper>
                    <MenuList>
                        <MenuItem className={classes.menuItem} onClick={() => {this.props.history.push('/')}}>
                            <ListItemIcon className={classes.icon}>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="Главная" />
                        </MenuItem>
                        <MenuItem className={classes.menuItem} onClick={() => {this.props.history.push('/about')}}>
                            <ListItemIcon className={classes.icon}>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="О нас" />
                        </MenuItem>
                    </MenuList>
                </Paper>
            </div>
        )
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SideBar));
