import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'boxy-button',
  templateUrl: './button-boxy.component.html',
  styleUrls: ['./button-boxy.component.scss']
})
export class ButtonBoxyComponent implements OnInit {
  @Input() iconname: any = '';
  @Input() buttonText: any = '';
  @Output() onclicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
