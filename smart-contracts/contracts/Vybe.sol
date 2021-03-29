// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Vybe is ERC721URIStorage {
    
    constructor() ERC721("Vybe", "VYB") {}

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event TransferOwnership(
        address _from,
        address _to,
        uint256 _tokenId
    );

    function createCollectible(string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}