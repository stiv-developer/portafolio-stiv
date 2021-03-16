import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent  {

     /*==================== SHOW NAVBAR ====================*/
  showMenu (headerToggle:any, navbarId:any)  {
    const toggleBtn:any = document.getElementById(headerToggle),
    nav:any = document.getElementById(navbarId)
    
    if(headerToggle && navbarId){
      nav.classList.toggle('show-menu')
      toggleBtn.classList.toggle('bx-x')
    }
  }


}
