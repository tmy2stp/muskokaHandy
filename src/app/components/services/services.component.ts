import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @ViewChild('imageDialog') imageDialog!: TemplateRef<any>;
  constructor(private dialog: MatDialog) { }

  openImage(imageUrl: string) {
    this.dialog.open(this.imageDialog, {
      data: imageUrl,
      panelClass: 'image-modal'
    });
  }


  selectedTab = 0;
  galleries = {
    interior: ['interior1.jpg', 'interior2.jpg', 'interior3.jpg', 'interior4.jpg', 'interior5.jpg'],
    exterior: ['exterior1.jpg', 'exterior2.jpg', 'exterior3.jpg', 'exterior4.jpg', 'exterior5.jpg'],
    contracting: ['contracting1.jpg', 'contracting2.jpg', 'contracting3.jpg', 'contracting4.jpg', 'contracting5.jpg'],
    selling: ['selling1.jpg', 'selling2.jpg', 'selling3.jpg', 'selling4.jpg', 'selling5.jpg']
  };
}
