
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
const child21 = wallet.deriveChild(20);
const child22 = wallet.deriveChild(21);
const child23 = wallet.deriveChild(22);
const child24 = wallet.deriveChild(23);
const child25 = wallet.deriveChild(24);
const child26 = wallet.deriveChild(25);
const child27 = wallet.deriveChild(26);
const child28 = wallet.deriveChild(27);
const child29 = wallet.deriveChild(28);
const child30 = wallet.deriveChild(29);
const child31 = wallet.deriveChild(30);
const child32 = wallet.deriveChild(31);
const child33 = wallet.deriveChild(32);
const child34 = wallet.deriveChild(33);
const child35 = wallet.deriveChild(34);
const child36 = wallet.deriveChild(35);
const child37 = wallet.deriveChild(36);
const child38 = wallet.deriveChild(37);
const child39 = wallet.deriveChild(38);
const child40 = wallet.deriveChild(39);
const child41 = wallet.deriveChild(40);
const child42 = wallet.deriveChild(41);
const child43 = wallet.deriveChild(42);
const child44 = wallet.deriveChild(43);
const child45 = wallet.deriveChild(43);

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
console.log(child21);
console.log(child22);
console.log(child23);
console.log(child24);
console.log(child25);
console.log(child26);
console.log(child27);
console.log(child28);
console.log(child29);
console.log(child30);
console.log(child31);
console.log(child32);
console.log(child33);
console.log(child34);
console.log(child35);
console.log(child36);
console.log(child37);
console.log(child38);
console.log(child39);
console.log(child40);
console.log(child41);
console.log(child42);
console.log(child43);
console.log(child44);





