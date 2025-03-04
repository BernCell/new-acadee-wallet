
import { HDNodeWallet, Wallet } from "ethers";

//2
const secretPhrase = "chuckle library brisk border urge better rent enhance quiz pole pool advance"

//1
// const hdWallet = Wallet.createRandom();

// console.log({ hdWallet });

//fin 1

//2-Pour récupérer le compte par la phrase secrète
// const wallet = Wallet.fromPhrase(secretPhrase)

// console.log({ wallet });


//3- Pour récupérer la privatekey
// console.log("Clé privée :", wallet.privateKey);

//4-Pour récupérer le compte par la privatekey

// const privateKey = "0x6363a2deeb5588f4d33cde63254c5d510b578b10a77ac615f7d7ca75c975bfd1"

// const wallet = new Wallet(privateKey);

// console.log({ wallet });

// console.log(wallet.address);


//5- Créer un compte enfant
const wallet = HDNodeWallet.fromPhrase(secretPhrase)

const child = wallet.deriveChild(0)
const child2 = wallet.deriveChild(1)
const child3 = wallet.deriveChild(2)
const child4 = wallet.deriveChild(3)
const child5 = wallet.deriveChild(4)

console.log(child);
console.log(child2);
console.log(child3);
console.log(child4);
console.log(child5);

