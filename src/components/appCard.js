import React from "react"
import { Grid, GridI } from "@material-ui/core"
import { Container } from "@material-ui/core"
import { Card, CardContent } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import StudentTrackProgress from "./studentTrackProgress"

const styles = makeStyles({
  wholeDivColor: {
    backgroundColor: "#B2E4FA",
    height: "100vh",
  },
  buttonDivStyle: {
    marginTop: "100px",
    marginRight: "150px",
  },
  cardStyle: {
    maxWidth: "1800px",
    marginLeft: "auto",
    marginRight: "50px",
    borderRadius: "20px",
  },
  turnGreen: {
    backgroundColor: "green",
  },
})

export default function AppCard() {
  const classes = styles()

  return (
    <div className={classes.wholeDivColor}>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <div className={classes.buttonDivStyle}>
          <Button>
            <img src="./images/takeScreenShot.png" alt="button of screenshot" />
          </Button>
          <Button>
            <img src="./images/helpCenter.png" alt="button of help center" />
          </Button>
          <Button>
            <img src="./images/moreProjects.png" alt="button of more projects" />
          </Button>
        </div>
      </Grid>
      <Card elevation={1} className={classes.cardStyle}>
        <CardContent>
          <Container maxWidth="xl">
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Button>
                <img src="./images/beginnerCourse.png" />
              </Button>
              <Button>
                <img src="./images/exportSpreadSheet.png" alt="" srcset="" />
              </Button>
              {/* Place Student Here */}

              <StudentTrackProgress />
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </div>
  )
}
