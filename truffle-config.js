require('chai/register-should');

const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKey = "0x34008a5ec51e8abfb87a9b66a201a58bd45116b3bae3cf1331bd1fcc28081188";
const privateKeyProvider = new PrivateKeyProvider(privateKey, "http://18.216.213.235:8545");
const fs = require('fs');
 
// provider: () => new HDWalletProvider(
module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        besu: {
            provider: privateKeyProvider,
            network_id: "*"
 
        },
      },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24",
    }
  }
}
