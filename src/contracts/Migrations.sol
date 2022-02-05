pragma solidity ^0.5.0;

contract Migrations{
  address public owner;
  unit public last_completed_migration;

  constructor() public{
      owner = msg.sender;
  }

  modifier restricted(){
      if(msg.sender == owner) _;
  }

  function setCompleted(uint completed) public restricted{
       last_completed_migration = completed;
  }

//when the block chain is running we used this upgrade function to 
//upgrade our smart contract

/**
 so what this code is basically doing here is to make 
 create a new instance of the a current address (owner address)
 set it last completedd to current completed state
 */
  function upgrade(address new_address) public restricted{
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }

}