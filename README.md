# koinx_backend_assignment
this is the solution of koinx_backend_assignment

# Crypto Price Tracker

A Node.js application that tracks cryptocurrency prices using the CoinGecko API. The application fetches and stores price data for Bitcoin, Ethereum, and Matic, and provides API endpoints to access this data.

## Features

- Background job to fetch cryptocurrency prices every 2 hours
- API endpoint to get latest price statistics
- API endpoint to calculate price standard deviation
- Support for Bitcoin, Ethereum, and Matic
- MongoDB integration for data persistence

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB (local installation or Atlas URI)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/crypto_tracker
PORT=3000
COINGECKO_API_BASE_URL=https://api.coingecko.com/api/v3
```

## Running the Application

1. Start the server:
```bash
npm run dev
```

2. The server will start on port 3000 (or the port specified in your .env file)
3. The background job will automatically start fetching prices every 2 hours

## API Endpoints

### Get Latest Stats
```
GET /stats?coin=bitcoin
```
Query Parameters:
- coin: One of ['bitcoin', 'ethereum', 'matic-network']

Response:
```json
{
    "price": 42000.50,
    "marketCap": 820000000000,
    "24hChange": 2.5
}
```

### Get Price Deviation
```
GET /deviation?coin=bitcoin
```
Query Parameters:
- coin: One of ['bitcoin', 'ethereum', 'matic-network']

Response:
```json
{
    "deviation": 1234.56
}
```

## Project Structure

```
crypto-tracker/
├── src/
│   ├── config/        # Configuration files
│   ├── models/        # Database models
│   ├── services/      # Business logic
│   ├── controllers/   # Request handlers
│   ├── routes/        # API routes
│   └── utils/         # Helper functions
├── .env               # Environment variables
├── .gitignore
├── package.json
└── server.js
```

## Error Handling

The API returns appropriate error messages:

```json
{
    "error": "Invalid coin specified"
}
```

## Development

1. Run in development mode with nodemon:
```bash
npm run dev
```

2. Run in production mode:
```bash
npm start
```

## Testing

You can test the API endpoints using curl:

```bash
# Get Bitcoin stats
curl "http://localhost:3000/stats?coin=bitcoin"

# Get Bitcoin price deviation
curl "http://localhost:3000/deviation?coin=bitcoin"
```

## Deployment

1. Set up MongoDB Atlas account (if using cloud database)
2. Update MONGODB_URI in .env file
3. Deploy to your preferred hosting platform (Heroku, AWS, etc.)
4. Set environment variables on hosting platform

## Built With

- Node.js
- Express.js
- MongoDB
- Mongoose
- Node-cron
- Axios

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- CoinGecko API for cryptocurrency data
- MongoDB for database
- Express.js framework
