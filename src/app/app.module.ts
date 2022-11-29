import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './before/register/register.component';
import { LoginComponent } from './before/login/login.component';
import { FrontindexComponent } from './before/frontindex/frontindex.component';
import { IndexComponent } from './after/index/index.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidenavserviceService } from './components/sidebar/sidenavservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FrontindexComponent,
    IndexComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [SidenavserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
