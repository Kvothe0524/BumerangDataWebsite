import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(    
    private route: ActivatedRoute, private router: Router

    ) { }

  ngOnInit(): void {
  }

  //FUNCIONES DE NAVEGACIÓN
  toQuestionsA() {
    document.getElementById("questions-a").scrollIntoView({ behavior: "smooth" });
  }
  toQuestionsB() {
    document.getElementById("questions-b").scrollIntoView({ behavior: "smooth" });
  }
  toQuestionsC() {
    document.getElementById("questions-c").scrollIntoView({ behavior: "smooth" });
  }
  toQuestionsD() {
    document.getElementById("questions-d").scrollIntoView({ behavior: "smooth" });
  }
  toQuestionsE() {
    document.getElementById("questions-e").scrollIntoView({ behavior: "smooth" });
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }


}
