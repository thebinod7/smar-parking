// SPDX-License-Identifier: MIT
pragma solidity >0.8.0 <0.9.0;

import '@openzeppelin/contracts/utils/Counters.sol';


contract Parking {

    using Counters for Counters.Counter;

    Counters.Counter private spaceIds;
    
    struct ParkingSpace {
        uint256 spaceId;
        address createdBy;
        string blockName;
        uint256 unitPrice;
        bool isAvailable;
    }

    mapping(uint256 => ParkingSpace) public idToParkingSpace;

    event SpaceCreated(
        uint256 spaceId,
        uint256 unitPrice,
        bool isAvailable
    );

    function createParkingSpace(string memory _blockName, uint256 _unitPrice) public {
        spaceIds.increment();
        uint256 currentId = spaceIds.current();
        idToParkingSpace[currentId] = ParkingSpace(currentId,msg.sender, _blockName, _unitPrice, true);
        emit SpaceCreated(currentId, _unitPrice, true);
    }
}
