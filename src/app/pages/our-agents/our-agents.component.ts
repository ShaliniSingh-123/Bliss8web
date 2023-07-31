import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentProfileDetailsService } from 'src/app/services/agentprofile/agent-profile-details.service';

@Component({
  selector: 'app-our-agents',
  templateUrl: './our-agents.component.html',
  styleUrls: ['./our-agents.component.scss'],
})
export class OurAgentsComponent implements OnInit {
  agentList: any = [];
  constructor(
    private route: Router,
    public agentProfileDetailsService: AgentProfileDetailsService
  ) {}

  ngOnInit(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    this.agentProfileDetailsService.getAllAgents().subscribe({
      next: (res: any) => {
        this.agentList = res;
        
      },
      error: (err: any) => {
        
      },
    });/* .subscribe(
      (response) => {
        

        console.log('all agent details ', response);
      },
      (error) => {}
    ); */
  }
  gotoAgentDetails(id: any) {
    this.route.navigateByUrl('agent-profile-details/' + id);
  }
}
