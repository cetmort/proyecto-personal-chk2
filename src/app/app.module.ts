import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FindComponent } from './components/modules/pages/find/find.component';
import { PlayComponent } from './components/modules/pages/play/play.component';
import { LoginComponent } from './components/modules/login/login.component';
import { AuthInterceptor } from './libs/interceptors/auth.interceptor';
import { ValidatorInterceptor } from './libs/interceptors/validator.interceptor';
import { HomeComponent } from './components/modules/pages/home/home.component';
import { NavComponent } from './components/modules/pages/nav/nav.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FindComponent,
    PlayComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: ValidatorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
