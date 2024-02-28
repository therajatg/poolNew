import { Container, Typography, TextField, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SvgIcon from "../../assets/SvgIcon";
import { useState } from "react";
import Progressbar from "../Progressbar";

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
  },
  basicInfoForm: {
    marginBottom: "72px",
    marginTop: "24px",
  },
  accountHeading: {
    marginTop: "16px !important",
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "45.78px !important",
    fontStyle: " normal",
    fontWeight: "800 !important",
    lineHeight: "68.67px",
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
    lineHeight: "23.8px",
    letterSpacing: "-0.266px",
  },
  headingText: {
    color: " #292929",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: " 23.8px",
    letterSpacing: "-0.266px",
    textDecorationLine: "underline",
    display: "flex",
  },
  submit: {
    marginTop: "32px !important",
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
    marginTop: "32px !important",
    padding: "6px 8px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: 500,
    "&:hover": {
      background: "none",
    },
  },
}));
const BasicInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div style={{ padding: "0 82px" }}>
          <SvgIcon />
          <Container>
            <Typography variant="h1" className={classes.accountHeading}>
              Basic Info
            </Typography>
            <Typography variant="p" className={classes.accountParagraph}>
              We just need a few more details so we can continue with the
              account setup process. This username will appear on all
              leaderboards.
            </Typography>
          </Container>
          <form className={classes.basicInfoForm}>
            <TextField
              style={{ width: "370px" }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="First Name"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              style={{ width: "370px" }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              style={{ width: "370px" }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userName"
              label="Username"
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              style={{ width: "370px" }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="dateOfBirth"
              label="Date of Birth    "
              type="text"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />

            <Typography variant="div" className={classes.headingText}>
              Why do we need your date of birth?
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
                alignItems: "center",
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
                CONTINUE
              </Button>
            </div>
          </form>
        </div>

        <Progressbar />
      </div>
    </>
  );
};

export default BasicInfo;
