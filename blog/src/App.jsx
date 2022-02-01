import { Grid, makeStyles } from '@material-ui/core';
import Add from './components/Add';
import Feedback from './components/Feedback';
import Leftbar from './components/Leftbar';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';


const useStyles = makeStyles((theme) => ({
    right: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid sm={2} xs={2}><Leftbar /></Grid>
                <Grid sm={7} xs={2}><Feedback /> </Grid>
                <Grid sm={3} className={classes.right}><Rightbar /> </Grid>
            </Grid>
            <Add />
        </div>
    )
}

export default App;