import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Header from '../header/header';
import MainPage from '../../pages/main/mainPage';
import AboutPage from '../../pages/about/aboutPage';
import ErrorPage from '../../pages/404/errorPage';
import FormPage from '../../pages/forms/formPage';

export default class WrappedApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header title="Main" />
                <MainPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header title="About" />
                <AboutPage />
              </>
            }
          />
          <Route
            path="/form"
            element={
              <>
                <Header title="Form" />
                <FormPage />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header title="Error" />
                <ErrorPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
