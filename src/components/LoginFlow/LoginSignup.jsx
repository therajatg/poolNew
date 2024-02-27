// Import necessary components and styles from Material-UI
import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  makeStyles,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import SvgIcon from "../../assets/SvgIcon";

// Define the styles using makeStyles
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: " 8px 22px",
    background: "#00AAD1",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#00AAD1",
    },
  },
}));

// Create the Login component
const LoginSignup = () => {
  const classes = useStyles();

  // State to handle the email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState({
    checkedA: false,
  });
  // Function to handle the form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={classes.paper}>
        <SvgIcon />
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            }
            label="
        I accept the Terms and Conditions"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px 0",
              gap: "16px",
            }}
          >
            <Typography variant="p" className={classes.typo}>
              Forgot your password?
            </Typography>
            <Typography variant="p">Don’t have an account?</Typography>
          </Container>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            CREATE A NEW ACCOUNT!
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginSignup;
