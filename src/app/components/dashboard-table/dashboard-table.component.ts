import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  id: number;
  budget: any;
  Assigned: string;
  status: string;
  actions: any;
  time: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { id: 45227, name: 'Mohammad Imran', time: '1 hour ago', budget: 'N/A', Assigned: 'Ahmad Alhourani', status: 'New', actions: '/assets/images/three-dots-vertical.svg' },
  { id: 45227, name: 'Mohammad Imran', time: '1 hour ago', budget: 'N/A', Assigned: 'Ahmad Alhourani', status: 'New', actions: '/assets/images/three-dots-vertical.svg' },
  { id: 45227, name: 'Mohammad Imran', time: '1 hour ago', budget: 'N/A', Assigned: 'Ahmad Alhourani', status: 'New', actions: '/assets/images/three-dots-vertical.svg' },
  { id: 45227, name: 'Mohammad Imran', time: '1 hour ago', budget: 'N/A', Assigned: 'Ahmad Alhourani', status: 'New', actions: '/assets/images/three-dots-vertical.svg' },
  { id: 45227, name: 'Mohammad Imran', time: '1 hour ago', budget: 'N/A', Assigned: 'Ahmad Alhourani', status: 'New', actions: '/assets/images/three-dots-vertical.svg' },
  { id: 45227, name: 'Mohammad Imran', time: '1 hour ago', budget: 'N/A', Assigned: 'Ahmad Alhourani', status: 'New', actions: '/assets/images/three-dots-vertical.svg' },
];

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'budget', 'Assigned', 'status', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
