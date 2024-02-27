import { Container, makeStyles, Typography, Button } from "@material-ui/core";
import SvgIcon from "../../assets/SvgIcon";
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    width: "540px",
    textAlign: "center",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 82px",
  },
  accountHeading: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "45.78px",
    fontStyle: " normal",
    fontWeight: 800,
    lineHeight: "68.67px" /* 68.67px */,
    letterSpacing: "-0.87px",
  },
  accountParagraph: {
    color: "#000",
    width: "336px",
    paddingLeft:"14px",
    paddingRight:"23px",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "23.8px" /* 23.8px */,
    letterSpacing: "-0.266px",
  },
  submit: {
    marginTop:"32px",
    padding: " 8px 22px",
    background: "#00AAD1",
    borderRadius: "4px",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight:"26px",
    "&:hover": {
      backgroundColor: "#00AAD1",
    },
  },
}));
const Welcome = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <SvgIcon />
        <Container>
          <Typography variant="h1" className={classes.accountHeading}>
          Welcome to the party!
          </Typography>
          <Typography variant="p" className={classes.accountParagraph}>
          A celebration is in order, it’s time to head on over to your profile to put on the final touches!
          </Typography>
        </Container>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            MY PROFILE
          </Button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
