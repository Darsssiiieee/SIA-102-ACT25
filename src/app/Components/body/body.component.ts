import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  currentIndex: number; // Start with the first content
  current: number;
  contents: any[];
  names: any[];
  slides: string[];
  i: number;
  
  constructor(private sanitizer: DomSanitizer) {
    this.i = 0;
    this.currentIndex = 0;
    this.current = 0;
    this.slides = [
      'https://wallpapercave.com/wp/wp5798030.jpg',
      'https://www.hdwallpapers.in/download/monkey_d__luffy_gear_5_hd_one_piece_2-1920x1080.jpg',
      'https://wallpapercave.com/wp/wp2458373.jpg',
      'https://64.media.tumblr.com/fc0759eedd7b2c2b481a575b1f9cc445/a88d3a6435651e00-56/s1280x1920/5779d3492d92f07dc417ac4683b37be98b4b4f11.jpg',
      'https://images7.alphacoders.com/418/418724.png',
      'https://i.pinimg.com/originals/13/8c/7b/138c7be65508ba6a73645b2b6f463c06.jpg',
    ];
    this.names = [
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="name">
          <div class="name">FairyTail</div>
        </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="name">
          <div class="name">OnePiece</div>
        </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="name">
          <div class="name">Sword Art Online</div>
        </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="name">
          <div class="name">Spy x Family</div>
        </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="name">
          <div class="name">Attack on Titan</div>
        </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="name">
          <div class="name">DemonSlayer</div>
        </div>`
      ),
    ]
    this.contents = [
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="content">
          <div class="des">Written by: Hiro Mashima</div>
          <div class="des">August 2, 2006 – July 26, 2017</div>
        </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="content">
          <div class="des">Written by :	Eiichiro Oda</div>
				  <div class="des">July 22, 1997 – present</div>
         </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="content">
          <div class="des">Written by :	Reki Kawahara</div>
					<div class="des">	2002 – 2008</div>
        </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="content">
          <div class="des">Written by :	Tatsuya Endo</div>
					<div class="des">	March 25, 2019 – present</div>
        </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="content">
          <div class="des">Written by :	Hajime Isayama</div>
					<div class="des">September 9, 2009 – April 9, 2021</div>
        </div>`
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        `<div class="content">
          <div class="des">Written by :	Koyoharu Gotouge</div>
					<div class="des">February 15, 2016 – May 18, 2020</div>
        </div>`
      ),
    ];
  }
  getSlide() {
    return this.slides[this.i];
  }
  get currentContent() {
    return this.contents[this.currentIndex]; // Get the content based on the current index
  }
  get currentName() {
    return this.names[this.current]; // Get the name based on the current
  }
  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
    this.current== 0 ? ( this.current= this.names.length - 1 ): this.current-- ;
    this.currentIndex == 0 ? ( this.currentIndex = this.contents.length - 1 ): this.currentIndex-- ;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
    this.current < this.names.length - 1 ? this.current++ : (this.current = 0);
    this.currentIndex < this.contents.length - 1 ? this.currentIndex++ : (this.currentIndex = 0);
   
  }
}
