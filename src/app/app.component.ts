import { Component, Renderer2 , Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ProductsService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  products: any = [];

  constructor (
    private productsService: ProductsService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
  ) {}

  ngAfterViewInit() {
    this.loadScript('../assets/js/bootstrap.bundle.min.js');
    this.loadScript('../assets/js/tiny-slider.js');
    this.loadScript('../assets/js/custom.js');
  }

  private loadScript(scriptUrl: string) {
    const scriptElement = this.renderer2.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = scriptUrl;
    scriptElement.async = true;
    scriptElement.charset = 'utf-8';
    this.renderer2.appendChild(this._document.body, scriptElement);
  }

  ngOnInit(){
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }


  title = 'proyecto-devops';
}
