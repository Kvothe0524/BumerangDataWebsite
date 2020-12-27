import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toSectionA(){
    document.getElementById("section-a").scrollIntoView({behavior:"smooth"});
  }
  toSectionB(){
    document.getElementById("section-b").scrollIntoView({behavior:"smooth"});
  }
  toSectionC(){
    document.getElementById("section-c").scrollIntoView({behavior:"smooth"});
  }
  toSectionD(){
    document.getElementById("section-d").scrollIntoView({behavior:"smooth"});
  }
  toSectionE(){
    document.getElementById("section-e").scrollIntoView({behavior:"smooth"});
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
