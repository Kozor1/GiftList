const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const merkleTree = new MerkleTree(niceList);
  const name = "Anna Stehr";

  const index = niceList.indexOf(name);
  const proof = merkleTree.getProof(index);

  if ( index != 1) {
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      proof,
      name,
    });
  console.log({ gift });
  }
}

main();
