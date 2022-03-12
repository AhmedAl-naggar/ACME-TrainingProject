import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "../product";
import { ProductService } from "../product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

    pageTitle: string = 'Product List';
    products: IProduct[] = [];
    imageWidth = 30;
    imageHight = 30;
    showImage = false;
    errorMessage = '';
    sub:Subscription | undefined

    private _filterList = "";
    get filterList() {
        return this._filterList;
    }
    set filterList(value: string) {
        this._filterList = value;
        console.log("The value is set to : " + this.filterList);
        this.filteredList = this.performeListFilter(this.filterList);
    }

    filteredList: IProduct[] = [];
    
    constructor(private productService: ProductService) {
    }
    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.filterList = "";
        this.sub = this.productService.getProducts().subscribe({
            next:
                products => {
                    this.products = products
                    this.filteredList = this.performeListFilter(this.filterList);
                },
            error: err => this.errorMessage = err
        }
        );
    }
    performeListFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product: IProduct) =>
                product.productName
                    .toLocaleLowerCase()
                    .includes(filterBy)
        )
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
    
}


