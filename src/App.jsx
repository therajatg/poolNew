import { TextField, Card, CardContent, Button } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card style={{ maxWidth: 368, margin: "auto" }}>
        <CardContent>
          <form>
            <TextField
              type="email"
              label="Email address"
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
            />

            <TextField
              type="password"
              label="Password"
              placeholder="Enter your password"
              variant="outlined"
              fullWidth
            />

            <Button type="submit" color="primary" variant="contained" fullWidth>
              SIGN IN
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
