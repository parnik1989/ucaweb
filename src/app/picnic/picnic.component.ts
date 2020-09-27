import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-picnic',
  templateUrl: './picnic.component.html',
  styleUrls: ['./picnic.component.css']
})
export class PicnicComponent implements OnInit {

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
        small: 'assets/images/picnic/picnic1.jpg',
        medium: 'assets/images/picnic/picnic1.jpg',
        big: 'assets/images/picnic/picnic1.jpg'
      },
      {
        small: 'assets/images/picnic/picnic2.jpg',
        medium: 'assets/images/picnic/picnic2.jpg',
        big: 'assets/images/picnic/picnic2.jpg'
      },
      {
        small: 'assets/images/picnic/picnic3.jpg',
        medium: 'assets/images/picnic/picnic3.jpg',
        big: 'assets/images/picnic/picnic3.jpg'
      },
      {
        small: 'assets/images/picnic/picnic4.jpg',
        medium: 'assets/images/picnic/picnic4.jpg',
        big: 'assets/images/picnic/picnic4.jpg'
      },
      {
        small: 'assets/images/picnic/picnic5.jpg',
        medium: 'assets/images/picnic/picnic5.jpg',
        big: 'assets/images/picnic/picnic5.jpg'
      }
    ];
  }

}
