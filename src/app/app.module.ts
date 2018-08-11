import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormEmployeeComponent } from './employee/form-employee/form-employee.component';
import { EmployeeService } from './employee/employee.service';
import { MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { GlobalActivePowerChartComponent } from './global-active-power-chart/global-active-power-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    FormEmployeeComponent,
    FormLoginComponent,
    MenuComponent,
    GlobalActivePowerChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: 'cadastro', component: FormEmployeeComponent },
      { path: 'login', component: FormLoginComponent },
      { path: 'home', component: GlobalActivePowerChartComponent },
      { path: '', component: FormLoginComponent }
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})


export class AppModule { }
