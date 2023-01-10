import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  VerProyectos(){
    
  }

  proyectos = [
    {
      img:"../../../assets/img/player-music.png",
      name:"MUSIC PLAYER WEB",
      description:"Una aplicación para escuchar musica,escuchar a tus mejores artistas, pistas principales, pistas reproducidas recientemente.",
      icon:{
        icon01:{clase:"angular", name:"Angular", fa:"fab fa-angular fa-2x"},
        icon02:{clase:"html", name:"HTML", fa:"fab fa-html5 fa-2x"},
        icon03:{clase:"css", name:"CSS", fa:"fab fa-html5 fa-2x"},
        icon04:{clase:"node", name:"NODE.JS", fa:"fab fa-node-js fa-2x"}
      },
      options:{
        buttonGitHub:{ href:"https://github.com/stiv-developer/music-player-web",name:"GitHub"},
        buttonVisit:{ href:null,name:null}
      }
    },
    {
      img:"../../../assets/img/img-calculadora-prosupuesto.png",
      name:"CALCULADORA DE PRESUPUESTO",
      description:"Para ordenar sus finanzas, lo primero es realizar un presupuesto mensual para saber con claridad cuáles sus ingresos y gastos reales.",
      icon:{
        icon01:{clase:"angular", name:"Angular", fa:"fab fa-angular fa-2x"},
        icon02:{clase:"html", name:"HTML", fa:"fab fa-html5 fa-2x"},
        icon03:{clase:"css", name:"CSS", fa:"fab fa-html5 fa-2x"},
        icon04:{clase:null, name:null, fa:null}
      },
      options:{
        buttonGitHub:{ href:"https://github.com/stiv-developer/calculadoraProsupuesto",name:"GitHub"},
        buttonVisit:{ href:"https://suspicious-bardeen-23e550.netlify.app/",name:"Visit"}
      }
    },
    {
      img:"../../../assets/img/cajeroAutomatico.png",
      name:"MINI CAJERO AUTOMATICO",
      description:"Un cajero automático está compuesto por subsistemas electrónicos con controladores industriales.",
      icon:{
        icon01:{clase:"java", name:"Java", fa:"fab fa-java fa-2x"},
        icon02:{clase:null, name:null, fa:null},
        icon03:{clase:null, name:null, fa:null},
        icon04:{clase:null, name:null, fa:null}
      },
      options:{
        buttonGitHub:{ href:"https://github.com/stiv-developer/cajero_automatico",name:"GitHub"},
        buttonVisit:{ href:null,name:null}
      }
    },
    {
      img:"../../../assets/img/Cronograma-WEB.png",
      name:"CRONÓMETRO WE",
      description:"El cronómetro en línea cuenta el tiempo que pasa, en milésimas de segundo, después de que haga clic en el botón Iniciar. Se le permite añadir vueltas.",
      icon:{
        icon01:{clase:"html", name:"HTML", fa:"fab fa-html5 fa-2x"},
        icon02:{clase:"css", name:"CSS", fa:"fab fa-html5 fa-2x"},
        icon03:{clase:"javascript", name:"JavaScript", fa:"fab fa-js fa-2x"},
        icon04:{clase:null, name:null, fa:null}
      },
      options:{
        buttonGitHub:{ href:"https://github.com/stiv-developer/cronometroweb.github.io",name:"GitHub"},
        buttonVisit:{ href:"https://cronometroweb.herokuapp.com/",name:"Visit"}
      }
    },
    
    {
      img:"../../../assets/img/img-portafolio.png",
      name:"PORTAFOLIO WEB",
      description:"Un portafolio online es una recopilación de los contenidos y materiales producidos por un profesional y publicados online para promocionar su trabajo.",
      icon:{
        icon01:{clase:"angular", name:"Angular", fa:"fab fa-angular fa-2x"},
        icon02:{clase:"html", name:"HTML", fa:"fab fa-html5 fa-2x"},
        icon03:{clase:"css", name:"CSS", fa:"fab fa-html5 fa-2x"},
        icon04:{clase:null, name:null, fa:null}
      },
      options:{
        buttonGitHub:{ href:"https://github.com/stiv-developer/portafolio-stiv",name:"GitHub"},
        buttonVisit:{ href:null,name:null}
      }
    },
    {
      img:"../../../assets/img/calendar_web.png",
      name:"CALENDARIO WEB",
      description:"Calendario web organiza tu vida privada o negocio es más fácil de lo que usted pensaba.",
      icon:{
        icon01:{clase:"html", name:"HTML", fa:"fab fa-html5 fa-2x"},
        icon02:{clase:"css", name:"CSS", fa:"fab fa-html5 fa-2x"},
        icon03:{clase:"javascript", name:"JavaScript", fa:"fab fa-js fa-2x"},
        icon04:{clase:null, name:null, fa:null}
      },
      options:{
        buttonGitHub:{ href:"https://github.com/stiv-developer/calendar-web",name:"GitHub"},
        buttonVisit:{ href:"https://stiv-calendar-web.herokuapp.com/",name:"Visit"}
      }
    }
  ]

}
