import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './routes/auth/auth.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { TodoCardComponent } from './components/dashboard/todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ButtonComponent,
    DashboardComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
