import { React, useState } from "react"
import { Card, CardContent, Container, Grid, Button } from "@material-ui/core"

export default function StudentTrackProgress() {
  const [buttonColor, setButtonColor] = useState(false)
  return (
    <div>
      {[
        { nameofStudent: "./images/aidenAndrews.png", projectsCompleted: "./images/4ProjectsCompleted.png" },
        { nameofStudent: "./images/courtneyBristol.png", projectsCompleted: "./images/4ProjectsCompleted.png" },
        { nameofStudent: "./images/naginiCortes.png", projectsCompleted: "./images/4ProjectsCompleted.png" },
        { nameofStudent: "./images/rawiriFletcher.png", projectsCompleted: "./images/4ProjectsCompleted.png" },
      ].map((text) => (
        <div className="Aiden" style={{ width: "100%", margin: "20px" }}>
          <Card>
            <CardContent>
              <Container maxWidth="xl">
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                  <Grid container direction="column" justify="space-between" alignItems="center" xs={3}>
                    <img src={text.nameofStudent} style={{ width: "80%" }} />

                    <img src={text.projectsCompleted} alt="" srcset="" style={{ width: "60%" }} />
                  </Grid>
                  <Grid container direction="row" justify="space-evenly" alignItems="center" xs={9}>
                    {[
                      "./images/1.png",
                      "./images/2.png",
                      "./images/3.png",
                      "./images/4.png",
                      "./images/5.png",
                      "./images/6.png",
                      "./images/7.png",
                      "./images/8.png",
                      "./images/9.png",
                      "./images/10.png",
                      "./images/11.png",
                      "./images/12.png",
                      "./images/13.png",
                      "./images/14.png",
                      "./images/15.png",
                    ].map((img) => {
                      return (
                        <Button style={{ border: " 2px solid grey", borderRadius: "50px", boxShadow: "2px 2px", marginRight: "8px" }}>
                          <img src={img} alt="image of a number " />
                        </Button>
                      )
                    })}
                  </Grid>
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
