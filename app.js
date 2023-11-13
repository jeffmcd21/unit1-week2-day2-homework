
console.log("Working outside!");

// Parameters:
// Working as a landscaper
// Starting tool is teeth, revenue $1/day, unlimited uses
// Upgrade to rusty scissors, cost $5, 

// Supplies array
const tools = [
    {name: "teeth", revenue: 1, cost: 0},
    {name: "rusty scissors", revenue: 5, cost: 5},
    {name: "old-timey push lawnmower", revenue: 50, cost: 25},
    {name: "battery-powered lawnmower", revenue: 100, cost: 250},
    {name: "starving students team", revenue: 250, cost: 500},
];

// Progress level info, money earned and tool level
const workers = {
    money: 0,
    tool: 0
};

// Function for completing the job and recognizing revenue earned each day
function cutGrass(){
    const tool = tools[workers.tool]
    // Notification of job complete with specific tool and and amount earned
    alert(`That lawn is done! Using ${tool.name} you earned ${tool.revenue} dollas`)
    // Add a days earning to the workers wallet a.k.a. money
    workers.money += tool.revenue
};
// This function checks to see if there are more tools to upgrade to.
function upgrade() {
    // Checking to see if the current tool is the last tool in the array
    if (workers.tool + 1 < tools.length) {
        // Checks to see what the next tool is and saves it into a variable
        const nextTool = tools[workers.tool + 1]
        // Checks to see if there is enough money to but the tool
        if (nextTool.cost <= workers.money) {
            // Reduces the amount of money the worker has by the cost of the next tool
            workers.money -= nextTool.cost
            // Allows the worker to get the upgraded tool
            workers.tool += 1
        } else {
            // A notification that you do not have enough money to but the next tool
            alert("Too poor for an upgrade, keep working")
        }
    } else {
        // A notification that there is not a better tool to upgrade too.
        alert("You have the best available tool")
    }
}

// A loop that generates a prompt for action by the user to cut the grass again and how much money is in the wallet a.k.a. money
while(!workers.allTrimmed){
    // The users response being saved into a variable
    const response = prompt(`You currently have ${workers.money} dollars, do you want to [cut] grass or [up]grade your equipment ?`)

    // Using the cutGrass function if the user responds with 'cut'
    if (response === 'cut'){
        cutGrass()
    }

    // Using the upgrade function if the user responds with 'up'
    if (response === 'up'){
        upgrade()
    }
}