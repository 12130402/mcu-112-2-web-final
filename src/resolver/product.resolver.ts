import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Product } from '../../product';
import { ProductService } from '../app/services/product.service';

export const productResolver: ResolveFn<Product> = (route, state, productService = inject(ProductService)) => {
  const id = +route.paramMap.get('id')!;
  return productService.getById(id);
};
