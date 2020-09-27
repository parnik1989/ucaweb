import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-smile',
  templateUrl: './smile.component.html',
  styleUrls: ['./smile.component.css']
})
export class SmileComponent implements OnInit {

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
                small: 'assets/images/aayna/aayna1.jpg',
                medium: 'assets/images/aayna/aayna1.jpg',
                big: 'assets/images/aayna/aayna1.jpg'
            },
            {
                small: 'assets/images/aayna/aayna2.jpg',
                medium: 'assets/images/aayna/aayna2.jpg',
                big: 'assets/images/aayna/aayna2.jpg'
            },
            {
                small: 'assets/images/aayna/aayna3.jpg',
                medium: 'assets/images/aayna/aayna3.jpg',
                big: 'assets/images/aayna/aayna3.jpg'
            },
            {
                small: 'assets/images/aayna/aayna4.jpg',
                medium: 'assets/images/aayna/aayna4.jpg',
                big: 'assets/images/aayna/aayna4.jpg'
            },
            {
                small: 'assets/images/aayna/aayna5.jpg',
                medium: 'assets/images/aayna/aayna5.jpg',
                big: 'assets/images/aayna/aayna5.jpg'
            },
            {
                small: 'assets/images/aayna/aayna6.jpg',
                medium: 'assets/images/aayna/aayna6.jpg',
                big: 'assets/images/aayna/aayna6.jpg'
            },
            {
                small: 'assets/images/aayna/aayna7.jpg',
                medium: 'assets/images/aayna/aayna7.jpg',
                big: 'assets/images/aayna/aayna7.jpg'
            }
        ];
    }

}
