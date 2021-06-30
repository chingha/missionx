import React from "react"
import Drawer from "@material-ui/core/Drawer"
import { Toolbar } from "@material-ui/core"
import { List } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem"

import ListItemText from "@material-ui/core/ListItemText"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles } from "@material-ui/core"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import { Typography } from "@material-ui/core"

const styles = makeStyles(() => ({
  teacherProfilePic: {
    height: "100px",
    width: "100px",
    margin: "20px auto",
  },

  listIcon: {
    marginRight: 10,
  },

  listName: {
    color: "white",
    fontWeight: "bolder",
  },

  drawerColor: {
    background: "#43C0F6",
  },
  bottomDiv: {
    position: "absolute",
    bottom: 80,
    width: "100%",
  },
  bottomNav: {
    background: "#43C0F6",
  },
  bottomNavAction: {
    color: "white",
  },
}))

export default function AppDrawer() {
  const classes = styles()

  return (
    <div>
      <Drawer variant="permanent" anchor="left" open="true" classes={{ paper: classes.drawerColor }}>
        <Toolbar />
        <div>
          <Avatar src="./images/userBig.png" alt="teacher profile picture" className={classes.teacherProfilePic} />
          <List>
            {[
              { name: "PROGRESS TRACKER", pic: "./images/progressDark.png" },
              { name: "STUDENT PROFILES", pic: "./images/userGraduate.png" },
              { name: "HELP REQUESTS", pic: "./images/helpIcon.png" },
              {
                name: "PROJECT SUBMISSIONS",
                pic: "./images/helpIcon.png",
              },
              { name: "PROJECT LIBRARY", pic: "./images/libraryLight.png" },
            ].map((text) => (
              <ListItem button onClick={() => alert(text.name)}>
                <img src={text.pic} className={classes.listIcon} alt="image of menu buttons" />
                <ListItemText>
                  <Typography fontWeight="fontWeightBold" style={{ color: "white" }}>
                    {text.name}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>

        <div className={classes.bottomDiv}>
          <BottomNavigation showLabels className={classes.bottomNav}>
            <BottomNavigationAction label="Profile" icon={<img src="./images/userIcon.png" />} className={classes.bottomNavAction} />
            <BottomNavigationAction label="Settings" icon={<img src="./images/settingIcon.png" />} className={classes.bottomNavAction} />
            <BottomNavigationAction label="Logout" icon={<img src="./images/logoutIcon.png" />} className={classes.bottomNavAction} />
          </BottomNavigation>
        </div>
      </Drawer>
    </div>
  )
}
