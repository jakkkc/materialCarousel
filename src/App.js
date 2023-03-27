import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { AutoPlay } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#fff",
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
  },
  carouselContainer: {
    width: "50%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  carouselItem: {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>This is the About Page</Typography>
      <div className={classes.carouselContainer}>
        <AutoPlay>
          <div className={classes.carouselItem}>
            <Typography variant="h3">1</Typography>
          </div>
          <div className={classes.carouselItem}>
            <Typography variant="h3">2</Typography>
          </div>
          <div className={classes.carouselItem}>
            <Typography variant="h3">3</Typography>
          </div>
          <div className={classes.carouselItem}>
            <Typography variant="h3">4</Typography>
          </div>
        </AutoPlay>
      </div>
    </div>
  );
}

export default App;
