# koinx_backend_assignment
this is the solution of koinx_backend_assignment

# Cryptocurrency Price Tracker

A Node.js application that tracks real-time cryptocurrency prices using CoinGecko API and MongoDB Atlas for data storage.

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- CoinGecko API

## Features
- Auto-updates crypto prices every 2 hours
- Stores historical price data
- Provides current price statistics
- Calculates price standard deviation
- Supports Bitcoin, Ethereum, and Matic

## Setup Instructions

### Prerequisites
1. Node.js installed on your machine
2. MongoDB Atlas account
3. Code editor (VS Code recommended)

### Installation Steps

1. **Clone Repository**
```bash
git clone [your-repository-url]
cd [project-folder]
```

2. **Install Dependencies**
```bash
npm install
```

3. **Environment Setup**
Create `.env` file in root directory:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=3000
COINGECKO_API_BASE_URL=https://api.coingecko.com/api/v3
```

4. **Start Application**
```bash
npm run dev
```

## API Endpoints

1. **Get Latest Cryptocurrency Stats**
```
GET /stats?coin=[coinname]
```
Example: `http://localhost:3000/stats?coin=bitcoin`

2. **Get Price Deviation**
```
GET /deviation?coin=[coinname]
```
Example: `http://localhost:3000/deviation?coin=bitcoin`

Supported coins:
- bitcoin
- ethereum
- matic-network

## Data Updates
- Background job runs every 2 hours
- Automatically fetches latest prices
- Stores in MongoDB Atlas
- Calculates standard deviation from last 100 records

## Error Handling
- Invalid coin names return appropriate error messages
- API errors are properly logged
- Database connection issues are handled gracefully

## MongoDB Atlas Setup
1. Create cluster in MongoDB Atlas
2. Get connection string
3. Add IP to whitelist
4. Update .env with connection string

## Author
Abhinav Krishna

