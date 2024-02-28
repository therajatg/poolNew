import LogoIcon from "../assets/LogoIcon";
import { Container, Toolbar, Typography, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles({
  container: {
    background: "#002129",
    width: "100% !important",
    maxWidth: "100% !important",
  },
  headerContent: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Signup: {
    marginLeft: "8px",
    padding: " 6px 16px !important",
    background: "#00AAD1 !important",
    borderRadius: "4px !important",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "26px",
    "&:hover": {
      backgroundColor: "#00AAD1 !important",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <div>
          <LogoIcon />
        </div>

        <div className={classes.headerContainer}>
          <Typography variant="body1" className={classes.headerContent}>
            MM Bracket Challenge
          </Typography>
          <Typography variant="body1" className={classes.headerContent}>
            My Profile
          </Typography>
          <Typography variant="body1" className={classes.headerContent}>
            Our Story
          </Typography>
          <Typography variant="body1" className={classes.headerContent}>
            Contact Us
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.Signup}
          >
            Login / Sign Up
          </Button>
        </div>
      </Toolbar>
    </Container>
  );
};

export default Header;
