import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  @Input() abc?: number;
  //TODO 123的按钮 一个组件
  //运算符 一个组件
  //显示栏 一个组件

  // 按钮点击后，对外提供一个 ‘事件{}
}
