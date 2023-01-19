import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './routes/auth/auth.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { TaskCardComponent } from './components/dashboard/task-card/task-card.component';
import { AddNewTaskComponent } from './components/dashboard/add-new-task/add-new-task.component';
import { InputComponent } from './components/shared/input/input.component';
import { SelectComponent } from './components/shared/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ButtonComponent,
    DashboardComponent,
    TaskCardComponent,
    AddNewTaskComponent,
    InputComponent,
    SelectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
