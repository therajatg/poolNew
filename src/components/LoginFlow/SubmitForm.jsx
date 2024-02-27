import { Container, makeStyles, Typography, Button } from "@material-ui/core";
import SvgIcon from "../../assets/SvgIcon";
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    width: "510px",
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
    color: "#292929",
    width: "366px",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "23.8px" /* 23.8px */,
    letterSpacing: "-0.266px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: " 6px 16px",
    background: "#00AAD1",
    borderRadius: "4px",
    fontWeight: 700,
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#00AAD1",
    },
  },
  backBtn: {
    padding: "6px 8px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: 500,
    "&:hover": {
      background: "none",
    },
  },
}));
const SubmitForm = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <SvgIcon />
        <Container>
          <Typography variant="h1" className={classes.accountHeading}>
            Finish & Submit
          </Typography>
          <Typography variant="p" className={classes.accountParagraph}>
            By clicking on sign-up you agree to Pool Party’s Terms and Services.
            To learn more about our data protection policies, please see Pool
            Party Privacy Policy. Additional profile information can be accessed
            under the “My Settings” section.
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
            // fullWidth
            // color="primary"
            className={classes.backBtn}
          >
            BACK
          </Button>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            SIGN-UP!
          </Button>
        </div>
      </div>
    </>
  );
};

export default SubmitForm;
