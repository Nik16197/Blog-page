import { Grid, makeStyles } from '@material-ui/core';
import Feedback from './components/Feedback';
import Leftbar from './components/Leftbar';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar'
const useStyles = makeStyles((theme) => ({

}));

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid sm={2}><Leftbar /></Grid>
                <Grid sm={7}><Feedback /> </Grid>
                <Grid sm={3}><Rightbar /> </Grid>
            </Grid>
        </div>
    )
}

export default App;