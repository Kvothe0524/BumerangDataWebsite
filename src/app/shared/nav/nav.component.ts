import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  constructor(private location: Location, private router: Router) { 
    console.log('constructor ran');    
  }

  ngOnInit(): void {

  } 
  toSectionA(){
    document.getElementById("benefits/sectionA").scrollIntoView({behavior:"smooth"});
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
