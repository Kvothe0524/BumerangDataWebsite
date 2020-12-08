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
import { QuestionsAComponent } from './components/faq/category/questions-a/questions-a.component';
import { QuestionsBComponent } from './components/faq/category/questions-b/questions-b.component';
import { QuestionsCComponent } from './components/faq/category/questions-c/questions-c.component';
import { QuestionsDComponent } from './components/faq/category/questions-d/questions-d.component';
import { QuestionsEComponent } from './components/faq/category/questions-e/questions-e.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'components/welcome', component: WelcomeComponent },
  { path: 'components/introduction', component: IntroductionComponent },
  { path: 'components/benefits', component: BenefitsComponent },
  { path: 'components/aboutus', component: AboutusComponent },
  { path: 'components/services', component: ServicesComponent },
  //FAQ COMPONENTS


  { path: 'components/faq', component: FaqComponent,
    children: [
      { path: 'questions-a', component: QuestionsAComponent },
      { path: 'questions-b', component: QuestionsBComponent },
      { path: 'questions-c', component: QuestionsCComponent },
      { path: 'questions-d', component: QuestionsDComponent },
      { path: 'questions-e', component: QuestionsEComponent },
    ]
  },

  //Nav Components
  { path: 'contact', component: ContactComponent },
  { path: 'cotizar', component: CotizarComponent },
  { path: 'solucion', component: SolucionComponent },
  { path: 'nosotros', component: AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
