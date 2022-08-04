import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast/weatherforecast.component';
import { HomeComponent } from './general-pages/home/home.component';
import { SignupComponent } from './general-pages/signup/signup.component';
import { LoginComponent } from './general-pages/login/login.component';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { VerticalLayoutComponent } from './layout/vertical-layout/vertical-layout.component';
import { HorizontalLayoutComponent } from './layout/horizontal-layout/horizontal-layout.component';
import { TopbarComponent } from './layout/shared/topbar/topbar.component';
import { LeftSidebarComponent } from './layout/shared/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './layout/shared/right-sidebar/right-sidebar.component';
import { FooterComponent } from './layout/shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherforecastComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    NgbModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
