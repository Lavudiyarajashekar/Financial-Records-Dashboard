# Financial-Records-Dashboard
A full-stack Financial Records Dashboard that allows users to manage income and expenses, with filtering, analytics, and data visualization using charts.

## Features

- Add financial records (income & expense)
- Update existing records
- Delete records
- Filter records by type and category
- View analytics (total income, expense, balance)
- Interactive chart visualization (Chart.js)
- Clean and responsive UI
---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose

### Frontend
- HTML
- CSS
- JavaScript

### Visualization
- Chart.js
---


## Setup Instructions
1. Clone the repository
git clone https://github.com/your-username/financial-records-dashboard.git
cd financial-records-dashboard
2. Install dependencies
npm install
3. Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
4. Run the server
npm run dev
5. Open the app

Open index.html in your browser.

## API Endpoints
POST /api/records → Create record
GET /api/records → Get all records
PUT /api/records/:id → Update record
DELETE /api/records/:id → Delete record
GET /api/records/analytics → Get analytics
## Notes
node_modules and .env are not included for security
Add your own MongoDB connection string in .env
