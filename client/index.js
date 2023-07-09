const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // Create the Merkle tree
  const merkleTree = new MerkleTree(niceList);

  // Generate a proof for any name
  async function getGiftForName(name) {
    const index = niceList.findIndex(n => n === name);
    if (index === -1) {
      console.log(`Inputed Name: ${name} This name is not on the nice list`);
      return;
    }

    const proof = merkleTree.getProof(index);

    // Send the proof to the server
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      name: name,
      proof: proof,
    });

    console.log({ gift });
  }

  // Test the function with a name
  getGiftForName("Norman Block");
  getGiftForName("Zach Michaels");
}

main();
