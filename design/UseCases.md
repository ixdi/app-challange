# Use Cases

All use cases requires an authenticated user.

## Queries

- Restricted to authenticated users

- GetProductsList
  - Required fields: ``
- GetOrderById
  - Required fields: `orderId`
- GetOrdersList
  - Required fields: `userId`

## Commands

- Restricted to authenticated users

- AccountSignup
  - Required fields: `email`, `password`, `name`
- AccountSignin
  - Required fields: `email`, `password`
- ShoppingCartAddProduct
  - Required fields: `shoppingCartId`, `productId`
- ShoppingCartRemoveProduct
  - Required fields: `shoppingCartId`, `productId`
- ShoppingCartClean
  - Required fields: `shoppingCartId`
- OrderCreateFromShoppingCart
  - Required fields: `orderId`, `shoppingCartId`, `deliveryAddress`, `date`, `state`
- ProductAdd
  - Required fields: `productId`, `name`, `description`, `price`
  - Restricted to admin users
- OrderChangeStatus
  - Required fields: `orderId`, `status`
  - Restricted to admin users
