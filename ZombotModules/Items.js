//Items
class Item
{
	constructor(name, tags = [], min = 1, max = 1, weight = 50, money = "", emoji = "", packageContents = "", part = "", article = "")
	{
		this.name = name;
		this.tags = tags;
		this.min = min;
		this.max = max;
		this.weight = weight;
		this.money = money;
		this.emoji = emoji;
        this.packageContents = packageContents;
        this.part = part;
		this.article = article;
	}
}

exports.itemTags = [
	"money",
	"food",
	"medical",
	"weapon",
	"gun",
	"gunaccessory",
    "ammo",
    "camping",
	"tool",
    "electronic",
    "clothing",
	"toy",
	"book",
    "scrap",
	"auto",
    "_fred",    //Fred items (emojis)
]

exports.items = [];

// Money
AddItem({name:"USD", min:2, max:40, tags:["money"], money:"$", weight:600});
AddItem({name:"CAD", min:2, max:40, tags:["money"], money:"$", weight:100});
AddItem({name:"Pesos", min:2, max:40, tags:["money"], money:"$", weight:80});
AddItem({name:"AUD", min:2, max:40, tags:["money"], money:"$"});
AddItem({name:"Pounds", min:2, max:40, tags:["money"], money:"£"});
AddItem({name:"Euro", min:2, max:40, tags:["money"], money:"€"});
AddItem({name:"Rupees", min:2, max:40, tags:["money"], money:"₹"});
AddItem({name:"Yuan", min:2, max:40, tags:["money"], money:"¥"});

// Food
AddItem({name:"Can of Food", tags:["food"]});
AddItem({name:"Bottle of Water", tags:["food"]});
AddItem({name:"Can of Soda", tags:["food"]});
AddItem({name:"Bottle of Alcohol", tags:["food"]});
AddItem({name:"M.R.E.", tags:["food"], article:"an"});
AddItem({name:"Water Canteen", tags:["food","camping"], part:"water"});
AddItem({name:"Booze Canteen", tags:["food"], part:"alcohol"});
AddItem({name:"Container of Coffee Grounds", tags:["food"]});
AddItem({name:"Box of Tea Bags", min:2, max:10, tags:["food"], packageContents:"bags"});
AddItem({name:"Box of M.R.E.", min:2, max:10, tags:["food"], packageContents:"pouches", weight:5});
AddItem({name:"Box of Canned Food", min:4, max:10, tags:["food"], packageContents:"cans", weight:5});
AddItem({name:"Box of Bottled Water", min:4, max:10, tags:["food"], packageContents:"bottles", weight:5});

// Medical
AddItem({name:"Bandages", min:2, max:4, tags:["medical"], weight:100});
AddItem({name:"Bottle of Pills", min:3, max:30, tags:["medical"], packageContents:"pills", weight:70});
AddItem({name:"Bottle of Medicine", tags:["medical"], weight:70});
AddItem({name:"Morphine Syringe", tags:["medical"]});
AddItem({name:"Inhaler", tags:["medical"], article:"an"});
AddItem({name:"Medical Needles", min:2, max:10, tags:["medical"]});
AddItem({name:"Bottle of Rubbing Alcohol", tags:["medical"]});
AddItem({name:"Medical Tape", tags:["medical"], article:"none"});
AddItem({name:"Stethoscope", tags:["medical"]});
AddItem({name:"A.E.D.", tags:["medical"], article:"an"});

// Weapon
AddItem({name:"Baseball Bat", tags:["weapon", "toy"]});
AddItem({name:"Fire Axe", tags:["weapon"]});
AddItem({name:"Golf Club", tags:["weapon"]});
AddItem({name:"Meat Cleaver", tags:["weapon"]});
AddItem({name:"Combat Knife", tags:["weapon"]});
AddItem({name:"Antique Sword", tags:["weapon"], article:"an"});
AddItem({name:"Antique Dagger", tags:["weapon"], article:"an"});
AddItem({name:"Machete", tags:["weapon"]});
AddItem({name:"Police Baton", tags:["weapon"]});
AddItem({name:"Pipe Bomb", tags:["weapon"]});
AddItem({name:"Frag Grenade", tags:["weapon"]});
AddItem({name:"Flash Grenade", tags:["weapon"]});
AddItem({name:"I.E.D.", tags:["weapon"]});
AddItem({name:"Antique Grenade", tags:["weapon"], article:"an"});
AddItem({name:"Katana", tags:["weapon"]});
AddItem({name:"Throwing Knife", tags:["weapon"]});
AddItem({name:"Homemade Knife", tags:["weapon"]});
AddItem({name:"Homemade Sword", tags:["weapon"]});
AddItem({name:"Medieval Dagger", tags:["weapon"]});
AddItem({name:"Medieval Sword", tags:["weapon"]});
AddItem({name:"Compound Bow", min:0, max:12, tags:["weapon"], packageContents:"arrow(s)"});
AddItem({name:"Recurve Bow", min:0, max:12, tags:["weapon"], packageContents:"arrow(s)"});
AddItem({name:"Crossbow", min:0, max:10, tags:["weapon"], packageContents:"bolt(s)"});

// Gun
AddItem({name:"9mm Pistol", min:1, max:8, tags:["gun","weapon"], packageContents:"bullet(s)"});
AddItem({name:"10mm Pistol", min:1, max:10, tags:["gun","weapon"], packageContents:"bullet(s)"});
AddItem({name:"Revolver", min:1, max:6, tags:["gun","weapon"], packageContents:"bullet(s)"});
AddItem({name:"Double-Barrel Shotgun", min:2, max:8, tags:["gun","weapon"], packageContents:"shells"});
AddItem({name:"Auto Shotgun", min:2, max:8, tags:["gun","weapon"], packageContents:"shells", article:"an"});
AddItem({name:"Sub-Machine Gun", min:1, max:20, tags:["gun","weapon"], packageContents:"bullet(s)"});
AddItem({name:"Combat Rifle", min:1, max:15, tags:["gun","weapon"], packageContents:"bullet(s)"});
AddItem({name:"Military Rifle", min:1, max:30, tags:["gun","weapon"], packageContents:"bullet(s)"});
AddItem({name:"Sniper Rifle", min:1, max:8, tags:["gun","weapon"], packageContents:"bullet(s)"});
AddItem({name:"Antique Pistol", min:1, max:8, tags:["gun","weapon"], packageContents:"round(s)"});
AddItem({name:"Antique Rifle", min:1, max:8, tags:["gun","weapon"], packageContents:"round(s)"});
AddItem({name:"Homemade Pipe Pistol", min:1, max:8, tags:["gun","weapon"], packageContents:"bullet(s)", part:"slide"});
AddItem({name:"Homemade Pipe Rifle", min:1, max:8, tags:["gun","weapon"], packageContents:"bullet(s)", part:"barrel"});

// Gun Accessory
AddItem({name:"9mm Magazine", min:1, max:8, tags:["gunaccessory"], packageContents:"bullet(s)"});
AddItem({name:"10mm Magazine", min:1, max:10, tags:["gunaccessory"], packageContents:"bullet(s)"});
AddItem({name:"SMG Magazine", min:1, max:20, tags:["gunaccessory"], packageContents:"bullet(s)", article:"an"});
AddItem({name:"Combat Rifle Magazine", min:1, max:15, tags:["gunaccessory"], packageContents:"bullet(s)"});
AddItem({name:"Military Rifle Magazine", min:1, max:30, tags:["gunaccessory"], packageContents:"bullet(s)"});
AddItem({name:"Sniper Rifle Clip", min:1, max:8, tags:["gunaccessory"], packageContents:"bullet(s)"});
AddItem({name:"Short Weapon Scope", tags:["gunaccessory"]});
AddItem({name:"Long Weapon Scope", tags:["gunaccessory"]});
AddItem({name:"Pistol Silencer", tags:["gunaccessory"]});
AddItem({name:"Rifle Silencer", tags:["gunaccessory"]});
AddItem({name:"Wood Weapon Stock", tags:["gunaccessory"]});
AddItem({name:"Carbon Weapon Stock", tags:["gunaccessory"]});
AddItem({name:"Collapsible Weapon Stock", tags:["gunaccessory"]});

// Ammo
AddItem({name:"Shotgun Shells", min:2, max:8, tags:["ammo"]});
AddItem({name:"Box of 9mm Ammo", min:2, max:30, tags:["ammo"], packageContents:"bullets"});
AddItem({name:"Box of 10mm Ammo", min:2, max:30, tags:["ammo"], packageContents:"bullets"});
AddItem({name:"Box of Revolver Ammo", min:2, max:20, tags:["ammo"], packageContents:"bullets"});
AddItem({name:"Box of SMG Ammo", min:2, max:40, tags:["ammo"], packageContents:"bullets"});
AddItem({name:"Box of Combat Rifle Ammo", min:2, max:30, tags:["ammo"], packageContents:"bullets"});
AddItem({name:"Box of Military Rifle Ammo", min:2, max:40, tags:["ammo"], packageContents:"bullets"});
AddItem({name:"Box of Sniper Rifle Ammo", min:2, max:20, tags:["ammo"], packageContents:"bullets"});

// Camping
AddItem({name:"Compass", tags:["camping"]});
AddItem({name:"Flashlight", tags:["camping", "tool", "electronic"], part: "batteries"});
AddItem({name:"Sleeping Bag", tags:["camping"]});
AddItem({name:"Box of Matches", min:2, max:20, tags:["camping"], packageContents:"matches"});
AddItem({name:"Lantern", tags:["camping"], part:"lantern fuel"});
AddItem({name:"Folding Chair", tags:["camping"]});
AddItem({name:"Pocket Knife", tags:["camping","weapon"]});
AddItem({name:"Camping Tent", tags:["camping"]});
AddItem({name:"Binoculars", tags:["camping"], article:"none"});

// Tool
AddItem({name:"Hammer", tags:["tool"]});
AddItem({name:"Screwdriver", tags:["tool"]});
AddItem({name:"Wrench", tags:["tool"]});
AddItem({name:"Crowbar", tags:["tool"]});
AddItem({name:"Lighter", tags:["tool"]});
AddItem({name:"Gas Can", min:10, max:75, tags:["tool","auto"], packageContents:"fuel"});
AddItem({name:"Nailgun", tags:["tool"], part:"nailgun battery"});
AddItem({name:"Nailgun Battery", tags:["tool","electronic"]});
AddItem({name:"Box of Nails", min:10, max:30, tags:["tool"], packageContents:"nails"});
AddItem({name:"Duct Tape", tags:["tool"], article:"none"});
AddItem({name:"Scissors", tags:["tool"], article:"none"});
AddItem({name:"Shovel", tags:["tool"]});
AddItem({name:"Chain Saw", min:0, max:80, tags:["tool"], packageContents:"fuel"});
AddItem({name:"Gas Mask", tags:["tool"]});

// Electronic
AddItem({name:"Batteries", min:2, max:8, tags:["electronic"]});
AddItem({name:"Video Camera", tags:["electronic"], part:"batteries"});
AddItem({name:"Walkie-Talkie", tags:["electronic"], part:"batteries"});
AddItem({name:"Disposable Camera", tags:["electronic"], part:"battery"});
AddItem({name:"TV Remote", tags:["electronic"], part:"batteries"});
AddItem({name:"CD Player", tags:["electronic"], part:"batteries"});
AddItem({name:"Alarm Clock", tags:["electronic"], part:"batteries"});
AddItem({name:"Portable Radio", tags:["electronic"], part:"batteries"});
AddItem({name:"Cell Phone", tags:["electronic"], part:"phone battery"});
AddItem({name:"Phone Battery", tags:["electronic"]})

// Clothing
AddItem({name:"Handkerchief", tags:["clothing"]});
AddItem({name:"Leather Jacket", tags:["clothing"]});
AddItem({name:"Rain Jacket", tags:["clothing"]});
AddItem({name:"Designer Shoes", tags:["clothing"], article:"none"});
AddItem({name:"Hooded Sweater", tags:["clothing"]});
AddItem({name:"Boots", tags:["clothing"], article:"none"});
AddItem({name:"Belt", tags:["clothing"]});
AddItem({name:"Cargo Shorts", tags:["clothing"], article:"none"});

// Toy
AddItem({name:"Box of Crayons", min:4, max:32, tags:["toy"], packageContents:"crayons"});
AddItem({name:"Robot Toy", tags:["toy","electronic"], part:"batteries"});
AddItem({name:"Teddy Bear", tags:["toy"]});
AddItem({name:"Baby Rattle", tags:["toy"]});
AddItem({name:"Puzzle Cube", tags:["toy"]});
AddItem({name:"Toy Doll", tags:["toy"]});
AddItem({name:"Toy Handcuffs", tags:["toy"]});
AddItem({name:"Toy Gun", tags:["toy"]});

// Book
AddItem({name:"Fiction Book", tags:["book"], weight:150});
AddItem({name:"Non-Fiction Book", tags:["book"], weight:150});
AddItem({name:"Dictionary", tags:["book"]});
AddItem({name:"Textbook", tags:["book"]});
AddItem({name:"Magazine", tags:["book"]});
AddItem({name:"Notebook", tags:["book"]});
AddItem({name:"Newspaper", tags:["book"]});
AddItem({name:"Comic Book", tags:["book"]});
AddItem({name:"Coloring Book", tags:["book", "toy"]});

// Scrap
AddItem({name:"Scrap Wiring", tags:["scrap","electronic","auto"]});
AddItem({name:"Scrap Metal", tags:["scrap"]});
AddItem({name:"Scrap Plastic", tags:["scrap"]});
AddItem({name:"Plywood Board", tags:["scrap"]});
AddItem({name:"Wood Log", tags:["scrap","camping"]});
AddItem({name:"Lead Pipe", tags:["scrap"]});
AddItem({name:"Steel Bar", tags:["scrap","auto"]});
AddItem({name:"Gold Coin", tags:["scrap"], weight:20});

// Auto
AddItem({name:"Used Car Battery", tags:["auto"]});
AddItem({name:"New Car Battery", tags:["auto"], weight:10});
AddItem({name:"Car Muffler", tags:["auto"]});
AddItem({name:"Car Radio", tags:["auto"]});
AddItem({name:"Car Tire", tags:["auto"]});
AddItem({name:"Used Auto Oil", tags:["auto"]});
AddItem({name:"New Auto Oil", tags:["auto"], weight:20});

// Fred
AddItem({name:"Fred Plushie", tags:["_fred","toy"], emoji:"<:AlmightyFred:757841756363554828>", weight:15});
AddItem({name:"Fred Action Figure", tags:["_fred","toy"], emoji:"<:FredTheSwordsman:757841200001712169>", weight:15});
AddItem({name:"Handheld Fred Game", tags:["_fred","electronic"], emoji:"<:FredTheArmedAndDangerous:757841035786453022>", weight:15, part:"batteries"});
AddItem({name:"Ultra-Rare Fred Collectible", tags:["_fred"], emoji:"<:FredTheGold:923375858754936872>", weight:3, article:"an"});
AddItem({name:"Rare Political Fred Comic", tags:["_fred"], emoji:"<:FredTheCommunist:757841018958905345>", weight:10});
// Dead
AddItem({name:"Dead Rat"});
AddItem({name:"Severed Hand"});
AddItem({name:"Disembodied Head"});
AddItem({name:"Leg Bone"});
AddItem({name:"Bloody Skull"});
AddItem({name:"Zombie Foot"});
AddItem({name:"Human Eyeball"});
// The rest
AddItem({name:"Piece of Jewelry"});
AddItem({name:"Cigar"});
AddItem({name:"Cigarette Pack", min:2, max:20, packageContents:"cigarettes"});
AddItem({name:"Family Photograph"});
AddItem({name:"Acoustic Guitar"});
AddItem({name:"CD Album"});
AddItem({name:"Household Firework"});
AddItem({name:"Handcuffs", part:"key"});
AddItem({name:"Handcuff Key"});
AddItem({name:"Dog Toy"});
AddItem({name:"Umbrella", article:"an"});
AddItem({name:"Bulletproof Vest"});

function AddItem(item)
{
	exports.items.push(new Item(item.name, item.tags, item.min, item.max, item.weight, item.money, item.emoji, item.packageContents, item.part, item.article));
}
