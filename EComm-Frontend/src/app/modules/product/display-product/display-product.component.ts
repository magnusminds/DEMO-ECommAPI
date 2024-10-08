import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product/product.service';
import { RoutingUrls } from '../../../constant/routing-url';
import { Router } from '@angular/router';
import { ProductInterface } from '../../../models/product/product.model';

@Component({
  selector: 'app-display-product',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './display-product.component.html',
  providers: [ProductService]
})
export class DisplayProductComponent implements OnInit {

  productList?: ProductInterface[];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe({
      complete: () => {
      },
      next: (res: any) => {
        
        this.productList = res;
      },
      error: (err) => {
        

      }
    })
  }

  addProduct() {
    this.router.navigateByUrl(RoutingUrls.ADD_PRODUCT);
  }

  addUser(){
    this.router.navigateByUrl(RoutingUrls.ADD_USER);
  }

}
