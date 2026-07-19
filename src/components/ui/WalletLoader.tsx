import "./WalletLoader.css";

export default function WalletLoader() {
  return (
    <div className="wallet-loader">
      <div className="wallet-back"></div>

      <div className="bill bill-1"></div>
      <div className="bill bill-2"></div>
      <div className="bill bill-3"></div>

      <div className="wallet-front">
        <span className="text">
          Loading
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </span>
      </div>
    </div>
  );
}
