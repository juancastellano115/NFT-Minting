const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("ZaHando");
  const URI01 = "https://ipfs.io/ipfs/QmeGQuGPVeTMosC16vZEULggAebVXq44CKzdNTK71F3uNt"
  const URI02 = "ipfs://QmSJhBappVGD54jyr92YgCiHRezsT9rDZxxQx9H7gyJ2Sb"
  const WALLET_ADDRESS = "0x7d15210440ECa5FCdD2CfC9e9375A238CAd14dF4"
  const CONTRACT_ADDRESS = "0x2544CF12044e5E984997525dCeB858F5aB45C82f"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI01);
  console.log("NFT minted: 01");
  await contract.mint(WALLET_ADDRESS, URI02);
  console.log("NFT minted: 02");
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});