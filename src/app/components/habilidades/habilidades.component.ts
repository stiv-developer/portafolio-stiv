import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  habilidades = [
    {
    img:{
       img01:"../../../assets/img/Iconos-habilidades/Iconos-FrontEnd/icono_angular.svg",
    },
    name:"Angular",
    description:"Creado por Google y destinado a facilitar la creación de aplicaciones web modernas."
    },
    {
    img:{
      img01:"../../../assets/img/Iconos-habilidades/Iconos-FrontEnd/icono_html.svg",
    img02:"../../../assets/img/Iconos-habilidades/Iconos-FrontEnd/icono_css.svg",
    img03:"../../../assets/img/Iconos-habilidades/Iconos-FrontEnd/javascript-seeklogo.com.svg",
    },
    name:"HTML + CSS + JS",
    description:"HTML5, CSS3 y JS para proyectos perfectos para píxeles y amigables con el motor de búsqueda."
    },
    {
      img:{
        img01:"../../../assets/img/Iconos-habilidades/Iconos-FrontEnd/icono_bootstrap.svg",
      },
    name:"Bootstrap",
    description:"Permite crear interfaces web con CSS y JavaScript, cuya particularidad es la de adaptar la interfaz del sitio web al tamaño del dispositivo en que se visualice."
    },
    {
      img:{
    img01:"../../../assets/img/Iconos-habilidades/Iconos_BackEnd/java (1).svg"
     },
    name:"Java",
    description:"Java es rápido, seguro y fiable. Desde portátiles hasta centros de datos, desde consolas para juegos hasta súper computadoras, desde teléfonos móviles hasta Internet."
    },
    {
      img:{
    img01:"../../../assets/img/Iconos-habilidades/Iconos_BackEnd/icons8-spring-logo.svg",
    img02:"../../../assets/img/Iconos-habilidades/Iconos_BackEnd/icons8-spring-logo.svg",
      },
    name:"Spring + Spring boot",
    description:"Es un framework de código abierto para la creación de aplicaciones empresariales Java."
    },
    {
      img:{
    img01:"../../../assets/img/Iconos-habilidades/Iconos_BackEnd/development+logo+mysql+icon-1320184807686758112_0.svg",
    img02:"../../../assets/img/Iconos-habilidades/Iconos_BackEnd/icons8-microsoft-sql-server (1).svg"
  },
    name:"MySQL + SQLServer",
    description:"Es un sistema formado por un conjunto de datos almacenados en discos que permiten el acceso directo a ellos y un conjunto de programas que manipulen ese conjunto de datos."
    }
]

}
