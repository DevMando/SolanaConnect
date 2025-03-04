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
    }
};
