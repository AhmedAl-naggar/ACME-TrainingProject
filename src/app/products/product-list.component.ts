import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    products: IProduct[] = [];
    imageWidth = 30;
    imageHight = 30;
    showImage = false;

    private _filterList = "";
    get filterList(){
        return this._filterList;
    }
    set filterList(value: string){
        this._filterList = value;
        console.log("The value is set to : " + this.filterList);
        this.filteredList = this.performeListFilter(this.filterList);
    }

    filteredList: IProduct[] = [];

    /**
     *
     */
    constructor(private productService: ProductService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        console.log('OnInit implemented');
        console.log('products list is filled');
        this.filterList = "Cart";
        this.products = this.productService.getProducts();
       // this.filteredList = this.performeListFilter(this.filterList);
    }
    performeListFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product:IProduct)=> 
            product.productName
            .toLocaleLowerCase()
            .includes(filterBy)
        )
    }

    onRatingClicked(message: string):void{
        this.pageTitle = 'Product List: ' + message;
    }
}


