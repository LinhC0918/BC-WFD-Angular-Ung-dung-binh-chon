import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  background_color = '#000000';
  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.background_color = value;
  }

}
