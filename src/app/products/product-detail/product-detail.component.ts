import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Product Details ';
  myProduct:IProduct|undefined;
  sub!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.pageTitle = this.pageTitle + `: ${Number(this.route.snapshot.paramMap.get('id'))}`;
    this.sub = this.productService.getProductById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(
      {
        next: 
          prod => {
            this.myProduct = prod
          }
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
    this.sub.unsubscribe();
  }
}
