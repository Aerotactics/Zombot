//Zombot

const Discord = require('discord.js');
const client = new Discord.Client();
const Random = require('./ZombotModules/Random');
const Items = require('./ZombotModules/Items');
const Events = require('./ZombotModules/Events');
const Vehicles = require('./ZombotModules/Vehicles');
const Weather = require('./ZombotModules/Weather');

client.login('-KEY-');
client.once('ready', () => { 
	console.log('Zombot RISES! Ver. ' + version); 
	console.log('Items: ' + items.length);
	console.log('Events: ' + events.length);

	guild = client.guilds.cache.get('757471211449221200');
	welcomeChannel = client.channels.cache.get('757474321793810463');
	applicationChannel = client.channels.cache.get('757477790189879296');
	radioChannel = client.channels.cache.get('833142245669863495');
	moderatorRole = guild.roles.cache.get('757641212600516830');
	entryRole = guild.roles.cache.get('926942858433413182');
	acceptedRole = guild.roles.cache.get('757713868129566810');
	if(!debug)
	{
		Weather.SetWeatherChannel(client.channels.cache.get('923391549600055307'));
	}
	else // Debug land
	{
		
	}
});

// Important junk
const prefix = ';';
const debug = false;
const version = "1.6F";
const color = '#d7fc03';
const clearMax = 99;

//chance of getting nothing
const itemNothingChance = 30; //30
const partMissingChance = 75;

//Timer stuff
var lootTimerList = {};
var eventTimerList = {};
const lootTimerTime = 60 * 2; //2, seconds to minutes
const eventTimerTime = 60 * 15; //15
setInterval(OnSecond, 1000);

const items = Items.items;
const itemTags = Items.itemTags;

const events = Events.events;
const eventTags = Events.eventTags;

var welcomeChannel = null;
var applicationChannel = null;
var radioChannel = null;
var guild = null;
var entryRole = null;
var acceptedRole = null;

const blacklist = [
	'757477790189879296',
	'757471211449221204',
	'757833067686789170',
	'757715088886071486',
	'758509012387364912',
	'758876960964476928',
	'758041962409492480',
	'758051356404875366',
]

const helpMessage = new Discord.MessageEmbed()
.setColor(color)
.setTitle("*BRAINS:*\n")
.addFields(
	{name: prefix + "loot [tag]", value: "Displays a random loot item. Chance to find nothing. (pass in a tag to get a category item, or \"tags\" to see all tags.)"},
	{name: prefix + "randomevent (" + prefix + "re) (tag)", value: "Displays a random event. (Also allows tag search.)"},
	{name: prefix + "walkietalkie (" + prefix + "wt)", value: "Used for the walkie/radio feature."},
	{name: prefix + "generatevehicle (" + prefix + "gv)", value: "Generates a random vehicle. (Your choice where the keys are.)"},
	{name: prefix + "weather", value: "Show the current weather."},
	{name: prefix + "roll", value: "Roll a random number."},
)
.setFooter("In your HEAAAAAAD, ZOMBEH, ZOMBEH, ZOMBEH -EH -EH (ver. " + version + ")");

const adminHelpMessage = new Discord.MessageEmbed()
.setColor(color)
.setTitle("*BIG BRAINS:*\n")
.addFields(
	{name: "------------", value: "*Moderator*"},
	{name: prefix + "clear [amount (1-" + clearMax + ")]", value: "Clears previous amount of messages."},
	{name: prefix + "accept [user]", value: "Allows a user to roleplay."},
	{name: "------------", value: "*Admin*"},
	{name: prefix + "say", value: "Speak as Zombot."},
	{name: prefix + "setweather [id]", value: "Set the current weather."},
	{name: prefix + "item [name]", value: "Prints the Item's info."},
	{name: prefix + "testloot [name]", value: "Show the loot message for a specific item."},
)
.setFooter("Admin and Mod stuff.");


client.on('guildMemberAdd', async(member) => {
	let embed = new Discord.MessageEmbed()
	.setColor(color)
	.setDescription(`**${member}` + " has joined!**");
	welcomeChannel.send(embed);

	member.roles.add(entryRole);
});

client.on('guildMemberRemove', async(member) => {
	let embed = new Discord.MessageEmbed()
	.setColor('#AA0000')
	.setDescription(`**${member}` + " has left.**");
	welcomeChannel.send(embed);
});

var lastUser;
var lastMessage;
client.on('message', message => 
{
	if (!message.content.startsWith(prefix) || message.author.bot)
		return;

	// Hopefully no race condition
	lastUser = String(message.author.id);
	lastMessage = message; 

	if(!IsAdmin())
	{
		if (IsBlacklisted(message.channel.id)) 
			return;
	}
		
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if(command === 'help')
	{
		SendMessage(helpMessage);
	}

	// Loot
	if (command === 'loot') 
	{
		if(args[0] === "tags")
			PrintTags(itemTags);
		else
			LootItem(args[0], null); // We could pass multiple tags in the future
	}

	// RandomEvent
	if (command === 'randomevent' || command === 're')
	{
		if(args[0] === "tags")
			PrintTags(eventTags);
		else
			PlayEvent(args[0]);
	}

	if(command === 'walkietalkie' || command === 'wt')
	{
		UseWalkieTalkie(args)
		return;
	}

	if(command === 'generatevehicles' || command === 'gv')
	{
		let outStr = Vehicles.Generate();
		SendMessage(outStr);
		return;
	}

	if(command === 'weather')
	{
		SendMessage("*The weather is " + Weather.GetWeather() + "*");
		return;
	}

	if(command === 'roll')
	{
		let high = Number(args[0])
		if(high < 2 || high === undefined || args.length === 0)
		{
			SendMessage("Usage: " + prefix + "roll [max] (Rolls a number between 1 and max)");
			return
		}
		let rand = Random.Range(1, high);
		SendMessage("You rolled a **" + rand + "**! (1-" + high + ") (" + `${message.author}` + ")");
	}

	//Admin commands
	if(command === 'ahelp')
	{
		if(!IsModerator())
		{
			SendMessage("You're not supposed to do that. :eye::lips::eye:", 3000);
			return;
		}

		SendMessage(adminHelpMessage);
		return;
	}

	if(command === 'clear')
	{
		if(!IsModerator())
		{
			SendMessage("You're not supposed to do that. :eye::lips::eye:", 3000);
			return;
		}

		let count = Number.parseInt(args[0]);
		if(!count || count < 1 || count > clearMax)
		{
			SendMessage("Usage: " + prefix + "clear [amount (2-" + clearMax + ")] - Doesn't work on messages older than 2 weeks.");
			return;
		}

		let user = lastMessage.mentions.members.first();
		lastMessage.channel.bulkDelete(count + 1)
		.then( SendMessage("Deleted " + count + " messages.", 3000, false) )
		.catch((err) => { 
			SendMessage("Failed to Delete Messages.", 3000);
			return; 
		}); // We add 1 to include the command
		
		return;
	}

	if(command === 'accept')
	{
		if(!IsModerator())
		{
			SendMessage("You're not supposed to do that. :eye::lips::eye:", 3000);
			return;
		}

		let member = lastMessage.mentions.members.first();
		if(!member)
		{
			SendMessage("Usage: " + prefix + "accept [tagged user]");
			return;
		}
		
		if (HasRole(member, entryRole))
		{
			member.roles.remove(entryRole);
			member.roles.add(acceptedRole);
			applicationChannel.send("**Welcome " + `${member}` + "!** Your application is approved.")
			.then(message.delete());
		}
		else
		{
			applicationChannel.send("**Hey " + `${member}` + "!** Your character is approved.")
			.then(message.delete());
		}
		return;
	}

	if(command === 'say')
	{
		if(!IsAdmin())
		{
			SendMessage("You're not supposed to do that. :eye::lips::eye:", 3000);
			return;
		}
		
		let data = args.join(' ');
		SendMessage(data, 3000);
		return;
	}

	if(command === 'setweather')
	{
		if(!IsAdmin())
		{
			SendMessage("You're not supposed to do that. :eye::lips::eye:", 3000);
			return;
		}

		if(isNaN(Number(args[0])))
			return;

		if(Weather.SetWeather(args[0]))
			SendMessage("Weather Set: " + Weather.GetWeather());
		else	
			SendMessage("Weather Set Failed.");
		return;
	}

	if(command === 'item')
	{
		if(!IsAdmin())
		{
			SendMessage("You're not supposed to do that. :eye::lips::eye:", 3000);
			return;
		}

		let name = args.join(' ');
		let item = items.find(item => { return item.name === name; });
		if(!IsFalsy(item))			
			SendMessage(JSON.stringify(item));
		else
			SendMessage("Item not found.");
		return;
	}

	if(command === 'testloot')
	{
		if(!IsAdmin())
		{
			SendMessage("You're not supposed to do that. :eye::lips::eye:", 3000);
			return;
		}

		let name = args.join(' ');
		let item = items.find(item => { return item.name === name; });
		if(!IsFalsy(item))			
			LootItem(null, item);
		else
			SendMessage("Item not found.");
		return;
	}

	if(debug)
	{
		if(command === 'c')
		{
			client.emit('guildMemberAdd', message.member);
		}

		if(command === 'd')
		{
			client.emit('guildMemberRemove', message.member);
		}

		if(command === 'm')
		{
			SendMessage("Test", 0, false);
			SendMessage("Test2");
		}
	}
});

function UseWalkieTalkie(args)
{
	if(args.length < 2)
	{
		SendMessage("Usage: " + prefix + "walkietalkie(" + prefix + "wt) [channel #] [message]");
		return;
	}

	let channel = Number(args.shift());
	let text = args.join(' ');

	if(channel < 1 || channel > 99 || IsFalsy(channel))
	{
		SendMessage("Invalid channel ID (Use: 1 - 97 for walkie-talkie channels, 98 for AM, 99 for FM)");
		return;
	}

	let channelText = channel.toString();
	if(channel === 99)
		channelText = "FM";
	else if(channel === 98)
		channelText = "AM";
	let radioMessage = "[Radio](" + channelText + ") \"" + text + "\" (" + lastMessage.author.username + ")"; 
	
	if(radioChannel)
		radioChannel.send(radioMessage);
	
	SendMessage(radioMessage);
}

function HasRole(member, inRole)
{
	return member.roles.cache.some(role => role.id === inRole.id);
}

function IsAdmin(member)
{
	if(!member)
		member = lastMessage.member;

	return member.permissions.has('ADMINISTRATOR');
}

function IsModerator(member)
{
	if(!member)
		member = lastMessage.member;

	return IsAdmin(member) || HasRole(member, moderatorRole);
}

function PrintTags(tagArray)
{
	var outStr = "Tags: ";
	for(i in tagArray)
	{
		if(!IsAdmin() && String(tagArray[i]).startsWith("_"))
			continue;

		outStr += tagArray[i] + " ";
	}

	SendMessage(outStr);
}

function LootNothing()
{
	SendMessage("You looted **nothing**. (" + `${lastMessage.author}` + ")");
}

function LootItem(tag, forceItem = null)
{
	let timer = lootTimerList[lastUser];
	if(!IsFalsy(timer))
	{
		SendMessage("( Loot time left: " + (Math.floor(timer / 60) + 1) + " minutes | " + `${lastMessage.author}` + ")");
		return;
	}

	if(itemNothingChance > 0)
	{
		if (Random.Range(1,100) <= itemNothingChance)
		{
			LootNothing();
			lootTimerList[lastUser] = lootTimerTime;
			return;
		}
	}

	let item = forceItem;

	if(IsFalsy(forceItem))
		item = GetRandomItemByTag(items, String(tag).toLowerCase(), itemTags);

	if(item === null)
	{
		SendMessage("(Loot Failed, try again.)");
		return;
	}

	let outStr = "You looted ";
	let article = "";
	if(IsFalsy(item.article))
		article = "a ";
	else if(item.article != "none")
		article = item.article + " ";

	if(!IsFalsy(item.money))
		outStr += "**" + item.money + Random.Range(item.min, item.max) + " " + item.name + (IsFalsy(item.emoji) ? "" : " " + item.emoji) + "**!";
	else if(!IsFalsy(item.packageContents))
		outStr += article + "**" + item.name + (IsFalsy(item.emoji) ? "" : " " + item.emoji) + " with " + Random.Range(item.min, item.max) + " " +  item.packageContents + "**!";
	else if((item.min == 1 && item.max == 1)) 
		outStr += article + "**" + item.name + (IsFalsy(item.emoji) ? "" : " " + item.emoji) + "**!";
	else
		outStr += "**" + Random.Range(item.min, item.max) + " " + item.name + (IsFalsy(item.emoji) ? "" : " " + item.emoji) + "**!";

	if(!IsFalsy(item.part))
	{
		if(Random.Range(1,100) < partMissingChance)
			outStr += " (missing " + item.part + ")";
		else
			outStr += " (" + item.part + " included)";
	}
	outStr += " (" + `${lastMessage.author}` + ")";

	SendMessage(outStr);
	
	lootTimerList[lastUser] = lootTimerTime;
}

function IsFalsy(thing) 
{
	let type = typeof(thing);
	if(Boolean(thing) === false ||
		type === "undefined" ||
		(type === "number" && isNaN(thing)) || 
		String(thing) === "null" ||
		String(thing) === "undefined")
	{
		return true;	
	}
	return false;
}

function GetRandomItemByTag(array, tag, tagList)
{
	//Gather pool
	let lootPool = [];

	if(IsFalsy(tag))
	{
		lootPool = array;
	}
	else
	{
		if(!IsAdmin())
		{
			if(String(tag).startsWith("_") || !tagList.includes(tag))
				return null;	
		}

		for(i in array)
		{
			if(array[i].tags.includes(tag))
			{
				lootPool.push(array[i]);
			}
		}
	}

	if(lootPool.length === 0)
		return null;

	return Random.Weighted(lootPool);
}

function PlayEvent(tag)
{
	let timer = eventTimerList[lastUser];
	if(!IsFalsy(timer))
	{
		SendMessage("( Event time left: " + (Math.floor(timer / 60) + 1) + " minutes | " + `${lastMessage.author}` + ")");
		return;
	}

	var event = GetRandomItemByTag(events, String(tag).toLowerCase(), eventTags);
	if(event === null)
	{
		SendMessage("(Event Failed, try again.)");
		return;
	}

	var text;
	if(event.min === 1 && event.max === 1)
		text = event.text;
	else
		text = String(event.text).replace("#", Random.Range(event.min, event.max));
	text += " (" + `${lastMessage.author}` + ")";
	
	SendMessage(text);
	eventTimerList[lastUser] = eventTimerTime;
}

function SendMessage(text, delay = 0, deleteInput = true)
{
	lastMessage.channel.send(text)
	.then( msg => {
		if(deleteInput)
		{
			lastMessage.delete();
		}
		if(!isNaN(delay) && delay > 0)
		{
			setTimeout(() => msg.delete(), delay);
		}
	})
	.catch();
}

function OnSecond()
{
	DecrementTimer(lootTimerList);
	DecrementTimer(eventTimerList);
}

function DecrementTimer(timer)
{
	for(it in timer)
	{
		if(timer[it] > 0)
			--timer[it];
	}
}

function IsBlacklisted(channelID)
{
	if(blacklist.find(it => it === channelID) != undefined)
	{
		return true;
	}
	return false;
}