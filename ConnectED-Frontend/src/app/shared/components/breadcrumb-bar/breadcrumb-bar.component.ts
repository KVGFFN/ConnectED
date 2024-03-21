import { Component, Input } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumb-bar',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb-bar.component.html',
  styleUrl: './breadcrumb-bar.component.css'
})
export class BreadcrumbBarComponent {
  @Input({required: true}) model: any;
}
