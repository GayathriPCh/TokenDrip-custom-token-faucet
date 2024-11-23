# TokenDrip 💧  
**The Ultimate Multi-Token Faucet for Web3 Developers**
![image](https://github.com/user-attachments/assets/a608c8af-0ea9-469b-941a-3da1599ab1df)

## Overview

**TokenDrip** is an **innovative, decentralized multi-token faucet** designed to meet the evolving needs of Web3 developers. Unlike traditional faucets that restrict you to specific tokens or testnets, TokenDrip allows anyone to **add any ERC-20 test token** by specifying its contract address, configure essential parameters (like cooling period and claim limits), and fund the faucet to make tokens available for others to claim.

This faucet is designed to be a **one-stop solution** for all your test token needs, empowering developers, testers, and contributors to easily access and distribute **testnet tokens** across multiple tokens and blockchains. It’s a highly configurable, **decentralized platform** where **users can claim tokens with just a contract address**, streamlining token distribution for **dApp development and testing**.

### **Please note**: All tokens provided via TokenDrip are **testnet tokens** meant exclusively for testing purposes within development environments.

## Why TokenDrip?

### The Problem with Existing Faucets

Existing token faucets often work for **specific tokens** or **testnets**, but they don’t offer the flexibility needed for comprehensive development or testing environments. Examples include:

- **Uniswap Faucet**: Only for Uniswap-related tokens.
- **Chainlink Faucet**: Focused on Chainlink test tokens.
- **Public ETH Faucets** (e.g., Sepolia, Goerli): Limited to native tokens.
  
Most of these faucets are **centralized** and require significant customization if you want to add support for different tokens, cooling periods, or claim limits. None of them offer the **out-of-the-box flexibility** for **multiple token ecosystems** and **customizable parameters** as you might need for robust dApp development and testing.

### How TokenDrip Stands Out

TokenDrip is **the first of its kind**—a decentralized **multi-token faucet** that supports a wide range of **testnet tokens** and is fully customizable. Here’s why TokenDrip is a game-changer:

- **Multi-Token Support**: Anyone can add **any ERC-20 testnet token** to the faucet by simply specifying its contract address.
- **Customizable Parameters**: Admins can set **cooling periods**, **claim limits**, and other parameters for each token. These are stored **on-chain** and enforced by smart contracts to ensure transparency and fairness.
- **Decentralized Funding**: Not only can you claim tokens, but **anyone can fund the faucet** with specific tokens, making it community-driven.
- **Token Address-Based Claiming**: Users simply **paste the token address** and claim tokens—no need to search through complex dropdowns or preset lists.
- **Token Discovery**: Users can browse a list of available tokens along with important details such as token balances, claim limits, and cooling periods.

### Current Landscape of Token Faucets

Currently, token faucets are generally designed for **single-token ecosystems** or **testnets**:

- **ETH Faucets** (e.g., Sepolia, Goerli): Limited to native tokens (ETH).
- **Uniswap & Chainlink Faucets**: Only work with their respective ecosystems or tokens.
  
These traditional faucets are either **centralized** or require **manual customizations** for each new token or parameter. As a result, they often **lack flexibility** for developers working across multiple blockchains or testing a wide range of tokens.

### TokenDrip: Out-of-the-Box Flexibility for Developers

TokenDrip is the **first truly decentralized multi-token faucet** designed for Web3 developers who need flexibility and simplicity. It allows developers and testers to:

- **Add any testnet token** by simply entering the token’s contract address.
- **Customize faucet parameters** such as claim limits, cooling periods, and token availability.
- **Fund the faucet with any ERC-20 testnet token**, making it a fully community-supported system.
- **Claim tokens easily** by pasting the token’s address—no complicated forms or search queries.

This unique feature set makes TokenDrip a truly **out-of-the-box** solution for anyone needing multiple test tokens in one place.

## Key Features

### 🔄 **Multi-Token Support**
- Claim any ERC-20 **testnet token** across multiple blockchains in one unified platform.
- Easily add tokens by specifying their contract address and relevant details.
- Perfect for developers working with various test tokens and ecosystems.

### 🎯 **Developer-Centric Design**
- **Customizable claim limits** and **cooling periods** for fair token distribution.
- **Flexible configuration** to manage token claim parameters.
- **Simple UI**: Paste the token address and claim tokens with ease.

### 🛡️ **Secure & Transparent**
- **Smart Contracts**: All parameters and transactions are handled by secure, decentralized smart contracts.
- **Anti-Abuse Measures**: Customizable cooldown periods and claim limits ensure fair usage.
- **Fully Decentralized**: Anyone can fund the faucet and contribute tokens to the community.

### 🔧 **Effortless Token Management**
- **Add Tokens**: Admins can easily add any ERC-20 testnet token to the faucet.
- **Manage Funds**: Fund the faucet with testnet tokens for others to claim.
- **Configurable Rules**: Customize claim limits, cooling periods, and other parameters.

## How to Use

### **Claiming Tokens**
1. Browse the list of available **testnet tokens**.
2. ![image](https://github.com/user-attachments/assets/4b4fece4-ebd9-429f-b328-0f8a88e16d48)

3. Copy the contract address of the token you wish to claim.
4. Paste the token address in the claim section.
5. Click "Claim" and confirm the transaction in your wallet.
6. Respect the cooldown period (if any) before claiming again.
![image](https://github.com/user-attachments/assets/19719866-4f6d-4c63-82e9-dfd113d901ef)

### **For Administrators**
![image](https://github.com/user-attachments/assets/3a33fbed-f7a0-430b-8892-33152f2d0133)

#### **Adding New Tokens**
1. Navigate to the Admin Panel.
2. Enter the token’s contract address.
3. Set customizable claim limits, cooldown periods, and other parameters.
4. Register the token to make it available for claiming.

#### **Managing Token Funds**
1. Access the Admin Panel.
2. Enter the token contract address you want to fund.
3. Specify the amount to fund the faucet.
4. Add funds, and the token will be available for other users to claim.

## Technical Details

- **Smart Contract Address**: `0x369C9bff2CC90cB18CAbA435Bc5e5f3995921273`
- **Built with**:  
  - **Frontend**: React, Ethers.js  
  - **Backend/Smart Contracts**: Solidity  
  - **Blockchain Network**: Ethereum Sepolia(Testnet)  
- **Key Features**: Multi-token support, customizable claim limits, configurable cooldown periods, decentralized faucet management.

## Getting Started

Clone the repo and install dependencies to get started.

```bash
# Clone the repository
git clone https://github.com/GayathriPCh/TokenDrip-custom-token-faucet.git

# Navigate to the project directory
cd TokenDrip-custom-token-faucet

# Install dependencies
npm install

# Run the application locally
npm run dev
```

Visit `http://localhost:3000` to access the app in your browser.

## Contributing

We welcome contributions to make TokenDrip even better! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Submit a pull request.

Please ensure your code adheres to the existing style and includes tests where applicable.
This version clearly communicates that the tokens distributed via TokenDrip are **testnet tokens** and are meant for **testing purposes** only. Let me know if you'd like to make further adjustments!
