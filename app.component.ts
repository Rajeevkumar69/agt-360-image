import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Agt360imageViewComponent, RotateImage } from 'agt360image-view';
import ImageZoom from 'js-image-zoom'; // Assuming you've installed js-image-zoom and its types

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Agt360imageViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'agt-image';

  width = 700;
  height = 500;
  autoroatate: RotateImage = {
    isRotate: true,
    rotateSpeed: 0.5,
  };

  constructor() {}

  ngOnInit(): void {
    const options = {
      width: 400,
      zoomWidth: 500,
      offset: { vertical: 0, horizontal: 10 },
    };

    // Get the element by id
    const imgContainer = document.getElementById('img-container');

    // Check if the element exists
    if (imgContainer instanceof HTMLElement) {
      // Initialize ImageZoom if the element exists
      const imageZoom = new ImageZoom(imgContainer, options);
    } else {
      console.error("Element with id 'img-container' not found.");
    }
  }
}
