import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!:string;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() { // Emits an event, to be caught by the button's parent component to call some function
    this.buttonClick.emit();
  }

}
