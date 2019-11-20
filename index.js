// Code your solution in this file!
function logDriverNames(drivers)
{
    for(let driver of drivers)
    {      
        console.log(driver["name"]);
    }
}

function logDriversByHometown(drivers, hometown)
{
    for(let driver of drivers)
    {      
        if (driver["hometown"] === hometown)
        {
            console.log(driver["name"]);
        }
    }
}

function driversByRevenue(drivers)
{
    let retArray = drivers.slice();
    return retArray.sort(function(driver1, driver2){return driver1["revenue"]-driver2["revenue"]});
}

function driversByName(drivers)
{
    let retArray = drivers.slice();
    return retArray.sort(function(driver1, driver2){return driver1["name"].localeCompare(driver2["name"])});
}

function totalRevenue(drivers)
{
    return drivers.reduce(myFunc, 0);   
}

function myFunc(total, driver) {
    return total + driver["revenue"];
}

function averageRevenue(drivers)
{
    return drivers.reduce(myFunc, 0)/drivers.length;
}