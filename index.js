// Code your solution in this file
function distanceFromHqInBlocks(block) {
    if (block < 42) {
        return 42 - block;
    } else {
        return block - 42;
    }
}
function distanceFromHqInFeet(block) {
    const blockDistance = distanceFromHqInBlocks(block);
    return blockDistance * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance > 2500) {
        return "cannot travel that far";
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        return (distance - 400) * 0.02;
    } else {
        return 0;
    }
}