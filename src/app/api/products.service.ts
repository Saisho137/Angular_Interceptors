import { HttpClient } from '@angular/common/http';
import {
  EnvironmentInjector,
  Injectable,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '../../environments/environment';
import { Product } from '../shared/models/product.interface';
import { Observable, map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  public products = signal<Product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;

  constructor() {
    this.getAllProducts();
  }

  public getAllProducts(): Observable<any> {
    return this._http.get(`${this._endPoint}/products`);
  }
}
