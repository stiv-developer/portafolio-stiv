import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  dowloadPdf() {

    const ProdPdfURL:string = "./assets/documents/stiv_V6.pdf";
    const pdfName:string = "curriculum";
    FileSaver.saveAs(ProdPdfURL,pdfName);
  }
}
