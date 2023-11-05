# Fault-Tracker

Fault-Tracker is a comprehensive system developed for managing various aspects of a business related to manufacturing, distribution, and customer service. The project consists of a frontend built with Next.js, a backend powered by Node.js, MongoDB used as the primary database, and integrates Web3 MetaMask for blockchain connectivity for users.

## Database Schema

The Fault-Tracker database schema includes the following entities:

- **Users**: Information about individuals or entities with access to the system, including different roles such as administrators, managers, and regular users.
- **Raw Materials**: Basic materials or substances used in the manufacturing of products.
- **Suppliers**: Data about companies or entities from which raw materials or products are sourced.
- **Products**: Comprehensive data about the products, including specifications, pricing, and other relevant details.
- **Manufacturers**: Information about the companies or entities responsible for producing products or raw materials.
- **Distribution Centers**: Details about various locations where products are stored before being distributed to retail stores or customers.
- **Shipments**: Information related to the shipping of products, including tracking, delivery dates, and shipping methods.
- **Retail Store Products**: Information about products available at retail stores, including stock levels, pricing, etc.
- **Retail Store Customers**: Customer information specific to retail stores, such as purchase history, preferences, etc.
- **Retail Store Orders**: Detailed records of orders placed by customers at retail stores.
- **Defects**: Records of defects found in products or raw materials, crucial for quality control and improvement processes.
- **Customer Claims**: Information related to claims made by customers, including details about the claim and its resolution status.

## Blockchain Integration

The Fault-Tracker project integrates Web3 MetaMask for blockchain connectivity, allowing users to interact with the blockchain network seamlessly. Users can perform secure transactions, access blockchain-based data, and leverage the benefits of decentralized applications through the MetaMask extension.

## Project Structure

The project follows a modular structure with the frontend and backend components clearly separated:

### Frontend (Next.js)

The frontend is built using Next.js, a popular React framework offering server-rendered React applications for optimized performance.

### Backend (Node.js)

The backend services are developed using Node.js, providing robust and scalable server-side capabilities for handling API requests, business logic, and database interactions.

### Database (MongoDB)

MongoDB is employed as the database system, offering flexibility and scalability to store and manage the diverse data entities efficiently.

## Blockchain Integration (Web3 MetaMask)

The project integrates Web3 MetaMask, a widely used Ethereum wallet browser extension. MetaMask enables users to connect their digital wallets to the Fault-Tracker application, enabling blockchain transactions and interactions.

## Setup Instructions

1. **Clone the Repository:**

   ```
   git clone https://github.com/shivam6862/Fault-Tracker.git
   cd Fault-Tracker
   ```

2. **Install Dependencies:**

   ```
   # Install frontend and backend dependencies
   npm install
   ```

3. **Configure Environment Variables:**

   - Create a `.env` file in the project root and specify environment variables such as database connection details, API endpoints, and other configuration settings.

4. **Run the Application:**

   ```
   # Start both frontend and backend servers
   npm run dev and npm start
   ```

5. **Access the Application:**
   - The Fault-Tracker application will be accessible at `http://localhost:3000` in your web browser.

Feel free to explore the codebase, contribute to the project, and enhance the Fault-Tracker system according to your requirements. If you have any questions or need further assistance, please reach out to the project maintainers. Happy coding!
