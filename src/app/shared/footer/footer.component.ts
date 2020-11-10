import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

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
}
