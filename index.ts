
import { HDNodeWallet, Wallet } from "ethers";

//2
const secretPhrase = "chuckle library brisk border urge better rent enhance quiz pole pool advance"

//1
// const hdWallet = Wallet.createRandom();

// console.log({ hdWallet });

//fin 1

//2-Pour récupérer le compte par la phrase secrète
const wallet = Wallet.fromPhrase(secretPhrase)

console.log({ wallet });

// Pour récupérer la privatekey
// console.log("Clé privée :", wallet.privateKey);

//Pour récupérer le compte par la privatekey

// const privateKey = "0x36b782f6c3e98fbfdcbee838dd0500234741be4225f766daebd3ca85c388a033"

// const wallet = new Wallet(privateKey);

// console.log({ wallet });

// console.log(wallet.address);


// Créer un compte enfant
// const wallet = HDNodeWallet.fromPhrase(secretPhrase)

// const child = wallet.deriveChild(0)
// const child2 = wallet.deriveChild(1)

// console.log(child);
// console.log(child2);
