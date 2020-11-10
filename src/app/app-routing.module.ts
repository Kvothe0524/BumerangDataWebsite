import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { SolucionComponent } from './components/solucion/solucion.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'components/welcome', component: WelcomeComponent},
  {path: 'components/introduction', component: IntroductionComponent},
  {path: 'components/benefits', component: BenefitsComponent},
  {path: 'components/aboutus', component: AboutusComponent},
  {path: 'components/services', component: ServicesComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contact', component:ContactComponent },
  {path: 'cotizar', component: CotizarComponent},
  {path: 'solucion', component: SolucionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
