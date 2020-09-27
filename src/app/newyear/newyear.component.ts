import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-newyear',
  templateUrl: './newyear.component.html',
  styleUrls: ['./newyear.component.css']
})
export class NewyearComponent implements OnInit {

  constructor() { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/newyear/ny1.jpg',
        medium: 'assets/images/newyear/ny1.jpg',
        big: 'assets/images/newyear/ny1.jpg'
      },
      {
        small: 'assets/images/newyear/ny2.jpg',
        medium: 'assets/images/newyear/ny2.jpg',
        big: 'assets/images/newyear/ny2.jpg'
      },
      {
        small: 'assets/images/newyear/ny3.jpg',
        medium: 'assets/images/newyear/ny3.jpg',
        big: 'assets/images/newyear/ny3.jpg'
      },
      {
        small: 'assets/images/newyear/ny4.jpg',
        medium: 'assets/images/newyear/ny4.jpg',
        big: 'assets/images/newyear/ny4.jpg'
      }
    ];
  }

}
