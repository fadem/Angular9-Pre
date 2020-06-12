import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../component/home/home.component';
import { ProductComponent } from '../component/product/product.component';
import { CategoryComponent } from '../component/category/category.component';
import { LoginComponent } from '../shared/login/login.component';
import { ProductService } from '../component/product/service/product.service';
import { LoginService } from '../shared/login/service/login.service';
import { CategoryService } from '../component/category/service/category.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

const routes : Routes = [
  {
      path:'category',
      component: CategoryComponent
  },
  {
      path:'product',
      component: ProductComponent,
      
  },
  {
      path:'home',
      component : HomeComponent
  }   ,
  {
    path:'**',
    component : HomeComponent
        
}  

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    LoginComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers:[
    ProductService,
    LoginService,
    CategoryService
  ]
})
export class RoutingModule { }
