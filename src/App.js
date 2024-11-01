import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  };

  const handleSumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const op = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(op));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleMinusNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const op = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(op));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleTimesNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const op = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(op));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleDivNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('÷');
    } else {
      const op = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(op));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handlePerNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    } else {
      const percentage = (Number(currentNumber) / 100) * Number(firstNumber);
      setCurrentNumber(String(percentage));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleSquareNumber = () => {
    if (currentNumber === '0' || currentNumber === '') {
      setCurrentNumber('0');
    } else {
      const op = Math.sqrt(Number(currentNumber));
      setCurrentNumber(String(op));
    }
  };

  const handlePowNumber = (exponent) => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('^');
    } else {
      const result = Math.pow(Number(firstNumber), Number(currentNumber));
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };
  

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case 'x':
          handleTimesNumber();
          break;
        case '÷':
          handleDivNumber();
          break;
        case '%':
          handlePerNumber();
          break;
        case '√':
          handleSquareNumber();
          break;
        case '^':
          handlePowNumber();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="^" onClick={handlePowNumber} />
          <Button label="√" onClick={handleSquareNumber} />
          <Button label="%" onClick={handlePerNumber} />
          <Button label="C" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('4')} />
          <Button label="8" onClick={() => handleAddNumber('5')} />
          <Button label="9" onClick={() => handleAddNumber('6')} />
          <Button label="÷" onClick={handleDivNumber} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="x" onClick={handleTimesNumber} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={handleSumNumber} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
