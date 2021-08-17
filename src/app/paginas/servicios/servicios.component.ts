import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Servicio } from '../../interface/servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, AfterViewInit {

  public tipServicio: Servicio;

  public nombreServicio: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.servicio();
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }

  servicio(): void {
    const tipoServicio = this.route.snapshot.queryParamMap.get('tipoServicio');
     this.nombreServicio = this.route.snapshot.queryParamMap.get('tipoServicio');
    if (tipoServicio === 'remodelacion') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/remodelacion/remodelacion1.png',
        tituloBanner: 'Remodelación',
        descripcionBanner: 'Remodelaciones de casas, edificios, apartamentos entre otros.',
        servicio: [
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/remodelacion/remodelacion2.png', tituloServicio: 'Remodelación de casas', descServicio: 'Todos los elementos del hogar necesitan cuidado e innovación ya que  aportará a tu casa mayor comodidad a ti y a tu familia', revers: false
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/remodelacion/remodelacion4.png', tituloServicio: 'Remodelación de apartamentos', descServicio: 'Reformar una vivienda es una operación de cuidado y un pequeño acto de fe. Para hacerlo es necesario tener la capacidad de ver, no lo que hay, sino lo que puede haber', revers: true },

          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/remodelacion/oficina.png', tituloServicio: 'Remodelación de oficinas', descServicio: ' En este primer paso, se debe determinar si el espacio corporativo de tu compañía requiere de una pequeña adaptación o de una reconstrucción total, analizando los objetivos que se pretenden alcanzar con la remodelación.', revers: false },
          { imgServicio: '../../../assets/servicios/remodelacion/Construcción-Locales-Comerciales-12.png', tituloServicio: 'Remodelación de locales comerciales', descServicio: 'Sabemos que remodelar puede ser un desafío, pero estamos aquí para ayudarte a sacar el máximo provecho de tu espacio, transformamos lo existente en el espacio que usted deseó.', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/remodelacion/remodelacion-ultima.png', tituloServicio: 'Remodelaciones', descServicio: 'En las remodelaciones se revisan estándares de estaciones de trabajo, equipamiento, sobre todo, adyacencias funcionales y formas de reunión que cada día van más hacia espacios colaborativos multifuncionales, en lugar de simples salas de reunión. Tomado todo esto en cuenta, el resultado dará una plataforma física, moderna y dinámica que permitirá al personal mayor interacción, mayor confort y mejor rendimiento en todas sus actividades diarias.', revers: false },
        ]
      };

    } else if (tipoServicio === 'vidrio-aluminio') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/vidrio-aluminio/vidrio-aluminio1.png',
        tituloBanner: 'Vidrio y Aluminio',
        descripcionBanner: 'Instalación de Vidrios y todas sus aplicaciones',
        servicio: [
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/vidrio-aluminio/vidrio-tem.jpeg', tituloServicio: 'Vidrio templado', descServicio: 'Fachadas comerciales de vidrio templado, divisiones de oficinas, ventanas fijas, puertas corredizas, puertas automaticas, techos de vidrios templado, puertas para baño, sobres y muro cortina.', revers: false
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/vidrio-aluminio/lowe.jpeg', tituloServicio: 'Louvers', descServicio: 'Los louvers son sistemas para a protección de espacios en zonas residenciales, comerciales e industriales que favorecen y controlan la ventilación del área protegida, limitando al mismo tiempo el paso de elementos externos presentes en el ambiente.', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/vidrio-aluminio/techos-vidrios.jpeg', tituloServicio: 'Techos de vidrio', descServicio: 'Un techo de cristal es una estructura de aluminio y cristal templado que cubre un espacio abierto como puede ser una pérgola, porche, terraza o patio interior.', revers: false },
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/vidrio-aluminio/diviones de ofinas.jpeg', tituloServicio: 'Divisiones de oficina', descServicio: 'Divisiones de oficina. Divisiones de oficinas en vidrio templado de seguridad y con estructura en aluminio arquitectonico.', revers: true
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/vidrio-aluminio/sistema-escaleras.jpeg', tituloServicio: 'Barandas', descServicio: 'Sistemas de Barandas de Vidrio Para escaleras, terrazas, balcones...', revers: false },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/vidrio-aluminio/paños fijos y puertas.jpeg', tituloServicio: 'Paño fijo y puertas', descServicio: 'Divisiones de oficina - Fachadas comerciales y residenciales - Tableros en vidrio. Vidrio crudo, templado, laminado, Insulado - Aluminio.', revers: true },
        ]
      };

    } else if (tipoServicio === 'gypsum') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/gypsum/gypsum.png',
        tituloBanner: 'Gypsum',
        descripcionBanner: 'Aplicaciones Gypsum para cielo raso, paredes, lamina de gypsum.',
        servicio: [
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/gypsum/gypsum1.png', tituloServicio: 'Gypsum', descServicio: ' Construcción de diseños de Gypsum para techo y paredes. material se caracteriza por una alta plasticidad, lo que permite realizar numerosas soluciones.', revers: false
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/gypsum/gypsum-ser.jpeg', tituloServicio: 'Diseño de cielo razos', descServicio: ' Cielo falso según necesidad y por encima de la estética, techo falso suspendido, placas de techo o cielo raso', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/gypsum/PAREDES-GYPSUM.jpeg', tituloServicio: ' Paredes de Gypsum', descServicio: 'Las paredes construidas con gypsum son igual de resistentes que cualquier otro muro por lo tanto son sismorresistentes y es poco probable que se rompan.', revers: false },
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/gypsum/gypsum5.png', tituloServicio: 'Techos de Gypsum', descServicio: 'Sistemas de techos en gypsum, brinda a tus espacios sensaciones de amplitud, muy útiles en los espacios con áreas reducidas.', revers: true
          },

          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/gypsum/gypsum2.png', tituloServicio: 'Decoraciones con Gypsum', descServicio: 'Decoración para paredes de salón. Decoración de interior, exterior y terraza, ideal para todo tipo de instalacion, oficinas, casas, apattamentos y locales comerciales.', revers: false },
        ]
      };

    } else if (tipoServicio === 'electricidad') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/electricidad/banner.png',
        tituloBanner: 'Electricidad residencial',
        descripcionBanner: 'Canalizaciones, Estructuras, Conductores, Accesorios, Dispositivos',
        servicio: [
          // tslint:disable-next-line: max-line-length
         
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/electricidad1.png', tituloServicio: 'Mantenimiento sistema de electrico', descServicio: 'El mantenimiento eléctrico preventivo y correctivo se refiere a la realización de inspecciones rutinarias, pruebas y servicios en el equipo eléctrico, para que se puedan detectar, reducir o suprimir problemas inminentes en dichos equipos.', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/panel.png', tituloServicio: 'Distribuición del panel hasta el interior de la casa', descServicio: 'El panel es el corazón de la instalación eléctrica, de este salen todos los conductores que alimentan los diferentes circuitos del lugar. Las funciones del panel son distribuir, controlar y proteger todos los circuitos que hayan instalados.', revers: false },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/tomas.png', tituloServicio: 'Luminarias tomas e interruptores.', descServicio: 'Revise periódicamente la instalación eléctrica de su casa, de esta manera podrá encontrar a tiempo conexiones en mal estado, interruptores defectuosos, evitará  posibles accidentes, ahorrará en el consumo de electricidad y en reparaciones de  su instalación o de sus aparatos eléctricos.', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/iluminarias.png', tituloServicio: 'Instalación de tomas y lámparas', descServicio: 'Si necesitas instalar un toma o una lámpara en tu hogar, confía en los profesionales. Te enviamos un electricista al mejor precio para conectar e instalar lámparas de techo, de pared, de bajo consumo, led, fluorescente, incandescente, para cada espacio de tu  casa.', revers: false },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/bombas.jpeg', tituloServicio: 'Instalación de sensores y bombas de agua', descServicio: 'Un pequeño interruptor de boya se mantiene flotando en el agua, marcando el punto de nivel deseado. En el momento en que el agua sobrepasa ese límite, la boya acciona el interruptor de nivel, que nos avisará de lo ocurrido', revers: true },
        ]

      };

    } else if (tipoServicio === 'ebanisteria') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/Ebanisteria/1banne.png',
        tituloBanner: 'Ebanistería',
        descripcionBanner: 'Diseñamos y fabricamos muebles para la decoracion de tu casa, apartamento, oficina y local comercial...',
        servicio: [
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/Ebanisteria/verde92-013.jpg', tituloServicio: 'Ebanistería para la remodelación de tu casa', descServicio: 'La madera es un material ligero y resistente, con el que se construyen casas seguras, bellas, cálidas, confortables y muy acogedoras.', revers: false
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/Ebanisteria/apto.png', tituloServicio: 'Fabricamos muebles para la decoración de tu apartamento', descServicio: 'Un mueble inadecuado puede perjudicar una buena decoración.Por el contrario, uno bien elegido realza la decoración y define el estilo de la habitación. Te ayudan a crear el estilo, organizar el espacio, y asi llevar una vida más confortable', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/Ebanisteria/oficina.jpg', tituloServicio: 'Muebles para Oficina', descServicio: 'Diseñamos y fabricamos muebles a mano, con madera de la mejor calidad.', revers: false },
          { imgServicio: '../../../assets/servicios//Ebanisteria/madera4.png', tituloServicio: 'Armarios para cocina', descServicio: 'Lo primero que debemos saber es que los muebles determinan el estilo de una cocina y es que estamos ante uno de sus elementos más importantes. Cuando hablamos de mobiliario de cocina nos referimos a mesa, sillas o encimera, aunque existen muchos complementos que también pueden tener cabida en la cocina', revers: true },
          { imgServicio: '../../../assets/servicios/Ebanisteria/restaura.png', tituloServicio: 'Restauración de muebles', descServicio: 'Gracias a nuestra reparación, conseguirás una pieza única totalmente funcional y decorativa. Los muebles que una vez fueron nuevos, van envejecimiento poco a poco. El paso del tiempo también hace mella en ellos.', revers: false },
   
        ]

      };

    } else if ((tipoServicio !== 'remodelacion') && (tipoServicio !== 'vidrio-aluminio') && (tipoServicio !== 'gypsum') && (tipoServicio !== 'electricidad') && (tipoServicio !== 'ebanisteria')) {
      this.router.navigate(['/inicio']);
    }

  }

}
