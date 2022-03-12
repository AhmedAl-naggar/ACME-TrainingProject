import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError} from "rxjs/operators";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    private endpoint = "api/products/products.json"

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.endpoint);
    }

    getProductById(id: number): Observable<any> {
        return this.http.get<IProduct>(this.endpoint + 'products/' + id).pipe(
            catchError(this.errorHandeler)
        );
    }


    addProduct(product: any): Observable<any> {
        return this.http.post(this.endpoint + 'products', product).pipe(
            catchError(this.errorHandeler)
        );
    }

    updateProduct(id: string, product: IProduct): Observable<any> {
        return this.http.put<IProduct>(this.endpoint + 'products/' + id, product).pipe(
            catchError(this.errorHandeler)
        );
    }

    deleteProduct(id: string): Observable<any> {
        return this.http.delete<IProduct>(this.endpoint + 'products/' + id).pipe(
            catchError(this.errorHandeler)
        );
    }

    errorHandeler(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured : ${err.error.message}`;
        } else {

            errorMessage = `Server returned code : ${err.status}, error message is  ${err.error.message}`;
        }
        console.log(errorMessage);

        return throwError(() => new Error(errorMessage));
    }
}