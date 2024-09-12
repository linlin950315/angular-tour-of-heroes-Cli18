import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CalculatorComponent
    //打开 src/app/app.module.ts 你就会发现 HeroesComponent 已经在顶部导入过了。
    //你没有声明过 HeroesComponent，可为什么本应用却正常呢？
    //这是因为 Angular CLI 在生成 HeroesComponent 组件的时候就自动把它加到了 AppModule 中。
    //打开 src/app/app.module.ts 你就会发现 HeroesComponent 已经在顶部导入过了。
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // <-- Include it here
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
