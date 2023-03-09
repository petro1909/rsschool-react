import './app.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Header from '../header/header';
import MainPage from '../../pages/main/mainPage';
import AboutPage from '../../pages/about/aboutPage';
import ErrorPage from '../../pages/404/errorPage';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
