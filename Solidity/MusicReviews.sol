// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract MusicReviews is ERC721, Ownable {
    using SafeMath for uint256;

    // NFT-related variables
    uint256 public tokenIdCounter;
    uint256 public totalRevenue;
    uint256 public totalShares;
    mapping(uint256 => uint256) public tokenShares; // Shares per NFT
    mapping(uint256 => address) public tokenOwner;

    // Task-related variables
    struct Task {
        uint256 id;
        string description;
        uint256 budget;
        uint256 deadline;
        address serviceProvider;
        bool isCompleted;
        bool isApproved;
        bool isDisputed;
    }
    mapping(uint256 => Task) public tasks;
    uint256 public taskIdCounter;

    // Service provider-related variables
    struct ServiceProvider {
        address wallet;
        bool approved;
    }
    mapping(address => ServiceProvider) public serviceProviders;
    address[] public approvedProviders;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    // Mint NFTs to raise funds
    function mintNFT(address to, uint256 shares) external onlyOwner {
        tokenIdCounter++;
        uint256 newTokenId = tokenIdCounter;
        _mint(to, newTokenId);

        tokenShares[newTokenId] = shares;
        totalShares = totalShares.add(shares);
        tokenOwner[newTokenId] = to;
    }

    // Onboard a service provider
    function onboardServiceProvider(address wallet) external onlyOwner {
        require(!serviceProviders[wallet].approved, "Provider already onboarded");
        serviceProviders[wallet] = ServiceProvider(wallet, false);
    }

    // Approve a service provider for a project
    function approveServiceProvider(address wallet) external onlyOwner {
        require(serviceProviders[wallet].wallet != address(0), "Provider not onboarded");
        serviceProviders[wallet].approved = true;
        approvedProviders.push(wallet);
    }

    // Create a task
    function createTask(
        string memory description,
        uint256 budget,
        uint256 deadline,
        address serviceProvider
    ) external onlyOwner {
        require(serviceProviders[serviceProvider].approved, "Provider not approved");

        taskIdCounter++;
        tasks[taskIdCounter] = Task({
            id: taskIdCounter,
            description: description,
            budget: budget,
            deadline: deadline,
            serviceProvider: serviceProvider,
            isCompleted: false,
            isApproved: false,
            isDisputed: false
        });
    }

    // Mark a task as completed
    function markTaskCompleted(uint256 taskId) external {
        Task storage task = tasks[taskId];
        require(msg.sender == task.serviceProvider, "Only the assigned provider can complete the task");
        require(!task.isCompleted, "Task already completed");

        task.isCompleted = true;
    }

    // Approve a completed task
    function approveTask(uint256 taskId) external onlyOwner {
        Task storage task = tasks[taskId];
        require(task.isCompleted, "Task not completed");
        require(!task.isDisputed, "Task is disputed");

        task.isApproved = true;
        payable(task.serviceProvider).transfer(task.budget);
    }

    // Dispute a completed task
    function disputeTask(uint256 taskId) external onlyOwner {
        Task storage task = tasks[taskId];
        require(task.isCompleted, "Task not completed");
        require(!task.isApproved, "Task already approved");

        task.isDisputed = true;
    }

    // Collect streaming revenue (in Ether)
    function collectRevenue() external payable {
        require(msg.value > 0, "No revenue sent");
        totalRevenue = totalRevenue.add(msg.value);
    }

    // Distribute revenue to NFT holders
    function distributeRevenue() external onlyOwner {
        require(totalRevenue > 0, "No revenue to distribute");

        for (uint256 i = 1; i <= tokenIdCounter; i++) {
            address owner = tokenOwner[i];
            if (owner != address(0)) {
                uint256 share = totalRevenue.mul(tokenShares[i]).div(totalShares);
                payable(owner).transfer(share);
            }
        }

        totalRevenue = 0; // Reset total revenue after distribution
    }

    // Withdraw funds for project expenses (e.g., promotion, production)
    function withdrawFunds(uint256 amount) external onlyOwner {
        require(amount <= address(this).balance, "Insufficient balance");
        payable(owner()).transfer(amount);
    }
}