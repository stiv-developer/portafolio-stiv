
import { Component} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-pague',
  templateUrl: './pague.component.html',
  styleUrls: ['./pague.component.css']
})
export class PagueComponent  {


  ngOnInit() {
    var typed = new Typed(".typed", {
        strings: ["WEB DEVELOPER"],typeSpeed: 75,startDelay: 400,
        smartBackspace: true // Default value
    });
  }

}
