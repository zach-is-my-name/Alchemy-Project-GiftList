const niceList = require('./niceList.json');
const MerkleTree = require('./MerkleTree');

// Create the Merkle tree
const merkleTree = new MerkleTree(niceList);

// Get the root of the Merkle tree
const root = merkleTree.getRoot();

console.log("Merkle Root: ", root);

