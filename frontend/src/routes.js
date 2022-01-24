import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { Auth } from "./Component/Auth/Auth"
import { Create } from "./Component/Create/Create"
import { Detail } from "./Component/Detail/Detail"
import { Links } from "./Component/Links/Links"

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/links' exact>
                    <Links />
                </Route>
                <Route path='/create' exact>
                    <Create />
                </Route>
                <Route path='/detail/:id'>
                    <Detail />
                </Route>
                <Redirect to='/create' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/' exact>
                <Auth />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}