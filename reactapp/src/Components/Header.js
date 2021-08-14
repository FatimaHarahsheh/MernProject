import React from "react";
import { Link } from "@reach/router";
import "../static/css/header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import logo from "../static/images/logo1_no_background.webp";
import { createTheme } from "@material-ui/core/styles";
const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom:'150px',
      display:'flex'
    },
    menuButton: {
      marginRight: theme.spacing(25),
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.05)"
      },
      color: "#89CFF0",
      textDecoration:'none'
    },
    title: {
      marginLeft: theme.spacing(6),
      fontFamily:"'Brush Script MT', cursive",
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.2)",
      },
      color: "#89CFF0"
      
    },

    headerTitle: {
      fontFamily:"'Brush Script MT', cursive",
      // fontFamily: "cursive",
      marginLeft: theme.spacing(3),
    },
    list: {
      display: "flex",
    },
  }));

  const theme = createTheme({
    palette: {
      primary: {
        light: "#ff7961",
        main: "#15024a",
        dark: "#ba000d",
        contrastText: "#000",
      },
      secondary: {
        light: "#ff7961",
        main: "#89CFF0",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar color="primary">
          <Toolbar >
            <IconButton edge="start" className={classes.menuButton}>
              <img className="header-img" src={logo} alt="logo" />
              <Link to="/" className="no-underline">
              <Typography variant="h4" color="secondary" className={classes.headerTitle}>
                SNACKS-MV
              </Typography></Link>
            </IconButton>
            <div className={classes.list}>
              <Link to="/" className="no-underline">
              <Typography variant="h5" className={classes.title}>
                Home
              </Typography>
              </Link>
              <Link to="/browse" className="no-underline">
              <Typography variant="h5" className={classes.title}>
                Browse Movies
              </Typography>
              </Link>
              <Link to="/about_us" className="no-underline">
              <Typography variant="h5" className={classes.title}>
                About us
              </Typography>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
