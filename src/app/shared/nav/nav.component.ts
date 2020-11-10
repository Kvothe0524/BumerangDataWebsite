import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
  toWelcome(){
    document.getElementById("welcome").scrollIntoView({behavior:"smooth"});
  }
  toBenefits(){
    document.getElementById("benefits").scrollIntoView({behavior:"smooth"});
  }
  toAboutUs(){
    document.getElementById("aboutus").scrollIntoView({behavior:"smooth"});
  }
  toServices(){
    document.getElementById("services").scrollIntoView({behavior:"smooth"});
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
