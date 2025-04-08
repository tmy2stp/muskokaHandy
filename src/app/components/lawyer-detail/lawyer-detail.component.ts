import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lawyer-detail',
  standalone: false,
  templateUrl: './lawyer-detail.component.html',
  styleUrls: ['./lawyer-detail.component.scss']
})
export class LawyerDetailComponent implements OnInit {
  lawyerId: number = 0;
  name = '';
  title = '';
  bio = '';
  photo = '';

  ngOnInit() {
    this.lawyerId = Number(this.route.snapshot.paramMap.get('id'));
    const bios: any = {
      1: {
        name: 'Jimmy Gangadin',
        title: 'Founder, Paralegal',
        bio: 'Experienced in civil litigation and family law. Jimmy is committed to helping clients navigate complex cases with confidence.',
        photo: 'assets/lawyer1.jpg'
      },
      2: {
        name: 'Omar Rambhajan',
        title: 'Senior Paralegal',
        bio: 'Specializes in real estate and business contracts. Omar brings precision and depth to every matter he handles.',
        photo: 'assets/lawyer2.jpg'
      },
      3: {
        name: 'Sarah Vaz',
        title: 'Human Rights Paralegal',
        bio: 'Focuses on immigration and human rights law. Darah is passionate about equity and access to justice.',
        photo: 'assets/lawyer3.jpg'
      }
    };
    const profile = bios[this.lawyerId];
    if (profile) {
      this.name = profile.name;
      this.title = profile.title;
      this.bio = profile.bio;
      this.photo = profile.photo;
    }
  }

  constructor(private route: ActivatedRoute) {}

}
