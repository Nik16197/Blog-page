import React, { useState } from 'react';
import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({

    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },

    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "70%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => props.open ? "flex" : "none"
        }
    },
    smSearchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icons: {
        alignItems: "center",
        display: (props) => props.open ? "none" : "flex"


    },
    badge: {
        marginRight: theme.spacing(2),
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }

}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });

    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logoLg}>
                    Shaaata
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>
                    Tunne
                </Typography>

                {/* Search bar */}
                <div className={classes.search}>
                    <SearchIcon />
                    <InputBase placeholder='Search.....' />
                    <CancelIcon className={classes.cancel} onClick={() => setOpen(false)} />
                </div>

                {/* Icons Badge */}
                <div className={classes.icons}>
                    <SearchIcon className={classes.smSearchButton} onClick={() => setOpen(true)} />

                    <Badge badgeContent={5} color="secondary" className={classes.badge}>
                        <MailIcon />
                    </Badge>

                    <Badge badgeContent={5} color="secondary" className={classes.badge}>
                        <NotificationsActiveIcon />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://picsum.photos/id/237/200/300" />
                </div>
                {/* Icons Badge */}

                {/* Search bar */}
            </Toolbar>
        </AppBar >
    )
}

export default Navbar;