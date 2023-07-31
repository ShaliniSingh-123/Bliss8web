import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'agent-details-card',
  templateUrl: './agent-details-card.component.html',
  styleUrls: ['./agent-details-card.component.scss']
})
export class AgentDetailsCardComponent implements OnInit {
  @Input() agentName: any = '';
  @Input() specialization: any = '';
  @Input() phoneno: any = '';
  @Input() photo: any = '';
  @Output() onclicked = new EventEmitter();
  agentPhotoUrl: string = environment.agentProfileHost

  constructor() { }

  ngOnInit(): void {
  }

}
