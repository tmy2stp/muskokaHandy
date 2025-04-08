import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  standalone: false,
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent {
    expertise = [
      { icon: 'handyman', label: 'General Contracting' },
      { icon: 'plumbing', label: 'Plumbing' },
      { icon: 'home_repair_service', label: 'Home Repair' },
      { icon: 'carpenter', label: 'Light Carpentry' },
      { icon: 'real_estate_agent', label: 'Preparing To Sell' },
      { icon: 'forklift', label: 'Forklifting' }
    ];

}
