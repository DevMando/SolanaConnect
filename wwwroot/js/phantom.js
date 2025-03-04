window.phantomWallet = {
    connect: async function () {
        if (window.solana && window.solana.isPhantom) {
            try {
                const response = await window.solana.connect();
                return response.publicKey.toString();
            } catch (err) {
                console.error("Phantom Wallet connection failed:", err);
                return null;
            }
        } else {
            alert("Phantom Wallet not found! Please install it.");
            return null;
        }
    },

    disconnect: async function () {
        if (window.solana && window.solana.isPhantom) {
            try {
                await window.solana.disconnect();
                window.solana = null;
                console.log("Phantom Wallet disconnected.");
                return true;
            } catch (err) {
                console.error("Error disconnecting Phantom Wallet:", err);
                return false;
            }
        } else {
            console.warn("Phantom Wallet is not installed.");
            return false;
        }
    }
};
