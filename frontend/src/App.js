import React from 'react';
import 'materialize-css'
import './App.scss';
// import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import Navbar from './Component/Navbar/Navbar';
// import Item from './Component/Item/Item';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/authContext';
import { Navbar } from './Component/Navbar/Navbar';
import { Loader } from './Component/Loader/Loader';

const App = (props) => {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  if (!ready) {
    return <Loader />
  }
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuth
    }}>
      <BrowserRouter>
        {isAuth && <Navbar />}
        <div className='container'>
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
    // <BrowserRouter>
    // <div className='container'>
    //   <div className='App'>
    //       <Navbar className='navbar' />
    //       <div className='header'>Header</div>
    //       <div className='profile'>Profile</div>
    //       <div className='app-wrapper-content'>
    //         <Route path='/item' 
    //           // render={() => <Item />} />
    //         component={Item} />
    //       </div>
    //     </div>
    // </div>
    // </BrowserRouter>
  )
}

export default App


// render={() => <DialogsContainer />} />