import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '100%',
        height: '800px',
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
        small: 'assets/images/gallery/DP30.jpg',
        medium: 'assets/images/gallery/DP30.jpg',
        big: 'assets/images/gallery/DP30.jpg'
      },
      {
        small: 'assets/images/gallery/DP31.jpg',
        medium: 'assets/images/gallery/DP31.jpg',
        big: 'assets/images/gallery/DP31.jpg'
      },
      {
        small: 'assets/images/gallery/DP32.jpg',
        medium: 'assets/images/gallery/DP32.jpg',
        big: 'assets/images/gallery/DDP32P1.jpg'
      },
      {
        small: 'assets/images/gallery/DP33.jpg',
        medium: 'assets/images/gallery/DP33.jpg',
        big: 'assets/images/gallery/DP33.jpg'
      },
      {
        small: 'assets/images/gallery/DP34.jpg',
        medium: 'assets/images/gallery/DP34.jpg',
        big: 'assets/images/gallery/DP34.jpg'
      },
      {
        small: 'assets/images/gallery/DP35.jpg',
        medium: 'assets/images/gallery/DP35.jpg',
        big: 'assets/images/gallery/DP35.jpg'
      },
      {
        small: 'assets/images/gallery/DP1.jpg',
        medium: 'assets/images/gallery/DP1.jpg',
        big: 'assets/images/gallery/DP1.jpg'
      },
      {
        small: 'assets/images/gallery/DP2.jpg',
        medium: 'assets/images/gallery/DP2.jpg',
        big: 'assets/images/gallery/DP2.jpg'
      },
      {
        small: 'assets/images/gallery/DP3.jpg',
        medium: 'assets/images/gallery/DP3.jpg',
        big: 'assets/images/gallery/DP3.jpg'
      },
      {
        small: 'assets/images/gallery/DP4.jpg',
        medium: 'assets/images/gallery/DP4.jpg',
        big: 'assets/images/gallery/DP4.jpg'
      },
      {
        small: 'assets/images/gallery/DP5.jpg',
        medium: 'assets/images/gallery/DP5.jpg',
        big: 'assets/images/gallery/DP5.jpg'
      },
      {
        small: 'assets/images/gallery/DP6.jpg',
        medium: 'assets/images/gallery/DP6.jpg',
        big: 'assets/images/gallery/DP6.jpg'
      },
      {
        small: 'assets/images/gallery/DP7.jpg',
        medium: 'assets/images/gallery/DP7.jpg',
        big: 'assets/images/gallery/DP7.jpg'
      },
      {
        small: 'assets/images/gallery/DP8.jpg',
        medium: 'assets/images/gallery/DP8.jpg',
        big: 'assets/images/gallery/DP8.jpg'
      },
      {
        small: 'assets/images/gallery/DP9.jpg',
        medium: 'assets/images/gallery/DP9.jpg',
        big: 'assets/images/gallery/DP9.jpg'
      },
      {
        small: 'assets/images/gallery/DP10.jpg',
        medium: 'assets/images/gallery/DP10.jpg',
        big: 'assets/images/gallery/DP10.jpg'
      },
      {
        small: 'assets/images/gallery/DP11.jpg',
        medium: 'assets/images/gallery/DP11.jpg',
        big: 'assets/images/gallery/DP11.jpg'
      },
      {
        small: 'assets/images/gallery/DP12.jpg',
        medium: 'assets/images/gallery/DP12.jpg',
        big: 'assets/images/gallery/DP12.jpg'
      },
      {
        small: 'assets/images/gallery/DP13.jpg',
        medium: 'assets/images/gallery/DP13.jpg',
        big: 'assets/images/gallery/DP13.jpg'
      },
      {
        small: 'assets/images/gallery/DP14.jpg',
        medium: 'assets/images/gallery/DP14.jpg',
        big: 'assets/images/gallery/DP14.jpg'
      },
      {
        small: 'assets/images/gallery/DP15.jpg',
        medium: 'assets/images/gallery/DP15.jpg',
        big: 'assets/images/gallery/DP15.jpg'
      },
      {
        small: 'assets/images/gallery/DP16.jpg',
        medium: 'assets/images/gallery/DP16.jpg',
        big: 'assets/images/gallery/DP16.jpg'
      },
      {
        small: 'assets/images/gallery/DP17.jpg',
        medium: 'assets/images/gallery/DP17.jpg',
        big: 'assets/images/gallery/DP17.jpg'
      },
      {
        small: 'assets/images/gallery/DP18.jpg',
        medium: 'assets/images/gallery/DP18.jpg',
        big: 'assets/images/gallery/DP18.jpg'
      },
      {
        small: 'assets/images/gallery/DP19.jpg',
        medium: 'assets/images/gallery/DP19.jpg',
        big: 'assets/images/gallery/DP19.jpg'
      },
      {
        small: 'assets/images/gallery/DP20.jpg',
        medium: 'assets/images/gallery/DP20.jpg',
        big: 'assets/images/gallery/DP20.jpg'
      },
      {
        small: 'assets/images/gallery/DP21.jpg',
        medium: 'assets/images/gallery/DP21.jpg',
        big: 'assets/images/gallery/DP21.jpg'
      },
      {
        small: 'assets/images/gallery/DP22.jpg',
        medium: 'assets/images/gallery/DP22.jpg',
        big: 'assets/images/gallery/DP22.jpg'
      },
      {
        small: 'assets/images/gallery/DP23.jpg',
        medium: 'assets/images/gallery/DP23.jpg',
        big: 'assets/images/gallery/DP23.jpg'
      },
      {
        small: 'assets/images/gallery/DP24.jpg',
        medium: 'assets/images/gallery/DP24.jpg',
        big: 'assets/images/gallery/DP24.jpg'
      },
      {
        small: 'assets/images/gallery/DP25.jpg',
        medium: 'assets/images/gallery/DP25.jpg',
        big: 'assets/images/gallery/DP25.jpg'
      },
      {
        small: 'assets/images/gallery/DP26.jpg',
        medium: 'assets/images/gallery/DP26.jpg',
        big: 'assets/images/gallery/DP26.jpg'
      }
    ];
  }
}
