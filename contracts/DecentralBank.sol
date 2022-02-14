// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.22 <0.9.0;
pragma solidity 0.5.3;

import './RWD.sol';
import './Tether.sol';


contract DecentralBank {
    string public name = 'Decentral Bank';
    address public owner;
    Tether public tether;
    RWD public rwd;

    constructor(RWD _rwd, Tether _tether) public {
       rwd = _rwd;
       tether = _tether;
    }

    address[] public stakers;

    mapping(address => uint ) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;
     
    function depositeTokens(uint _amount) public{
      require(_amount > 0 , 'amount should be greater than 0');
      //tranfers tokens from tether for staking
      tether.transferFrom(msg.sender, address(this), _amount);
      //update staking balance
      stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;
      //updates stakeers
      if(!hasStaked[msg.sender]){
         stakers.push(msg.sender);
      }  
      //update stakings state
      hasStaked[msg.sender] = true;
      isStaking[msg.sender] = true;
    }
}