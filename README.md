# Attiro1



## Project Title & Badges 🏆
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)]()
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFBA33)]()



## Description 📝
Attiro1 is a user panel project built using JavaScript, React, Node.js, and Express. It features a responsive frontend, an admin panel for product management, user authentication, shopping cart functionality, and order placement with multiple payment options. The backend uses MongoDB for data storage and Cloudinary for image management. This project aims to provide a streamlined e-commerce experience with a focus on user and administrator ease of use.



## Table of Contents 🗺️
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)
- [Footer](#footer)



## Features ✨
- **User Authentication and Registration**: Secure user account creation and login.
- **Admin Panel**: A dedicated interface for administrators to manage products.
- **Product Management**: Add, list, and remove products through the admin panel.
- **Product Listing and Display**: Showcasing available products on the frontend.
- **Shopping Cart Functionality**: Allows users to add, update, and view items in their cart.
- **Order Placement**: Supports Cash on Delivery (COD) and Stripe payment options.
- **Order Status Management**: Administrators can update and manage order statuses.
- **Responsive Frontend Design**: Ensures the application is accessible and usable on various devices.
- **Cloudinary Integration**: Utilizes Cloudinary for efficient image storage and delivery.
- **Payment Verification**: Payment verification mechanism to confirm successful transactions.
- **API Endpoints Security**: Implementation of JWT(JSON Web Token) for API authorization.



## Tech Stack 💻
- **Frontend**: React, JavaScript, Tailwind CSS, DaisyUI, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Payment**: Stripe, Razorpay
- **Image Storage**: Cloudinary
- **Other**: Axios, Cors, Dotenv, JSON Web Token, Multer, Validator



## Installation ⚙️
1.  Clone the repository:

   ```bash
   git clone https://github.com/thearyansingh/Attiro1
   cd Attiro1
   ```

2.  Navigate to the `Backend` directory:

   ```bash
   cd Backend
   ```

3.  Install backend dependencies:

   ```bash
   npm install
   ```

4.  Navigate to the `Admin` directory:

   ```bash
   cd Admin
   ```

5.  Install admin panel dependencies:

   ```bash
   npm install
   ```

6.  Navigate to the `Frontend` directory:

   ```bash
   cd Frontend
   ```

7.  Install frontend dependencies:

   ```bash
   npm install
   ```

8.  Set up environment variables:
    *   Create `.env` files in both `Backend` directories based on the structure required by the application.
   *   Ensure the following environment variables are set:
        *   `MONGO_DB`: MongoDB connection string
        *   `CLOUDINARY_NAME`: Cloudinary account name
        *   `CLOUDINARY_KEY`: Cloudinary API key
        *   `CLOUDINARY_SECRET_KEY`: Cloudinary API secret
        *   `JWTKEY`: Secret key for JSON Web Token
        *   `ADMIN_EMAIL`: Admin email for login
        *   `ADMIN_PASSWORD`: Admin password for login
        *   `STRIPE_SECRETKEY`: Stripe secret key
        *   `PORT`: Backend server port



## Usage 🚀
1.  Start the backend server:

   ```bash
   cd Backend
   npm run server   # or nodemon server.js
   ```

2.  Run the admin panel:

   ```bash
   cd Admin
   npm run dev
   ```

    Access the admin panel at `http://localhost:5174`.

3.  Run the frontend:

   ```bash
   cd Frontend
   npm run dev
   ```

    Access the frontend at `http://localhost:5173`.

4.  API Endpoints:
    *   Access the API endpoints through routes defined in `Backend/routes` (e.g., `/api/user`, `/api/product`, `/api/cart`, `/api/Orders`).
5.  Real world use cases:
    *   **E-commerce platform**: To manage products, process orders, and handle payments.
    *   **Inventory management system**: To keep track of available products and update stock levels.
    *   **Content management system**: To manage and display products on the frontend.
6.  How to Use:
    *   **Access the Admin Panel**: Navigate to the admin panel URL and log in using the admin credentials defined in the environment variables.
    *   **Add Products**: Use the admin panel to add new products, including images, descriptions, prices, and sizes.
    *   **Manage Orders**: Use the admin panel to view and update order statuses.
    *   **Browse Products**: Navigate to the frontend URL and browse available products.
    *   **Add to Cart**: Add products to your cart and proceed to checkout.
    *   **Place Order**: Fill out the delivery information form and choose a payment method to place your order.



## Project Structure 📂
```
Attiro1/
├── Admin/                     # React + Vite Admin Panel
│   ├── src/                 # Source code
│   │   ├── Components/      # React components
│   │   ├── Pages/           # Page components
│   │   ├── assets/          # Static assets (images, icons)
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # Entry point for the admin panel
│   │   └── index.css        # CSS styles
│   ├── package.json       # Admin dependencies and scripts
│   ├── vite.config.js   # Vite configuration file
│   └── tailwind.config.js # Tailwind configuration file
├── Backend/                   # Node.js + Express Backend
│   ├── Controller/          # Route handlers/controllers
│   ├── Middleware/          # Middleware functions
│   ├── Models/              # Mongoose data models
│   ├── Config/              # Configuration files (database, cloudinary)
│   ├── routes/              # API route definitions
│   ├── server.js          # Entry point for the backend
│   ├── package.json       # Backend dependencies and scripts
│   └── .env               # Environment variables
├── Frontend/                  # React + Vite Frontend
│   ├── src/                 # Source code
│   │   ├── Components/      # React components
│   │   ├── Pages/           # Page components
│   │   ├── assets/          # Static assets (images, icons)
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # Entry point for the frontend
│   │   └── index.css        # CSS styles
│   ├── package.json       # Frontend dependencies and scripts
│   ├── vite.config.js   # Vite configuration file
│   └── tailwind.config.js # Tailwind configuration file
└── README.md                # Project documentation
```



## API Reference ℹ️
The backend provides the following API endpoints:

-   `POST /api/user/login`: User login.
-   `POST /api/user/register`: User registration.
-   `POST /api/user/AdminLogin`: Admin login.
-   `POST /api/product/newProduct`: Add a new product (Admin only).
-   `GET /api/product/listProduct`: List all products.
-   `GET /api/product/singleProduct`: Get a single product.
-   `DELETE /api/product/removeProduct`: Remove a product (Admin only).
-   `POST /api/cart/addCart`: Add product to cart.
-   `GET /api/cart/getCart`: Get cart details.
-   `POST /api/cart/updateCart`: Update cart quantity.
-   `POST /api/Orders/cod`: Place order with Cash on Delivery payment method.
-   `POST /api/Orders/Stripe`: Place order with Stripe payment method.
-   `POST /api/Orders/verify`: Verify the payment.
-   `GET /api/Orders/allOrder`: Get all orders (Admin only).
-   `GET /api/Orders/userOrder`: Get user orders.
-   `POST /api/Orders/status`: Update order status (Admin only).



## Contributing 🤝
We welcome contributions to Attiro1! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.



## License 📜
This project has no license.



## Important Links 🔗
-   GitHub Repository: [https://github.com/thearyansingh/Attiro1](https://github.com/thearyansingh/Attiro1)



## Footer 📝
-   Repository Name: Attiro1
-   Repository URL: [https://github.com/thearyansingh/Attiro1](https://github.com/thearyansingh/Attiro1)
-   Author: thearyansingh
-   Contact: [thearyansingh@example.com]

⭐️ Like this project? Give it a star on [GitHub](https://github.com/thearyansingh/Attiro1)!

🍴 Fork this repository to start your own project!

🐛 Found a bug? Report it by creating an issue!
