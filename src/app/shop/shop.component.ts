import { Component , OnInit} from '@angular/core';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any = [];
  constructor(
    private productsService: ProductsService,
  ){}

  ngOnInit(){
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
