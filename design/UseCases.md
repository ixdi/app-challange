# Use Cases

All use cases requires an authenticated user.

## Queries

- GetProductsList
- GetOrderById
- GetOrdersList

## Commands

- AccountSignup
  - Required fields: `email`, `password`, `name`
- AccountSignin
  - Required fields: `email`, `password`
- ShoppingCartAddProduct
  - Required fields: `productId`
- ShoppingCartRemoveProduct
  - Required fields: `productId`
- ShoppingCartClean
- OrderCreateFromShoppingCart
  - Required fields: `orderId`, `shoppingCartId`, `deliveryAddress`, `date`, `state`
- ProductAdd
  - Required fields: `name`, `description`, `price`
- OrderChangeStatus
  - Required fields: `orderId`, `status`
