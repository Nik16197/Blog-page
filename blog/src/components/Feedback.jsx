import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    container: {
        paddingTop: theme.spacing(10)
    }
}));

const Feedback = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                Feedback
            </div>
        </Container>
    )
}

export default Feedback;