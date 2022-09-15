import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  slideIndex: number = 1;
  cconstructor() { }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }
  
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }
  
  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        //slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //slides[this.slideIndex-1].display = "block";
    dots[this.slideIndex-1].className += " active";
   // captionText.innerHTML = dots[this.slideIndex-1].alt;
  }
}
