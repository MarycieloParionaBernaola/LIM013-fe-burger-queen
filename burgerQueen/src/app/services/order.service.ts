import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderItem } from '../models/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public orderItemsSource: BehaviorSubject<OrderItem[]> = new BehaviorSubject<OrderItem[]>([]);
  orderItems = this.orderItemsSource.asObservable();

  constructor() { }

  getItem (product: any) {
    let itemArr: OrderItem[] = [];
    itemArr.push({
        productId: product[0].id,
        productCategory: product[0].category,
        productSubCategory: product[0].subcategory,
        productName: product[0].name,
        units: 1,
        unitPrice: product[0].price,
        subTotalPrice: product[0].price,
        extraProducts: []
      })
    this.orderItemsSource.next(itemArr);
    console.log(this.orderItemsSource.getValue());
  }

}


