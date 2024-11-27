# Node challenge

This coding challenge consists of building a small and comprehensive retail web solution
with a client-facing web application for managing products and orders.
The idea is to validate proficiency in JavaScript for both frontend and backend development,
real-world software industry expertise and skills, and determine your capacity to grasp and execute business requirements effectively.

## 🚀 Applications

You should implement 2 main software services:

- A backend service to handle users, products and orders.
- A client webapp to browse products, add to a shopping cart and simulate a checkout process.

## 📋 Business requirements

- Users can sign up and login through the webapp.
- Users have name, email and password properties.
- Users can list the products catalog in the webapp.
- A product can be added to the system.
- A product have name, description and price properties.
- Users can add or remove products to the shopping cart.
- Products can be added to the shopping cart more than once.
- Shopping carts expirte after 5 minutes.
- Users can place orders via a checkout process.
- The checkout process begins by reviewing the products added to the shopping cart, then users enter a delivery address and click to place your order.
- An order has id, date, products with quantities, state and delivery address.
- An order state can be PENDING, CANCELED, PROCESSING or COMPLETED.
- Users can list their orders with their status through the webapp.
- An order state can be changed

## 📐 High level software requirements●

- Structure the project as a Javascript monorepo, containing client and server codebases.
- Use the frameworks or libraries that you deem necessary for your project on both frontend and backend applications.
  - Bear in mind that it is preferable to use only the necessary dependencies and avoid their excessive usage.
- Avoid as much as possible custom toolings and use industry standard patterns and dependencies.
- Use an strong authentication policy to access webapp.
- System should be able to run locally.
- Provide documentation on how to start project locally.
- Provide any additional documentation that you think is necessary.

## 🖊️ Administration

As an admin panel webapp is not required, some operations should be performed via endpoints,
like:

- Add a product.
- Change an order state.

## 💡 Suggestions

- Reuse JS modules, services, data models or UI components through different webapps.
- Use JWT token for authentication.
- Differenciate between client and admin. api endpoints.
- Use an API key for the admin endpoints.
- Use the database system you think suites better the use case.
- Use typescript.
- On the webapp, keep the UI clean and intuitive.
- Add some tests to cover most important use cases.

## 💰 Bonus

- Intuitive UX/UI on customer webapp.
- Postman collection to perform administrative tasks (add products, change order state, etc).
- Add images to the products.
- Add stock inventory feature.
- Add e2e covering products creation and orders placements.
- Add a product search feature on the webapp with api endnpoint integration.
- CI/CD, docker.
- Feel free to add extra features or requirements you think can be useful. If you do, please document them.
