const BenodeContract = artifacts.require('Benode');
const ParkingContract = artifacts.require('Parking');

describe.only('Smart Parking:', function () {
	let benode;
	let parking;
	let parkingContractAddr = null;

	before(async function () {
		[admin, user1, user2] = await web3.eth.getAccounts();
		// benode = await BenodeContract.new();
		parking = await ParkingContract.new();
		parkingContractAddr = parking.address;
	});

	describe('Deployment', function () {
		it('Should deploy the Benod & Parking contracts', async function () {
			// assert.equal(await benode.name(), 'Benode');
			// assert.equal(await benode.symbol(), 'BND');
			assert.notEqual(parkingContractAddr, null);
		});
	});

	describe('Write into contract', function () {
		it('Should CREATE a parking space', async function () {
			const blockName = 'B101';
			const price = 5; // TOKENS
			const txn = await parking.createParkingSpace(blockName, price);
			const { args } = txn.logs[0];
			assert.equal(args.spaceId.toNumber(), 1);
			assert.equal(args.unitPrice.toNumber(), price);
			assert.equal(args.isAvailable, true);
		});
	});
});
