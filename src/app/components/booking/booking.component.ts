import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;

    const base = document.location.protocol === 'https:' 
    ? 'https://www.markate.com/public/widget/contact/js' 
    : 'http://www.markate.com/public/widget/contact/js';

  const ref = encodeURIComponent(window.location.href);
  const t = Math.random() * 10000000000000000;
  
  script.src = `${base}?id=3d3c644624c5091be612cd4caa6078be:61166:ae5ed264&ref=${ref}&t=${t}`;
  
  const target = document.getElementById('markate-widget-contact');
  if (target?.parentNode) {
    target.parentNode.insertBefore(script, target);
  }
}

}
