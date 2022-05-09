require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain social install drop supply tennis'; 
let testAccounts = [
"0x405f2d1cdf94ed8575039accb78c113bd966de0ec49ff98d325521811411516d",
"0x727472798327133d70675e9752bf401d4f54b14f6b4b938484652e8f00a3a129",
"0xa47f2583a15833cc32e2a1dfa9825051563f7ba42312078c91a5fd06be1b1db2",
"0xa79f1e3ab2dba39c0b254c6d9993471562110200ab996cd4cc357418cc9b6bf9",
"0x8017793c9a1c1461a04353806011a5d0f00c408916dd3be17c4b266875d91d19",
"0xa9a7cc2540ee741fd7f18bb5edf0f516b9c868e3e21eead95bccb72d83a3e60e",
"0x62d6206a0465986e282a05fba24b142362ac41bf1605d4747ac7191660e69d54",
"0x2cbb7fb1a67130ff47969334ee5798f32d21e9c03af628eecadb2fc72b0c690c",
"0x9d18d8d23612042ab0356916e5ed878c6bd31013a7f69a64a241f9a007dd4ce6",
"0x688b0d9fe3b8761a0f2f5444aeca105cbd8932644960935daefbd4a749bb9a34"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

