import { ɵWebAnimationsStyleNormalizer } from '@angular/animations/browser';
import { Component, OnInit } from '@angular/core';
import { ParticlesModule } from 'angular-particle';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  constructor() { }
  width: number = 100;
  height: number = 100;
  myStyle: Object = {
    'position': 'absolute',
    'width': '100%',
    'height': '90%',
    'z-index': 10,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  myParams: object = {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#FFFFFF"
      },
      "shape": {
        "type": "circle",
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 30
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FFFFFF",
        "opacity": 0.2,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1.0,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  

  ngOnInit(): void {
   /*  var r = document.querySelector<HTMLElement>('body');
    var i_time1 = 500;
    var i_time2 = 1750;
    var i_time3 = 3500;
    var i_time4 = 5250;
    var i_time5 = 7000;
    var i_time6 = 8750;
    var i_time7 = 11250;
    var i_time8 = 12000;

    function changeTime1(){
      var rs = getComputedStyle(r);
      var time1 = rs.getPropertyValue('--time1');
      console.log("time1:" + time1)
      time1 = time1.replace("s","");
      var time_int = parseInt(time1);
      time_int = time_int + 12.00;
      time1 = time_int.toString() + "s";
      
      r.style.setProperty('--time1', time1);
      i_time1 = i_time1 + 12000;
    }
    function changeTime2(){
      var rs = getComputedStyle(r);
      var time2 = rs.getPropertyValue('--time2');
      time2 = time2.replace("s","");
      var time_int = parseInt(time2);
      time_int = time_int + 12.00;
      time2 = time_int.toString() + "s";
      r.style.setProperty('--time2', time2);
      i_time2 = i_time2 + 12000;
    }
    function changeTime3(){
      var rs = getComputedStyle(r);
      var time3 = rs.getPropertyValue('--time3');
      time3 = time3.replace("s","");
      var time_int = parseInt(time3);
      time_int = time_int + 12.00;
      time3 = time_int.toString() + "s";
      r.style.setProperty('--time3', time3);
      i_time3 = i_time3 + 12000;
    }
    function changeTime4(){
      var rs = getComputedStyle(r);
      var time4 = rs.getPropertyValue('--time4');
      time4 = time4.replace("s","");
      var time_int = parseInt(time4);
      time_int = time_int + 12.00;
      time4 = time_int.toString() + "s";
      r.style.setProperty('--time4', time4);
      i_time4 = i_time4 + 12000;
    }
    function changeTime5(){
      var rs = getComputedStyle(r);
      var time5 = rs.getPropertyValue('--time5');
      time5 = time5.replace("s","");
      var time_int = parseInt(time5);
      time_int = time_int + 12.00;
      time5 = time_int.toString() + "s";
      r.style.setProperty('--time5', time5);
      i_time5 = i_time5 + 12000;
    }
    function changeTime6(){
      var rs = getComputedStyle(r);
      var time6 = rs.getPropertyValue('--time6');
      time6 = time6.replace("s","");
      var time_int = parseInt(time6);
      time_int = time_int + 12.00;
      time6 = time_int.toString() + "s";
      r.style.setProperty('--time6', time6);
      i_time6 = i_time6 + 12000;
    }
    function changeTime7(){
      var rs = getComputedStyle(r);
      var time7 = rs.getPropertyValue('--time7');
      time7 = time7.replace("s","");
      var time_int = parseInt(time7);
      time_int = time_int + 12.00;
      time7 = time_int.toString() + "s";
      r.style.setProperty('--time7', time7);
      i_time7 = i_time7 + 12000;
    }
    function changeTime8(){
      var rs = getComputedStyle(r);
      var time8 = rs.getPropertyValue('--time8');
      time8 = time8.replace("s","");
      var time_int = parseInt(time8);
      time_int = time_int + 12.00;
      time8 = time_int.toString() + "s";
      r.style.setProperty('--time8', time_int.toString());
      i_time8 = i_time8 + 12000;
    }
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    function waitTime(){
      setTimeout(changeTime1, i_time1);
      setTimeout(changeTime2, i_time2);
      setTimeout(changeTime3, i_time3);
      setTimeout(changeTime4, i_time4);
      setTimeout(changeTime5, i_time5);
      setTimeout(changeTime6, i_time6);
      setTimeout(changeTime7, i_time7);
      setTimeout(changeTime8, i_time8);
    }

    function myLoop() {         
      setTimeout(function() {
        waitTime();   
          myLoop();             
      }, 12000)
    }

    waitTime();
    myLoop(); */
  }
  
  

}
