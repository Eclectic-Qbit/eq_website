// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Q_0 is ERC721, Ownable {
    uint lastId = 1;
    mapping(address => uint) usersPass;

    constructor() ERC721("Quest #0 Pass", "Q_0") {}

    function mint() public {
        require(usersPass[msg.sender] == 0);

        _safeMint(msg.sender, lastId);

        unchecked {
            ++lastId;
        }
    }

    function hasMinted(address sender) public view returns (bool) {
        return usersPass[sender] == 0;
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }
}
