import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NavebarComponent } from './navebar/navebar.component';
import { TesteComponent } from './about/about.component';
import { AboutDetailComponent } from './about-detail/about-detail.component';
import { LoginComponent } from './login/login.component';
import { HelpMeComponent } from './help-me/help-me.component';
import { MediaPlayerComponent } from './media-player/media-player.component';

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
    HelpMeComponent,
    MediaPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
