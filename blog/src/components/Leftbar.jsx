import { makeStyles, Container, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({

    container: {
        paddingTop: theme.spacing(10)
    }
}));

const Leftbar = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home</Typography>
            </div>
        </Container>
    )
}

export default Leftbar;