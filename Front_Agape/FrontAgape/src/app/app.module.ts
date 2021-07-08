import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import{ ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NavebarComponent } from './navebar/navebar.component';
import { TesteComponent } from './about/about.component';
import { AboutDetailComponent } from './about-detail/about-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpMeComponent } from './help-me/help-me.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { BannerActiveComponent } from './banner-active/banner-active.component';
import { LogoAgapeComponent } from './logo-agape/logo-agape.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
    BannerComponent,
    NavebarComponent,
    TesteComponent,
    AboutDetailComponent,
    LoginComponent,
    RegisterComponent,
    HelpMeComponent,
    MediaPlayerComponent,
    BannerActiveComponent,
    LogoAgapeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }