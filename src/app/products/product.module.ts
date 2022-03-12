import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { PoductDetailGuard } from './product-detail/poduct-detail.guard';
import { ShareModule } from '../shared/share.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    ShareModule,
    RouterModule.forChild(
      [
        {
          path: 'products',
          component: ProductListComponent
        },
        {
          path: 'products/:id',
          canActivate: [
            PoductDetailGuard
          ],
          component: ProductDetailComponent
        }
      ]
    )
  ],
  exports:[]
})
export class ProductModule { }
