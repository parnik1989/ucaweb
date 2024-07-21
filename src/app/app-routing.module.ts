import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AaynaComponent } from './aayna/aayna.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DonationComponent } from './donation/donation.component';
import { DurgotsavComponent } from './durgotsav/durgotsav.component';
import { Durgotsav2020Component } from './durgotsav2020/durgotsav2020.component';
import { Durgotsav2021Component } from './durgotsav2021/durgotsav2021.component';
import { Durgotsav2022Component } from './durgotsav2022/durgotsav2022.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { NewyearComponent } from './newyear/newyear.component';
import { PanchamiComponent } from './panchami/panchami.component';
import { PicnicComponent } from './picnic/picnic.component';
import { SmileComponent } from './smile/smile.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { Durgotsav2023Component } from './durgotsav2023/durgotsav2023.component';
import { Durgotsav2024Component } from './durgotsav2024/durgotsav2024.component';


const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'durgotsav2020', component: Durgotsav2020Component },
  { path: 'durgotsav2021', component: Durgotsav2021Component },
  { path: 'durgotsav2022', component: Durgotsav2022Component },
  { path: 'durgotsav2023', component: Durgotsav2023Component },
  { path: 'durgotsav2024', component: Durgotsav2024Component },
  { path: 'membership', component: MembershipComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'sponsers', component: SponsorComponent },
  { path: 'contactUs', component: ContactComponent },
  { path: 'durgotsav', component: DurgotsavComponent },
  { path: 'aayna', component: AaynaComponent },
  { path: 'newyear', component: NewyearComponent },
  { path: 'smile', component: SmileComponent },
  { path: 'picnic', component: PicnicComponent },
  { path: 'spuja', component: PanchamiComponent },
  { path: 'donation', component: DonationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
