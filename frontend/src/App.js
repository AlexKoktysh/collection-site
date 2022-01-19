import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Item from './Component/Item/Item';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar className='navbar' />
        <div className='header'>Header</div>
        <div className='profile'>Profile</div>
        <div className='app-wrapper-content'>
          <Route path='/item' 
            // render={() => <Item />} />
          component={Item} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

// render={() => <DialogsContainer />} />