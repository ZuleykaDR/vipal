import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() nombreServicio;
  public imagenesCarousel = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.nombreServicio);
    this.manejoCarousel();
  }

  manejoCarousel() {
    switch (this.nombreServicio) {
      case 'vidrio-aluminio':
        this.imagenesCarousel.push({
          img: '../../../assets/Carousel vidrio-Alum-Carou/aluminio1.png',
          active: 'active',
          titulo: 'Titulo1',
          descripcion: 'descripcion'
        });
        this.imagenesCarousel.push({
          img: '../../../assets/Carousel vidrio-Alum-Carou/vidrio..png',
          active: '',
          titulo: 'Titulo2',
          descripcion: 'descripcion'
        });
        this.imagenesCarousel.push({
          img: '../../../assets/Carousel vidrio-Alum-Carou/vidrio-pren.png',
          active: '',
          titulo: 'Titulo3',
          descripcion: 'descripcion'
        });
        break;

        case 'remodelacion':
          this.imagenesCarousel.push({
            img: '../../../assets/Carousel-Remodelaciones/pexels-max-vakhtbovych-6312362.png',
            active: 'active',
            titulo: 'Titulo1',
            descripcion: 'descripcion'
          });
          this.imagenesCarousel.push({
            img: '../../../assets/Carousel-Remodelaciones/remodel2.png',
            active: '',
            titulo: 'Titulo2',
            descripcion: 'descripcion'
          });
          this.imagenesCarousel.push({
            img: '../../../assets/Carousel-Remodelaciones/remod3.png',
            active: '',
            titulo: 'Titulo3',
            descripcion: 'descripcion'
          });
          break;

          
        case 'gypsum':
          this.imagenesCarousel.push({
            img: '../../../assets/Carousel-Gypsum/office-730681_1920.png',
            active: 'active',
            titulo: 'Titulo1',
            descripcion: 'descripcion'
          });
          this.imagenesCarousel.push({
            img: '../../../assets/Carousel-Gypsum/gypsum0.png',
            active: '',
            titulo: 'Titulo2',
            descripcion: 'descripcion'
          });
          this.imagenesCarousel.push({
            img: '../../../assets/Carousel-Gypsum/pexels-max-vakhtbovych-7031713.png',
            active: '',
            titulo: 'Titulo3',
            descripcion: 'descripcion'
          });
          break;

          case 'electricidad':
          this.imagenesCarousel.push({
            img: '../../../assets/carouselElectricidad/corou1.png',
            active: 'active',
            titulo: 'Titulo1',
            descripcion: 'descripcion'
          });
          this.imagenesCarousel.push({
            img: '../../../assets/carouselElectricidad/elect2.png',
            active: '',
            titulo: 'Titulo2',
            descripcion: 'descripcion'
          });
          this.imagenesCarousel.push({
            img: '../../../assets/carouselElectricidad/carou3.png',
            active: '',
            titulo: 'Titulo3',
            descripcion: 'descripcion'
          });
          break;

          case 'ebanisteria':
            this.imagenesCarousel.push({
              img: '../../../assets/CarouselEbaniste/eba1.png',
              active: 'active',
              titulo: 'Titulo1',
              descripcion: 'descripcion'
            });
            this.imagenesCarousel.push({
              img: '../../../assets/CarouselEbaniste/eban4.png',
              active: '',
              titulo: 'Titulo2',
              descripcion: 'descripcion'
            });
            this.imagenesCarousel.push({
              img: '../../../assets/CarouselEbaniste/eba3.png',
              active: '',
              titulo: 'Titulo3',
              descripcion: 'descripcion'
            });
            break;
    }
    console.log(this.imagenesCarousel);
  }
}
