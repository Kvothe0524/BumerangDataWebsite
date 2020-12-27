import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BodyComponent } from './components/body/body.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpComponent } from './exp/exp.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { ParticlesModule } from 'angular-particle';

import {  HashLocationStrategy, LocationStrategy} from '@angular/common';
import { QuestionsAComponent } from './components/faq/category/questions-a/questions-a.component';
import { QuestionsBComponent } from './components/faq/category/questions-b/questions-b.component';
import { QuestionsCComponent } from './components/faq/category/questions-c/questions-c.component';
import { QuestionsDComponent } from './components/faq/category/questions-d/questions-d.component';
import { QuestionsEComponent } from './components/faq/category/questions-e/questions-e.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SectionAComponent } from './components/benefits/sections/section-a/section-a.component';
import { SectionBComponent } from './components/benefits/sections/section-b/section-b.component';
import { SectionCComponent } from './components/benefits/sections/section-c/section-c.component';
import { SectionDComponent } from './components/benefits/sections/section-d/section-d.component';
import { SectionEComponent } from './components/benefits/sections/section-e/section-e.component';
import { StatsComponent } from './components/welcome/sections/stats/stats.component';
import { TestamentsComponent } from './components/welcome/sections/testaments/testaments.component';
import { ImplementationComponent } from './components/welcome/sections/implementation/implementation.component';
import { ReasonsComponent } from './components/welcome/sections/reasons/reasons.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WelcomeComponent,
    BodyComponent,
    IntroductionComponent,
    BenefitsComponent,
    AboutusComponent,
    ServicesComponent,
    FaqComponent,
    ContactComponent,
    ExpComponent,
    CotizarComponent,
    QuestionsAComponent,
    QuestionsBComponent,
    QuestionsCComponent,
    QuestionsDComponent,
    QuestionsEComponent,
    LoginComponent,
    SectionAComponent,
    SectionBComponent,
    SectionCComponent,
    SectionDComponent,
    SectionEComponent,
    StatsComponent,
    TestamentsComponent,
    ImplementationComponent,
    ReasonsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ParticlesModule,
    BrowserAnimationsModule,
    

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
