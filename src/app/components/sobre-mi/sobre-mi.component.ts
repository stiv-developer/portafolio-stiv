import { Component} from '@angular/core';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {

  constructor(public dowloadPdf:PdfService) { }

  

  str:string []=["estvrak31","@","gmail.com"];
  correo=this.str.join("");

  contadorLike:number = 15;
  contadorDeslike:number = 0;
  total:number = 15;
  totalDeslike:number = 0;
  clicleado:boolean = true;
  clicleadoDeslike:boolean = true;

  clickLike(){
    if(this.clicleado==false){
       this.clicleado=true;
       this.total=this.contadorLike--;
    }
    else if(this.clicleado==true){
       this.clicleado=false;
       this.total=this.contadorLike++;
    }
  }

  clickDeslike(){
    if(this.clicleadoDeslike==false){
      this.clicleadoDeslike=true;
      this.totalDeslike=this.contadorDeslike--;
   }
   else if(this.clicleadoDeslike==true){
      this.clicleadoDeslike=false;
      this.totalDeslike=this.contadorDeslike++;
   }
  }

  

}
