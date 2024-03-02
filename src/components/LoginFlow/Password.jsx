import { Container, Typography, TextField, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SvgIcon from "../../assets/SvgIcon";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "88px",
    marginBottom: "32px",
    margin: "auto",
    width: "510px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 82px",
  },
  passwordForm: {
    marginBottom: "73px",
  },
  accountHeading: {
    padding: "32px",
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
  submit: {
    marginTop: "16px !important",
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
    marginTop: "16px !important",
    padding: "6px 8px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: 500,
    "&:hover": {
      background: "none",
    },
  },
}));
const Password = ({ handleBack, handleNext }) => {
  const [password, setPassword] = useState("");
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div style={{ padding: "0 82px" }}>
          <SvgIcon />
          <Container>
            <Typography variant="h1" className={classes.accountHeading}>
              Password
            </Typography>
            <Typography variant="p" className={classes.accountParagraph}>
              Passwords should be a minimum length of 12 characters, using a mix
              of uppercase letters, lowercase letters, numbers, and special
              characters.
            </Typography>
          </Container>
          <form className={classes.passwordForm}>
            <TextField
              style={{ width: "370px" }}
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
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
      </div>
    </>
  );
};

export default Password;
