const BenodeContract = artifacts.require('Benode');

const DEFAULT_SUPPLY = 100;

describe.only('Smart Parking:', function () {
	let benode;

	before(async function () {
		[admin, user1, user2] = await web3.eth.getAccounts();
		benode = await BenodeContract.new();
	});

	describe('Deployment', function () {
		it('Should deploy the Benode contract', async function () {
			assert.equal(await benode.name(), 'Benode');
			assert.equal(await benode.symbol(), 'BND');
			// assert.equal(await benode.totalSupply().toNumber(), DEFAULT_SUPPLY);
		});
	});

	describe('Write into contract', function () {
		// it('Should mint FIRST_NFT and place for sale', async function () {
		// 	const inputTokenURI = 'test.example1.com';
		// 	const marketItem = await market.createNftForSale(inputTokenURI, DEFAULT_PRICE);
		// 	const addedItemPrice = marketItem.logs[0].args.price.toNumber();
		// 	assert.equal(addedItemPrice, DEFAULT_PRICE);
		// });
	});

	describe('Read from contract', function () {
		// it('Should fetch my NFTs', async function () {
		// 	const txn = await market.fetchMyNFTs();
		// 	assert.equal(txn.length, 0);
		// });
	});
});
