import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import bs58 from "bs58";

const generateMnemonicPhrase = () => {
  const phrase = generateMnemonic();

  return phrase;
};

const getMemonicSeed = (phrase: string): Uint8Array => {
  const seed = mnemonicToSeedSync(phrase);

  return seed;
};

const uint8ArrayToHex = (uint8Array: Uint8Array): string => {
  return Array.from(uint8Array)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

const getSolanaAdress = (seed: Uint8Array) => {
  const path = `m/44'/501'/0'/0'`;
  const derivedSeed = derivePath(path, uint8ArrayToHex(seed)).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const privateKey = bs58.encode(secret);
  const address = Keypair.fromSecretKey(secret).publicKey.toBase58();

  return { public: address, private: privateKey };
};

export {
  generateMnemonicPhrase,
  getMemonicSeed,
  uint8ArrayToHex,
  getSolanaAdress,
};
