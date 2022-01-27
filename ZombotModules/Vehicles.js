exports.Generate = GenerateRandomVehicle;

const Discord = require('discord.js');
const Random = require('./Random');

const vehicleYear = [
    //{text:"2020", weight:5},
    {text:"2010", weight:70},
    {text:"2000", weight:60},
    {text:"1990", weight:40},
    {text:"1980", weight:10},
    {text:"1970", weight:5},
    {text:"1960", weight:2},
    {text:"1950", weight:1},
]

const vehicleModel = [
    {text:"Sedan", weight:90},
    {text:"Coupe", weight:70},
    {text:"Compact Car", weight:60},
    {text:"2-Door Truck", weight:80},
    {text:"4-Door Truck", weight:80},
    {text:"Van", weight:40},
    {text:"Bus", weight:20},
    {text:"Police Car", weight:20, color:"Black"},
    {text:"Police Truck", weight:15, color:"Black"},
    {text:"Ambulance", weight:20, color:"White"},
    {text:"Firetruck (Pickup)", weight:10, color:"Red"},
    {text:"Firetruck", weight:8, color:"Red"},
    {text:"Security Van", weight:10, color:"Blue"},
    {text:"Semi-Truck and Trailer", weight:10},
    {text:"Semi-Truck", weight:5},
    {text:"Semi-Trailer", weight:3},
    {text:"Sports Bike", weight:15},
    {text:"Chopper Motorcycle", weight:10},
    {text:"Muscle Car", weight:30},
    {text:"Sports Car", weight:10},
    {text:"Exotic Car", weight:3},
]

const vehicleColor = new Map();
vehicleColor.set("Gray",    {text:"Gray", hex:"#AAAAAA", weight:100});
vehicleColor.set("White",   {text:"White", hex:"#FFFFFF", weight:90});
vehicleColor.set("Silver",  {text:"Silver", hex:"#CCCCCC", weight:85});
vehicleColor.set("Black",   {text:"Black", hex:"#000000", weight:80});
vehicleColor.set("Red",     {text:"Red", hex:"#FF0000", weight:70});
vehicleColor.set("Blue",    {text:"Blue", hex:"#0000CC", weight:70});
vehicleColor.set("Brown",   {text:"Brown", hex:"#341F00", weight:60});
vehicleColor.set("Green",   {text:"Green", hex:"#00CC00", weight:50});
vehicleColor.set("Orange",  {text:"Orange", hex:"#FF8800", weight:30});
vehicleColor.set("Gold",    {text:"Gold", hex:"#DCB700", weight:20});
vehicleColor.set("Maroon",  {text:"Maroon", hex:"#AA0000", weight:20});

const vehicleFuel = [
    {min:0, max:0, weight:60},
    {min:0, max:60, weight:50},
    {min:0, max:100, weight:20},
]

const vehicleParts = [
    {text:"Body", status:[
        {text:"Normal", weight:50},
        {text:"Rusted", weight:3},
        {text:"Lightly Damaged", weight:25},
        {text:"Heavily Damaged", weight:10},
        {text:"Apocalypse Armored", weight:5},
    ]},
    //Mechanical
    {text:"Tires", status:[
        {text:"Normal", weight:50},
        {text:"Missing", weight:10},
        {text:"Flat", weight:70},
    ]},
    {text:"Battery", status:[
        {text:"Normal", weight:25},
        {text:"Missing", weight:50},
        {text:"Dead", weight:100},
    ]},
    {text:"Engine", status:[
        {text:"Normal", weight:50},
        {text:"Missing", weight:5},
        {text:"Damaged", weight:30},
        {text:"Totaled", weight:10},
    ]}
]

function GenerateRandomVehicle()
{
    let year = Number(Random.Weighted(vehicleYear).text) + Random.Range(0,9);
    let model = Random.Weighted(vehicleModel);
    
    let color = (model.color) ? model.color : Random.Weighted(Array.from(vehicleColor.values())).text;
    
    let fuelRange = Random.Weighted(vehicleFuel);
    let fuel = Random.Range(fuelRange.min, fuelRange.max);

    let parts = [];
    for(i in vehicleParts)
    {
        let part = vehicleParts[i];
        let partStatus = Random.Weighted(part.status);
        parts.push({text:part.text, status:partStatus.text});
    }

    let message = GetVehicleEmbed({year:year, model:model.text, color:color, fuel:fuel, parts:parts});
    return message;
}

function GetVehicleEmbed(vehicle)
{
    let message = new Discord.MessageEmbed();
    let color = vehicleColor.get(vehicle.color);
    message.setColor(color.hex);
    message.setTitle(vehicle.year + " " + vehicle.model);

    message.addField("Fuel:", vehicle.fuel + "%", true);
    message.addField("Color:", color.text, true);
    
    let vehicleStatus = "Runs Normal";
    if(vehicle.fuel === 0)
        vehicleStatus = "Doesn't Start";
    
    let partsString = "";
    for(i in vehicle.parts)
    {
        let part = vehicle.parts[i];
        if(part.status !== "Normal")
        {
            partsString += part.text + " " + part.status + "\n";
            
            switch(part.text)
            {
                case "Wheels": 
                {
                    if(part.status === "Missing")
                    {
                        vehicleStatus = "Doesn't Move"; 
                    }
                    else
                    {
                        vehicleStatus = "Speed Reduced";    
                    }
                    break;
                }
                case "Battery": vehicleStatus = "No Power"; break;
                case "Engine": 
                {
                    if(part.status === "Damaged" && !vehicleStatus)
                    {
                        vehicleStatus = "Starts after Several Attempts";
                    }
                    else
                    {
                        vehicleStatus = "Doesn't Start"; 
                    }
                    break;
                }
            }
        }
    }

    message.addField("Status:", vehicleStatus, true);

    if(partsString !== "")
    {
        message.addField("Parts:", partsString);
    }

    //message.setFooter(JSON.stringify(vehicle));

    return message
}