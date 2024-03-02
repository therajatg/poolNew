import { Container, Typography, TextField, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SvgIcon from "../../assets/SvgIcon";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  container: {
    margin: "auto",
    width: "510px",
    textAlign: "center",
    marginTop: "88px",
    // marginBottom: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  accountHeading: {
    marginTop: "13px !important",
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "45.78px !important",
    fontStyle: " normal",
    fontWeight: " 800 !important",
    lineHeight: "68.67px",
    letterSpacing: "-0.87px",
  },
  accountParagraph: {
    marginTop: "8px !important",
    color: "#292929",
    width: "366px !important",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500 !marginTop",
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
  accountForm: {
    marginTop: "32px",
    marginBottom: "125px",
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
const AccountSetup = ({ handleBack, handleNext }) => {
  const [email, setEmail] = useState("");
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <SvgIcon />
        <Container>
          <Typography variant="h1" className={classes.accountHeading}>
            Account Setup
          </Typography>
          <div style={{ padding: "0 82px" }}>
            <Typography variant="p" className={classes.accountParagraph}>
              As much as we want to know everything about you, we can settle for
              a few basic questions to get you up and running with your new Pool
              Party Gaming account!
            </Typography>
          </div>
        </Container>
        <form className={classes.accountForm}>
          <TextField
            style={{ width: "346px" }}
            type="email"
            variant="outlined"
            // margin="normal"
            required
            fullWidth
            id="email"
            label="Email address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "8px",
              marginTop: "16px",
              alignItems: "center",
            }}
          >
            <Button className={classes.backBtn} onClick={handleBack}>
              BACK
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleNext}
            >
              CONTINUE
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountSetup;
