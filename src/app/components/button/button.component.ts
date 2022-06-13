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

  onClick(e:any) { // Emits an event, to be caught by the button's parent component to call some function
    e.preventDefault();
    this.buttonClick.emit();
  }
}
