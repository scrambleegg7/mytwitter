import React, {useState, Component} from 'react';
import { Link, Redirect } from "react-router-dom";

import clsx from 'clsx';

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

//import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
//import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Home from '../components/Home';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 240;

    const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});




  
class ButtonAppBar extends Component {


    constructor(props) {
        super(props);

        this.state = {
            open : false,
            isAuthenticated: false,
        }
    }

    handleDrawerOpen = () => {
        this.setState({
            open: true
        })
      };
    
    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    };

    handleSignOut =() => {

        this.props.signOut();
        this.setState({
            open: false
        })
        //return <Redirect  to="/"   />
    }
    
    handleProfile =() => {

        //console.log("edit profile: token",this.props.data.token)
        //console.log("edit profile: userId",this.props.data.user._id )

        const credential = {
            token: this.props.data.token, 
            userId: this.props.data.user._id
        }
        this.props.getUser(credential);
        this.setState({
            open: false
        })
        //return <Redirect  to="/"   />
    }



    menuItem = () => {

        const data = this.props.data;

        if (!data) {
            return (
                <div>
                    <List>
                        <ListItem button  component={Link} to="/signin" >
                        <ListItemIcon>< PersonIcon /></ListItemIcon>
                        <ListItemText primary="Login" />
                        </ListItem>
                    </List>                
                </div> 
    
            )
        }
        else {
            return (
                <div>
                    <List>
                        <ListItem  >
                        <ListItemIcon>< PersonIcon /></ListItemIcon>
                        <ListItemText primary={data.user.email} />
                        </ListItem>
                    </List>    
                    <List>
                        <ListItem button  onClick={ this.handleProfile  } >
                        <ListItemIcon>< PersonIcon /></ListItemIcon>
                        <ListItemText primary="edit profile" />
                        </ListItem>
                    </List>    

                    <Divider />            
                    <List>
                        <ListItem button  onClick={ this.handleSignOut  } >
                        <ListItemIcon>< ExitToAppIcon /></ListItemIcon>
                        <ListItemText primary="Logout" />
                        </ListItem>
                    </List>    
    
                </div>
            )
        }
    }
    


    
    render () {

        const {classes, data, redirectToProfile, user} = this.props;
        const { open } = this.state;


        //console.log("ButtonAppBar:",this.props)
        console.log("ButtonAppBar redirect profile -> : ", redirectToProfile )
        if (user && redirectToProfile) {
            const userId = user._id;
            console.log("User ID:",userId)
            
            return <Redirect to={{pathname: `/user/${userId}`}} {...user}   />
        }

        return   (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Company Board
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon /> 
                </IconButton>
                </div>
                <Divider />

                    { this.menuItem()  }
                
                <Divider />
            </Drawer>
                <main
                    className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />

                    <Home />

                </main>
            </div>
        )}
}

export default  withStyles(styles)( ButtonAppBar );