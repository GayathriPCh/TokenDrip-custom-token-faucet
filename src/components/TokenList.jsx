import { useEffect, useState } from "react";
import { ethers } from "ethers";
import FaucetABI from "../contracts/FaucetABI.json";
import ERC20ABI from "../contracts/ERC20ABI.json";
import "./TokenList.css";
const CONTRACT_ADDRESS = "0x369C9bff2CC90cB18CAbA435Bc5e5f3995921273";

const TokenList = () => {
    const [tokens, setTokens] = useState([]);
    const [error, setError] = useState("");

    const fetchTokens = async () => {
        try {
            if (typeof window.ethereum === "undefined") {
                throw new Error("Please install MetaMask!");
            }

            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, FaucetABI, provider);

            const tokenAddress = "0x39D4042c335F0Bef702F89F66242Db4C9ffe261c";
            const tokenInfo = await contract.getTokenInfo(tokenAddress);
            
            // Get token name and symbol
            const tokenContract = new ethers.Contract(tokenAddress, ERC20ABI, provider);
            const name = await tokenContract.name();
            const symbol = await tokenContract.symbol();
            
            setTokens([{
                address: tokenAddress,
                name: name,
                symbol: symbol,
                balance: tokenInfo.balance.toString(),
                claimAmount: tokenInfo.claimAmount.toString(),
                cooldownPeriod: tokenInfo.cooldownPeriod.toString()
            }]);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchTokens();
    }, []);

    return (
        <div className="token-list">
            <h2>Available Tokens</h2>
            {error && <div className="error-message">{error}</div>}
            {tokens.map((token) => (
                <div key={token.address} className="token-card">
                    <h3>{token.name} ({token.symbol})</h3>
                    <div className="token-info">
                        <p><strong>Address:</strong> {token.address}</p>
                        <p><strong>Balance:</strong> {ethers.formatUnits(token.balance, 18)} {token.symbol}</p>
                        <p><strong>Claim Amount:</strong> {ethers.formatUnits(token.claimAmount, 18)} {token.symbol}</p>
                        <p><strong>Cooldown:</strong> {token.cooldownPeriod} seconds</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TokenList;