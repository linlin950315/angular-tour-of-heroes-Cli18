import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  //template: `<h1>hhhhhhhhhhhhHello world!</h1>`,
})


export class CalculatorComponent {
  displayNumberA = ''; // 当前输入的数字
  calculateNumberB = ''; // 上一个输入的数字
  storageNumberC = ''; // 存储的数字
  operation = ''; // 当前操作符
  hasCalculated = false;

  removeAll() {
    this.displayNumberA = '';
    this.calculateNumberB = '';
    this.storageNumberC = '';
    this.operation = '';
    this.hasCalculated = false;
    this.updateDisplay();
  }

  updateDisplay(): void {
    const displayElement = document.getElementById('display') as HTMLInputElement | null;
    if (displayElement) {
      displayElement.value = this.displayNumberA; //TODO 要不要转字符串String(this.displayNumber)
    } else {
      console.error("Element with ID 'display' not found.");
    }
  }

  a(number: string | number): void {
    this.displayNumberA += number.toString();
    this.updateDisplay();
  }

  setOperation(operation: string): void {
    debugger
    if (this.calculateNumberB !== '') {
      console.log('Calling RESULT()');  // 追踪是否进入RESULT
      this.RESULT();  //TODO 1+2+ 最后一个加号没走result？
    } else {
      this.calculateNumberB = this.displayNumberA;
      this.displayNumberA = '';
    }
    this.operation = operation;
    this.displayNumberA = ''
  }

  divideBy100(): void {
    debugger
    var result: number;
    if (this.displayNumberA !== '' && this.calculateNumberB === '' && this.storageNumberC === '') {
      console.log('displayNumberA:', this.displayNumberA);
      console.log('onlyA');
      result = parseFloat(this.displayNumberA) / 100;
      this.displayNumberA = result.toString();
      this.updateDisplay();
    }
    if (this.displayNumberA !== '' && this.calculateNumberB !== '') {
      this.RESULT();
      result = parseFloat(this.storageNumberC) / 100;
      this.calculateNumberB = '';  //
      this.displayNumberA = result.toString();
      this.updateDisplay();
      this.hasCalculated = true;
      this.storageNumberC = result.toString();
    }

  }

  RESULT(): void {
    if (this.displayNumberA === '') return;

    var result: number;  //TODO 局部变量
    var prev;
    var current;

    if (this.hasCalculated === true) {
      prev = parseFloat(this.storageNumberC);
      current = parseFloat(this.displayNumberA);
    } else {               //(hasCalculated === false)
      prev = parseFloat(this.calculateNumberB);
      current = parseFloat(this.displayNumberA);
    }

    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
    this.displayNumberA = result.toString();
    this.updateDisplay();
    this.hasCalculated = true;
    this.storageNumberC = result.toString();

  }
}
