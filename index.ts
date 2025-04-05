
import { log } from "console";
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

const child = wallet.deriveChild(0);
const child2 = wallet.deriveChild(1);
const child3 = wallet.deriveChild(2);
const child4 = wallet.deriveChild(3);
const child5 = wallet.deriveChild(4);
const child6 = wallet.deriveChild(5);
const child7 = wallet.deriveChild(6);
const child8 = wallet.deriveChild(7);
const child9 = wallet.deriveChild(8);
const child10 = wallet.deriveChild(9);
const child11 = wallet.deriveChild(10);
const child12 = wallet.deriveChild(11);
const child13 = wallet.deriveChild(12);
const child14 = wallet.deriveChild(13);
const child15 = wallet.deriveChild(14);
const child16 = wallet.deriveChild(15);
const child17 = wallet.deriveChild(16);
const child18 = wallet.deriveChild(17);
const child19 = wallet.deriveChild(18);
const child20 = wallet.deriveChild(19);

console.log(child);
console.log(child2);
console.log(child3);
console.log(child4);
console.log(child5);
console.log(child6);
console.log(child7);
console.log(child8);
console.log(child9);
console.log(child10);
console.log(child11);
console.log(child12);
console.log(child13);
console.log(child14);
console.log(child15);
console.log(child16);
console.log(child17);
console.log(child18);
console.log(child19);
console.log(child20);





