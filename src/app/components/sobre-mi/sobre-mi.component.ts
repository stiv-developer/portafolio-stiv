import { Component} from '@angular/core';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {

  constructor(public dowloadPdf:PdfService) { }

  

}
