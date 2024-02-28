import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
import SvgIcon from "../../assets/SvgIcon";
const useStyles = makeStyles(() => ({
  container: {
    margin: "auto",
    width: "540px",
    textAlign: "center",
    marginTop: "88px",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 82px",
  },
  accountHeading: {
    marginBottom: "16px !important",
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "2rem !important",
    fontStyle: " normal",
    fontWeight: "800 !important",
    letterSpacing: "-0.87px",
  },
  accountParagraph: {
    color: "#000",
    width: "336px",
    paddingLeft: "14px",
    paddingRight: "23px",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "23.8px" /* 23.8px */,
    letterSpacing: "-0.266px",
  },
  submit: {
    marginTop: "32px !important",
    padding: " 8px 22px",
    background: "#00AAD1 !important",
    borderRadius: "4px",
    fontWeight: "700 !important",
    fontSize: "15px",
    lineHeight: "26px",
    "&:hover": {
      backgroundColor: "#00AAD1 !important",
    },
  },
}));
const Welcome = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <SvgIcon />
        <Container style={{ marginTop: "32px" }}>
          <Typography variant="h1" className={classes.accountHeading}>
            Welcome to the party!
          </Typography>
          <div style={{ padding: "0 82px" }}>
            <Typography variant="p" className={classes.accountParagraph}>
              A celebration is in order, it’s time to head on over to your
              profile to put on the final touches!
            </Typography>
          </div>
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
