import { Container, Typography, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SvgIcon from "../../assets/SvgIcon";
const useStyles = makeStyles(() => ({
  container: {
    margin: "auto",
    width: "510px",
    textAlign: "center",
    marginTop: "88px",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 82px",
  },
  accountHeading: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "45.78px !important",
    fontStyle: " normal",
    fontWeight: "800 !important",
    lineHeight: "68.67px",
    letterSpacing: "-0.87px",
    marginTop: "32px !important",
    marginBottom: "16px !important",
  },
  accountParagraph: {
    color: "#292929",
    width: "366px",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "23.8px",
    letterSpacing: "-0.266px",
  },
  submit: {
    padding: " 6px 16px",
    background: "#00AAD1 !important",
    borderRadius: "4px",
    fontWeight: "700 !important",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#00AAD1 !important",
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
          <div style={{ padding: "0 16px" }}>
            <Typography variant="p" className={classes.accountParagraph}>
              By clicking on sign-up you agree to Pool Party’s
              <span style={{ textDecorationLine: "underline" }}>
                Terms and Services.
              </span>
              To learn more about our data protection policies, please see
              <span style={{ textDecorationLine: "underline" }}>
                Pool Party Privacy Policy.
              </span>
              <div style={{ margin: "8px" }}>
                Additional profile information can be accessed under the “My
                Settings” section.
              </div>
            </Typography>
          </div>
        </Container>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
            alignItems: "center",
            paddingTop: "72px",
          }}
        >
          <Button className={classes.backBtn} disabled>
            BACK
          </Button>
          <Button
            type="submit"
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
