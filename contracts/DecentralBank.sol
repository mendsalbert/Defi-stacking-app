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
       owner = msg.sender;
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

    //issue rewards
    function issueRewards() public{
       //loop through all the stakers and check thier balances
       //an certain amont of tokens in the token constract 
       require(msg.sender == owner, 'owner is allowed to reward a token');
       for(uint i = 0; i < stakers.length; i++){
           address recipient =  stakers[i];
           uint balance = stakingBalance[recipient] / 9;
           if(balance > 0){
             rwd.transfer(recipient, balance);
           }
       }
    }

    function unStackeTokens() public{
        //get the user
        uint balance = stakingBalance[msg.sender];
        require(balance > 0, 'Staking balance cannot be less than 0');
        tether.transfer(msg.sender, balance);
        stakingBalance[msg.sender]  = 0;
        isStaking[msg.sender] = false;
    }
}