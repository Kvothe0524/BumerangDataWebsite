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
import { QuestionsAComponent } from './components/faq/category/questions-a/questions-a.component';
import { QuestionsBComponent } from './components/faq/category/questions-b/questions-b.component';
import { QuestionsCComponent } from './components/faq/category/questions-c/questions-c.component';
import { QuestionsDComponent } from './components/faq/category/questions-d/questions-d.component';
import { QuestionsEComponent } from './components/faq/category/questions-e/questions-e.component';
import { LoginComponent } from './components/login/login.component';
import { SectionAComponent } from './components/benefits/sections/section-a/section-a.component';
import { SectionBComponent } from './components/benefits/sections/section-b/section-b.component';
import { SectionCComponent } from './components/benefits/sections/section-c/section-c.component';
import { SectionDComponent } from './components/benefits/sections/section-d/section-d.component';
import { SectionEComponent } from './components/benefits/sections/section-e/section-e.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
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
  //BENEFITS COMPONENTS
  { path: 'benefits', component: BenefitsComponent,
  children: [
    { path: 'section-a', component: SectionAComponent },
    { path: 'section-b', component: SectionBComponent },
    { path: 'section-c', component: SectionCComponent },
    { path: 'section-d', component: SectionDComponent },
    { path: 'section-e', component: SectionEComponent },
  ]
},
  //Nav Components
  { path: 'contact', component: ContactComponent },
  { path: 'cotizar', component: CotizarComponent },
  { path: 'nosotros', component: AboutusComponent },
  { path: 'usuarios', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
