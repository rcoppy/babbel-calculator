import React from 'react';
import Header from './pug/header';
import ContentMixin from './pug/content_mixin'
import Footer from './pug/footer';
import Navbar from './pug/navbar';
import CalculatorPads from './pug/calculator_pads';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

// import '../../assets/sass/main.scss';

const App = () => pug`
  Header(
    content=${pug`h1 Best Calculator #[FontAwesomeIcon(icon=faCalculator)]`})

  ContentMixin
    h2 Hello! Welcome to calculator
    CalculatorPads

  Footer
    p This is a footer
`;

export default App;