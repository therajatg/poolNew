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
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  preferenceForm: {
    marginBottom: "72px",
  },
  accountHeading: {
    marginTop: "32px !important",
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "45.78px !important",
    fontStyle: " normal",
    fontWeight: "800 !important",
    lineHeight: "68.67px" /* 68.67px */,
    letterSpacing: "-0.87px",
  },
  accountParagraph: {
    marginTop: "8px !important",
    marginBottom: "32px !important",
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
  submitBtn: {
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
const Preferences = ({ handleBack, handleNext }) => {
  const [favoriteSport, setFavoriteSport] = useState("");
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div style={{ padding: "0 82px" }}>
          <SvgIcon />
          <Container>
            <Typography variant="h1" className={classes.accountHeading}>
              Preferences
            </Typography>
            <Typography variant="p" className={classes.accountParagraph}>
              You’re almost done, this is the last step! Note that you can
              always change your selections later via “My Profile”.
            </Typography>
          </Container>
          <form className={classes.preferenceForm}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="favoriteSport"
              label="Favorite Sport"
              type="text"
              id="favoriteSport"
              value={favoriteSport}
              onChange={(e) => setFavoriteSport(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="favoriteTeam"
              label="Favorite Team"
              type="text"
              id="favoriteTeam"
              value={favoriteTeam}
              onChange={(e) => setFavoriteTeam(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <Button className={classes.backBtn} onClick={handleBack}>
                BACK
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitBtn}
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

export default Preferences;
