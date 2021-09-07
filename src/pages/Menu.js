import {
  Button,
  CssBaseline,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <Container>
      <CssBaseline />
      <Grid container>
        <Grid item xs={6} className="gridOne">
          <img className="imgOne" src="https://via.placeholder.com/300" />
          <div className="btnOne">
            <Button variant="outlined" color="primary">
              One
            </Button>
          </div>
        </Grid>
        <Grid item xs={6} className="gridTwo">
          <img src="https://via.placeholder.com/300" />
          <div className="btnTwo">
            <Button variant="outlined" color="secondary">
              Two
            </Button>
          </div>
        </Grid>
        <Grid item xs={6} className="gridThree">
          <img src="https://via.placeholder.com/300" />
          <div className="btnThree">
            <Button variant="outlined" color="primary">
              Three
            </Button>
          </div>
        </Grid>
        <Grid item xs={6} className="gridFour">
          <img src="https://via.placeholder.com/300" />
          <div className="btnFour">
            <Button variant="outlined" color="secondary">
              Four
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
