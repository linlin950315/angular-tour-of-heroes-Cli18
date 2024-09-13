import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  template: `<h1>hhhhhhhhhhhhHello world!</h1>`,
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

  a(number: number): void {
    this.displayNumberA += number;
    this.updateDisplay();
  }

  setOperation(operation: string): void {


  }

  //@Input() housingLocation!: HousingLocation;

}
