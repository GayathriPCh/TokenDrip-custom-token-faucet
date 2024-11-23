import TokenList from "./components/TokenList";
import ClaimToken from "./components/ClaimToken";
import AdminPanel from "./components/AdminPanel";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="hero-section">
                    <h1 className="title">TokenDrip</h1>
                    <p className="subtitle">The Ultimate Multi-Token Faucet for Web3 Developers</p>
                    <div className="features">
                        <div className="feature-card">
                            <h3>Multi-Token Support</h3>
                            <p>Access multiple test tokens in one place. Perfect for dApp development and testing.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Easy to Use</h3>
                            <p>Simple interface to claim tokens with customizable amounts and cooldown periods.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Secure & Reliable</h3>
                            <p>Built with advanced smart contracts ensuring fair distribution and prevention of abuse.</p>
                        </div>
                    </div>
                </div>
                
                <div className="section-wrapper">
                    <div className="section-intro">
                        <h2>Available Test Tokens</h2>
                        <p>Browse through our collection of test tokens available for claiming. Each token displays its current balance, claim amount limit, and cooldown period. These tokens are perfect for testing your dApps functionality without using real assets.</p>
                    </div>
                    <TokenList />
                </div>

                <div className="section-wrapper">
                    <div className="section-intro">
                        <h2>Claim Your Tokens</h2>
                        <p>Need test tokens for development? Simply enter the token address you want to claim and click the button. Remember to respect the cooldown period between claims to ensure fair distribution for all developers.</p>
                        <div className="steps">
                            <p>1. Copy the token address from the available tokens list</p>
                            <p>2. Paste it in the input field below</p>
                            <p>3. Click Claim and confirm the transaction in your wallet</p>
                        </div>
                    </div>
                    <ClaimToken />
                </div>

                <div className="section-wrapper">
                    <div className="section-intro">
                        <h2>Admin Controls</h2>
                        <p>For faucet administrators only. Manage your token faucet by adding new tokens, setting claim limits, and controlling cooldown periods. Ensure youre connected with the admin wallet to access these features.</p>
                        <div className="admin-guide">
                            <p>To add a new token:</p>
                            <p>• Enter the token contract address</p>
                            <p>• Set the claim amount users can receive</p>
                            <p>• Define the cooldown period between claims</p>
                            <p>• Add initial funds to the faucet</p>
                        </div>
                    </div>
                    <AdminPanel />
                </div>
            </div>
        </div>
    );
};

export default App;