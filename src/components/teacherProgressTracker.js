import React from "react"
import AppHeader from "./appHeader"
import AppDrawer from "./appDrawer"
import AppFooter from "./appFooter"
import AppCard from "./appCard"
import AppHelp from "./appHelp"
import AppStudentProfile from "./appStudentProfile"
import AppLibrary from "./appLibrary"
import AppSubmissions from "./appSubmissions"
import { BrowserRouter, Route, Switch } from "react-router-dom"

export default function TeacherProgressTracker() {
  return (
    <div>
      <AppHeader />
      <AppDrawer />
      <BrowserRouter>
        <Route>
          <Switch>
            <AppCard path="/" component={AppCard} />
            <AppStudentProfile path="/student" component={AppStudentProfile} />
            <AppHelp path="/help" component={AppHelp} />
            <AppLibrary path="/library" component={AppLibrary} />
            <AppSubmissions path="/submissions" component={AppSubmissions} />
          </Switch>
        </Route>
      </BrowserRouter>

      <AppFooter />
    </div>
  )
}
