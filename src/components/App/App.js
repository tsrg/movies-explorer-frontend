
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Tech from '../Tech/Tech';
import Student from '../Student/Student';
import Footer from '../Footer/Footer';


function App() {
  return (
    <Switch>
      <Route path="/landing">
        <>
          <Header link={"login"}/>
          <Hero />
          <About />
          <Tech />
          <Student />
        </>
      </Route>
      <Route path="/sign-up">
        <>
          <Header link={"login"}/>
        </>
      </Route>
      <Route path="/sign-in">
        <Header link={"login"}/>
      </Route>
    </Switch>

  );
}

export default App;
