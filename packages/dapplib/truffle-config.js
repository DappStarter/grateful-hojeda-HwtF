require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember assume heavy clinic blue gift'; 
let testAccounts = [
"0x432969fab12656d871678e19f20446518db200a5100a43ea5d8e08be0510cdfe",
"0xb8ab22c637c006c0ef08e9dbded8a57be4123466bf3389e92216c3144053765f",
"0x3095c0dea54bea6d5cd87d8a183910a15d3aca3bbdb1d40ca1525ac6726b7d37",
"0x3c09b148ad9dd8dd57ed58907ff6ea745cbdff28ed7a8bd33df3b154714216e3",
"0xb335f086870b8826f924d9a60175e6f8d5935f733640184a46c87129828844c1",
"0x2f4a609dce56f27471c1c277a215ed1a439f47219aafe64df35783efa3d83b71",
"0xae2cd054758f91701fdf2aaf076041ee528d83303d513e037b3988479d064f26",
"0xfd835de124e4f75faf638fa6539c76c8ca12a6808b59f0171e19eafe567fb431",
"0x0549ac81ba56d07490de3df58f7de52f0a19f9f008f1dff37e9187d15d04c0fe",
"0x366af94418d7973d58e519b17b0e3189111ea97779971d4b3db71d708d0e207b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

