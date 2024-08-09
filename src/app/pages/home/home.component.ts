import { AfterViewInit, Component } from '@angular/core';
declare var Swiper: any;  // Declare Swiper globally
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {


  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      speed: 2000,
      breakpoints: {
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }
}
