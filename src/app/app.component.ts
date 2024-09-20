import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tour-of-heroes-Cli18';

  // 处理点击事件的函数
  onClick(num: number) {
    console.log('点击了数字:', num);
  }
}
