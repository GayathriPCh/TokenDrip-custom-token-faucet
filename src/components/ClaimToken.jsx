import { useState } from "react";
import { ethers } from "ethers";
import FaucetABI from "../contracts/FaucetABI.json";
import './ClaimToken.css';
const CONTRACT_ADDRESS = "0x369C9bff2CC90cB18CAbA435Bc5e5f3995921273";

const ClaimToken = () => {
    const [tokenAddress, setTokenAddress] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const claimTokens = async () => {
        try {
            setIsLoading(true);
            if (typeof window.ethereum === "undefined") {
                throw new Error("Please install MetaMask!");
            }

            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(CONTRACT_ADDRESS, FaucetABI, signer);

            const tx = await contract.claimTokens(tokenAddress);
            await tx.wait();
            
            setMessage("Tokens claimed successfully!");
            setTokenAddress("");
        } catch (error) {
            setMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="claim-section">
            <h2>Claim Tokens</h2>
            <div className="claim-form">
                <input
                    className="claim-input"
                    type="text"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    placeholder="Enter token address"
                />
                <button 
                    className="claim-button"
                    onClick={claimTokens} 
                    disabled={isLoading || !tokenAddress}
                >
                    {isLoading ? "Claiming..." : "Claim"}
                </button>
            </div>
            {message && (
                <div className={`message ${message.includes("successfully") ? "success-message" : "error-message"}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default ClaimToken;