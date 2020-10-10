import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DurgotsavComponent } from './durgotsav/durgotsav.component';
import { AaynaComponent } from './aayna/aayna.component';
import { PicnicComponent } from './picnic/picnic.component';
import { SmileComponent } from './smile/smile.component';
import { NewyearComponent } from './newyear/newyear.component';
import { PanchamiComponent } from './panchami/panchami.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Durgotsav2020Component } from './durgotsav2020/durgotsav2020.component';
import { MembershipComponent } from './membership/membership.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import {TabsModule} from 'ngx-tabset';
import { DonationComponent } from './donation/donation.component';
@NgModule({
  declarations: [
    AppComponent,
    DurgotsavComponent,
    AaynaComponent,
    PicnicComponent,
    SmileComponent,
    NewyearComponent,
    PanchamiComponent,
    HomeComponent,
    AboutComponent,
    Durgotsav2020Component,
    MembershipComponent,
    SponsorComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
