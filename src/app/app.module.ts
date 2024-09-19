import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { CalculatorControllerComponent } from './calculator-controller/calculator-controller.component'; // <-- NgModel lives here
import { CalculatorComponent } from './calculator/calculator.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NumbersComponent } from './numbers/numbers.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CalculatorComponent,
    HeroDetailComponent,
    CalculatorControllerComponent,
    NumbersComponent,

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
