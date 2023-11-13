
console.log("Working outside!");

// Parameters:
// Working as a landscaper
// Starting tool is teeth, revenue $1/day, unlimited uses
// Upgrade to rusty scissors, cost $5, 

// Supplies array
const tools = [
    {name: "teeth", revenue: 1, cost: 0},
    {name: "rusty scissors", revenue: 5, cost: 5}
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

function upgrade() {
    if (workers.tool + 1 < tools.length) {
        const nextTool = tools[workers.tool + 1]
        if (nextTool.cost <= workers.money) {
            workers.money -= nextTool.cost
            workers.tool += 1
        } else {
            alert("Too poor for an upgrade, keep working")
        }
    } else {
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