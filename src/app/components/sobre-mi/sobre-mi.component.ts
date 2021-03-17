import { Component} from '@angular/core';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {

  constructor(public dowloadPdf:PdfService) { }

  contadorLike:number = 0;
  contadorDeslike:number = 0;

  

  clickLike(){
    this.contadorLike=+1;
    this.contadorDeslike=0;
  }

  clickDeslike(){
    this.contadorLike=0;
    this.contadorDeslike=+1;
  }

  

}
