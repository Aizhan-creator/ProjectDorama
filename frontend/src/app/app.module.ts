import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { FilterComponent } from './main-page/filter/filter.component';
import { GenreOptionComponent } from './main-page/filter/genre-option/genre-option.component';
import { GenreItemComponent } from './main-page/filter/genre-item/genre-item.component';
import { doramaListHeaderComponent } from './dorama-list-header/dorama-list-header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserService } from './services/user.service';
import { doramaListComponent } from './main-page/dorama-list/dorama-list.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FilterService } from './services/filter.service';
import { doramaService } from './services/dorama.service';
import { CommentComponent } from './title-page/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TitlePageComponent,
    FilterComponent,
    GenreOptionComponent,
    GenreItemComponent,
    doramaListHeaderComponent,
    FooterComponent,
    LoginPageComponent,
    doramaListComponent,
    UserPageComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    FilterService,
    doramaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
