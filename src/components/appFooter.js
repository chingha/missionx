import React from "react"
import { AppBar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Typography } from "@material-ui/core"

const styles = makeStyles(() => ({
  appBar: {
    textAign: "center",
    position: "absolute",
    bottom: 0,
    zIndex: "1400",
    width: "100% !important",
    height: "70px !important",
  },

  copyrightPic: {
    display: "block",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "250px",
  },
}))

export default function AppFooter() {
  const classes = styles()
  return (
    <div>
      <AppBar position="static" color="default" className={classes.appBar}>
        <img src="./images/copyright.png" alt="copyright image" className={classes.copyrightPic} />
        {/* <Typography variant="body1">Copyright 2020</Typography> */}
      </AppBar>
    </div>
  )
}
