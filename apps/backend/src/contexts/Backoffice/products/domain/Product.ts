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

  constructor(productId: ProductId, name: ProductName, description: ProductDescription, price: ProductPrice) {
    super();
    this.productId = productId;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  static create(productId: ProductId, name: ProductName, description: ProductDescription, price: ProductPrice): Product {
    const course = new Product(productId, name, description, price);
    return course;
  }
  static fromPrimitives(plainData: { productId: string; name: string; description: string, price: number }): Product {
    return new Product(
      new ProductId(plainData.productId),
      new ProductName(plainData.name),
      new ProductDescription(plainData.description),
      new ProductPrice(plainData.price)
    );
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
