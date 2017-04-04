import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { IProduct } from './product';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
	  let id = +route.params['id'];
		return null;
	}
}
