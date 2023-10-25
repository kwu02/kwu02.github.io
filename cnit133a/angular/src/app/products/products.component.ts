import { Component } from '@angular/core';
import productData from '../products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  title = 'Angular-JSON';
  Products: any = productData;
}
