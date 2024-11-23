import { useState } from "react";
import { ethers } from "ethers";
import FaucetABI from "../contracts/FaucetABI.json";
import ERC20ABI from "../contracts/ERC20ABI.json";
import './Admin.css';
const CONTRACT_ADDRESS = "0x369C9bff2CC90cB18CAbA435Bc5e5f3995921273";

const AdminPanel = () => {
    const [tokenAddress, setTokenAddress] = useState("");
    const [claimAmount, setClaimAmount] = useState("");
    const [cooldownPeriod, setCooldownPeriod] = useState("");
    const [fundTokenAddress, setFundTokenAddress] = useState("");
    const [fundAmount, setFundAmount] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const addToken = async () => {
        try {
            setIsLoading(true);
            setMessage("");
            setStatus("Adding token to faucet...");

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const faucetContract = new ethers.Contract(CONTRACT_ADDRESS, FaucetABI, signer);
            
            const claimAmountWei = ethers.parseUnits(claimAmount, 18);
            const addTokenTx = await faucetContract.addToken(tokenAddress, claimAmountWei, cooldownPeriod);
            await addTokenTx.wait();
            
            setStatus("Token added successfully!");
            setMessage("Token registration completed!");
            setTokenAddress("");
            setClaimAmount("");
            setCooldownPeriod("");
        } catch (error) {
            setStatus("Failed to add token");
            setMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const addFunds = async () => {
        try {
            setIsLoading(true);
            setMessage("");
            setStatus("Checking token balance...");

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            
            const tokenContract = new ethers.Contract(fundTokenAddress, ERC20ABI, signer);
            const fundAmountWei = ethers.parseUnits(fundAmount, 18);
            
            setStatus("Approving token transfer...");
            const approveTx = await tokenContract.approve(CONTRACT_ADDRESS, fundAmountWei);
            await approveTx.wait();

            setStatus("Adding funds to faucet...");
            const faucetContract = new ethers.Contract(CONTRACT_ADDRESS, FaucetABI, signer);
            const addFundsTx = await faucetContract.addFunds(fundTokenAddress, fundAmountWei);
            await addFundsTx.wait();
            
            setStatus("Funds added successfully!");
            setMessage("Token funding completed!");
            setFundTokenAddress("");
            setFundAmount("");
        } catch (error) {
            setStatus("Failed to add funds");
            setMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="admin-panel">
        <h2>Admin Panel</h2>
        
        <div className="admin-section">
            <h3>Register New Token</h3>
            <div className="input-group">
                <input
                    className="input-field"
                    type="text"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    placeholder="Token Address"
                />
                <input
                    className="input-field"
                    type="text"
                    value={claimAmount}
                    onChange={(e) => setClaimAmount(e.target.value)}
                    placeholder="Claim Amount"
                />
                <input
                    className="input-field"
                    type="number"
                    value={cooldownPeriod}
                    onChange={(e) => setCooldownPeriod(e.target.value)}
                    placeholder="Cooldown Period (seconds)"
                />
                <button 
                    className="button"
                    onClick={addToken}
                    disabled={isLoading || !tokenAddress || !claimAmount || !cooldownPeriod}
                >
                    Register Token
                </button>
            </div>
        </div>
    
        <div className="admin-section">
            <h3>Add Funds to Token</h3>
            <div className="input-group">
                <input
                    className="input-field"
                    type="text"
                    value={fundTokenAddress}
                    onChange={(e) => setFundTokenAddress(e.target.value)}
                    placeholder="Token Address"
                />
                <input
                    className="input-field"
                    type="text"
                    value={fundAmount}
                    onChange={(e) => setFundAmount(e.target.value)}
                    placeholder="Fund Amount"
                />
                <button 
                    className="button"
                    onClick={addFunds}
                    disabled={isLoading || !fundTokenAddress || !fundAmount}
                >
                    Add Funds
                </button>
            </div>
        </div>
    
        {status && (
            <div className={`status-message status`}>{status}</div>
        )}
        {message && (
            <div className={`status-message ${message.includes("Error") || message.includes("Failed") ? "error" : "success"}`}>
                {message}
            </div>
        )}
    </div>
    );
};

export default AdminPanel;