import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  contactos = [
    {
      tipo:"Correo",
      name:"estvrak31@gmail.com",
      icon:"far fa-envelope fa-4x mt-2 icon",
    },
    {
      tipo:"Telefono",
      name:"+51 924 588 249",
      icon:"fas fa-phone fa-4x mt-2 icon",
    },
    {
      tipo:"WhatsApp",
      href:"https://wa.me/51924588249?text=Hola%20necesito%20informacion",
      name:"Mi WhatsApp",
      icon:"fab fa-whatsapp fa-4x mt-2 icon",
    },
    {
      tipo:"LinkedIn",
      href:"https://www.linkedin.com/in/stiv-rua-436567196/",
      name:"linkedin.com/in/stiv-rua/",
      icon:"fab fa-linkedin-in fa-4x mt-2 icon",
    },
    {
      tipo:"GitHub",
      href:"https://github.com/stiv-developer",
      name:"github.com/stiv-developer",
      icon:"fab fa-github fa-4x mt-2 icon",
    }
  ]

}
