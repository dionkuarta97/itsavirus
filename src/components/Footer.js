import React, { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction, Paper, Badge } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { Home, ShoppingCart } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    color: "white",
    "&.Mui-selected": {
      color: "black",
    },
    "&:hover": {
      color: "black",
    },
  },
  back: {
    backgroundColor: grey[800],
    height: 68,
  },
});

export default function Footer() {
  const myOrder = JSON.parse(localStorage.getItem("myOrder"));
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);
  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation className={classes.back} showLabels value={value}>
        <BottomNavigationAction className={classes.root} value="/" LinkComponent={Link} to="/" label={<span style={{ fontFamily: "Bebas Neue" }}>Home</span>} icon={<Home />} />
        <BottomNavigationAction
          className={classes.root}
          value="/mybag"
          LinkComponent={Link}
          to="/mybag"
          label={<span style={{ fontFamily: "Bebas Neue" }}>My Bag</span>}
          icon={
            <Badge badgeContent={myOrder?.length} color="error">
              <ShoppingCart />
            </Badge>
          }
        />
      </BottomNavigation>
    </Paper>
  );
}
