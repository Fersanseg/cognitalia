import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-rows-textblock',
  templateUrl: './two-rows-textblock.component.html',
  styleUrls: ['./two-rows-textblock.component.scss']
})
export class TwoRowsTextblockComponent implements OnInit {
  @Input() firstRow!:string;
  @Input() secondRow!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
