import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-panchami',
  templateUrl: './panchami.component.html',
  styleUrls: ['./panchami.component.css']
})
export class PanchamiComponent implements OnInit {

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
        small: 'assets/images/sarswatiPuja/SP1.jpg',
        medium: 'assets/images/sarswatiPuja/SP1.jpg',
        big: 'assets/images/sarswatiPuja/SP1.jpg'
      },
      {
        small: 'assets/images/sarswatiPuja/SP2.jpg',
        medium: 'assets/images/sarswatiPuja/SP2.jpg',
        big: 'assets/images/sarswatiPuja/SP2.jpg'
      },
      {
        small: 'assets/images/sarswatiPuja/SP3.jpg',
        medium: 'assets/images/sarswatiPuja/SP3.jpg',
        big: 'assets/images/sarswatiPuja/SP3.jpg'
      },
      {
        small: 'assets/images/sarswatiPuja/SP4.jpg',
        medium: 'assets/images/sarswatiPuja/SP4.jpg',
        big: 'assets/images/sarswatiPuja/SP4.jpg'
      },
      {
        small: 'assets/images/sarswatiPuja/SP5.jpg',
        medium: 'assets/images/sarswatiPuja/SP5.jpg',
        big: 'assets/images/sarswatiPuja/SP5.jpg'
      },
      {
        small: 'assets/images/sarswatiPuja/SP6.jpg',
        medium: 'assets/images/sarswatiPuja/SP6.jpg',
        big: 'assets/images/sarswatiPuja/SP6.jpg'
      },
      {
        small: 'assets/images/sarswatiPuja/SP7.jpg',
        medium: 'assets/images/sarswatiPuja/SP7.jpg',
        big: 'assets/images/sarswatiPuja/SP7.jpg'
      }
    ];
  }

}
