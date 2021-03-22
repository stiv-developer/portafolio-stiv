import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent  implements OnInit{
  

     /*==================== SHOW NAVBAR ====================*/
  showMenu (headerToggle:any, navbarId:any)  {
    const toggleBtn:any = document.getElementById(headerToggle),
    nav:any = document.getElementById(navbarId)
    
    if(headerToggle && navbarId){
      nav.classList.toggle('show-menu')
      toggleBtn.classList.toggle('bx-x')
    }
  }

  ngOnInit() {
    
  }

  nav: any;
   MenuToggle(){

    this.showMenu('header-toggle','navbar');

     this.nav = document.getElementById('pague');
     this.nav.classList.toggle('active');
     console.log(this.nav);
 
     this.nav = document.getElementById('sobremi');
     this.nav.classList.toggle('active');
 
    this.nav = document.getElementById('habilidades');
     this.nav.classList.toggle('active');
 
    this.nav = document.getElementById('educacion');
     this.nav.classList.toggle('active');
 
    this.nav = document.getElementById('proyectos');
     this.nav.classList.toggle('active');
 
    this.nav = document.getElementById('contacto');
     this.nav.classList.toggle('active');
   }

}
