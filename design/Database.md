# Database

## Collections and fields

- Users
  - `userId`: uuid
  - `email`: string
  - `password`: string
  - `name`: string
  - `role`: CLIENT | ADMIN
  - `createdAt`: date
  - `updatedAt`: date

- Products
  - `productId`: uuid
  - `name`: string
  - `description`: string
  - `price`: number
  - `currency`: EUR | USD
  - `createdAt`: date
  - `updatedAt`: date

- ShoppingCarts
  - `shoppingCartId`: uuid
  - `userId`: *uuid*
  - `productsIds`: *[productId]*
  - `quantity`: number
  - `orderedAt`: date
  - `createdAt`: date
  - `updatedAt`: date

- Orders
  - `orderId`: uuid
  - `userId`: *uuid*
  - `shoppingCartId`: *shoppingCartId*
  - `deliveryAddress`: string
  - `date`: date
  - `state`: PENDING | CANCELED | PROCESSING | COMPLETED
  - `createdAt`: date
  - `updatedAt`: date
