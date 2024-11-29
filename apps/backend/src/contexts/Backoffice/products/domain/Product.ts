import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { ProductId } from '@Shared/domain/ProductId';
import { ProductDescription } from './ProductDescription';
import { ProductName } from './ProductName';
import { ProductPrice } from './ProductPrice';

export class Product extends AggregateRoot {
  readonly productId: ProductId;
  readonly name: ProductName;
  readonly description: ProductDescription;
  readonly price: ProductPrice;

  constructor(plainData: { productId: string, name: string, description: string, price: number }) {
    super();
    this.productId = new ProductId(plainData.productId);
    this.name = new ProductName(plainData.name);
    this.description = new ProductDescription(plainData.description);
    this.price = new ProductPrice(plainData.price);
  }

  static fromPrimitives(plainData: { productId: string; name: string; description: string, price: number }): Product {
    return new Product(plainData);
  }

  toPrimitives(): object {
    return {
      id: this.productId.value,
      name: this.name.value,
      description: this.description.value,
      price: this.price.value
    };
  }
}
