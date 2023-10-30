const { Database } = require("@tableland/sdk");
const { Wallet, getDefaultProvider } = require("ethers");
require("dotenv").config();

// Define your private key (but replace with your own)
const privateKey = process.env.PRIVATE_KEY; // It's recommended to use `dotenv` and a place this in a `.env` file
const apiKey = process.env.ALCHEMY_API_KEY;
// Create the wallet (an extension of a signer)
const wallet = new Wallet(privateKey);
// Connect to a provider (e.g., Alchemy, etc.)—you should pass your own
// provider URL to `getDefaultProvider()` (avoid the throttled default)
//  `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`
const provider = getDefaultProvider(
  `https://polygon-mumbai.g.alchemy.com/v2/${apiKey}`
); // Defaults to Ethereum mainnet
// Create a signer by attaching the wallet to the provider
const signer = wallet.connect(provider);
// Connect to the database
const db = new Database({ signer });
module.exports = { db };
