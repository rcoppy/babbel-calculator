import React from 'react';
import NumberPad from './number_pad';
import OperatorPad from './operator_pad';
import ResultScreen from './result_screen';
import MemoryPad from './memory_pad';

const CalculatorPads = () => pug`
    .calculator-pads
      .top  
        ResultScreen
        MemoryPad
      .bottom
        NumberPad
        OperatorPad
      
`;

export default CalculatorPads;