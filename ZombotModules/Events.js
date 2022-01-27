//Events
class Event
{
	constructor(text, min = 1, max = 1, tags = [], weight = 50)
	{
		this.text = text;
		this.min = min;
		this.max = max;
		this.tags = tags;
		this.weight = weight;
	}
}

exports.eventTags = [
	"zombie",
	"faction",
]

exports.events = [];

// Zombie
AddEvent({text:"You notice # zombies ahead of you. They are casually wandering and evenly separated.", min:2, max:8, tags:["zombie"]});
AddEvent({text:"# fresh zombies wander nearby. They are about as strong as a living human.", min:2, max:6, tags:["zombie"]});
AddEvent({text:"You notice # zombies ahead of you. They are casually wandering.", min:2, max:10, tags:["zombie"]});
AddEvent({text:"A herd of about # zombies is heading your direction.", min:10, max:28, tags:["zombie"]});
AddEvent({text:"Suddenly, your location is surrounded by about # zombies. They're moving in.", min:10, max:20, tags:["zombie"]});
AddEvent({text:"# zombies are attracted to a nearby sound, they are loitering around it.", min:3, max:8, tags:["zombie"]});
AddEvent({text:"You come across a wall of about # zombies blocking your path.", min:20, max:50, tags:["zombie"]});
AddEvent({text:"A bloated zombie approaches with a big round stomach. (If anything pierces the stomach, it explodes, and guts go everywhere. The sound would attract # more zombies nearby.)", min:2, max:7, tags:["zombie"]});
AddEvent({text:"A zombie child wanders with # other zombies.", min:2, max:8, tags:["zombie"]});
AddEvent({text:"A couple zombies see you and both come towards you.", tags:["zombie"]});
AddEvent({text:"A few zombies appear at once, but they haven't noticed you.", tags:["zombie"]});
AddEvent({text:"A zombie with police equipment wanders nearby.", tags:["zombie"]});
AddEvent({text:"A zombie clown appears among the zombies.", tags:["zombie"]});
AddEvent({text:"A crawling zombie makes its way towards you.", tags:["zombie"]});
AddEvent({text:"A zombie approaches from behind.", tags:["zombie"]});
AddEvent({text:"A zombie in a hazmat suit wanders nearby.", tags:["zombie"]});
AddEvent({text:"You spot a zombie tied to something and stuck.", tags:["zombie"]});
AddEvent({text:"You spot a zombie hanging from something.", tags:["zombie"]});
AddEvent({text:"A zombie ahead hears you coming and sprints faster than a human towards you.", tags:["zombie"]});
AddEvent({text:"A zombie sits motionless ahead, but it doesn't react until you get close to it.", tags:["zombie"]});
AddEvent({text:"A zombie approaches, but it's missing arms and a lower jaw, so it can't hurt anyone.", tags:["zombie"]});
AddEvent({text:"A zombie approaches, but it doesn't have eyes. It seems to \"see\" through smell.", tags:["zombie"]});
AddEvent({text:"A zombified dog appears. It looks sick and nasty.", tags:["zombie"]});
AddEvent({text:"Some zombies wander around a recently dead body.", tags:["zombie"]});
AddEvent({text:"A fat zombie dressed in a santa outfit walks nearby.", tags:["zombie"]});
AddEvent({text:"A zombie biker wanders nearby. It has a gun on its person.", tags:["zombie"]});
AddEvent({text:"You notice a zombie pinned under something.", tags:["zombie"]});
AddEvent({text:"A zombie approaches, but its head is just barely hanging onto its body.", tags:["zombie"]});
AddEvent({text:"A zombie dressed in maintenance attire (orange vest) wanders nearby. They might have tools on them.", tags:["zombie"]});

// Faction
AddEvent({text:"A biker club cruises around nearby. They have about # members, and look mean.", min:4, max:15, tags:["faction"]});
AddEvent({text:"A group of # raider suddenly arrives and starts rushing the place for loot. (If you are in a safehouse, they broke in without warning.)", min:20, max:30, tags:["faction"]});
AddEvent({text:"A turret-mounted truck comes towards you, armed by a raider. They look ready to kill.", tags:["faction"]});
AddEvent({text:"The next building you enter appears to be a small safehouse. If you investigate it, you'll realize it's a faction outpost.", tags:["faction"]});
AddEvent({text:"A military vehicle cruises in the distance. A perceptive person would see there are symbolic markings on it, appearing to be a faction vehicle.", tags:["faction"]});
AddEvent({text:"You come across a flag with symbolic markings on it. It appears to be from a faction.", tags:["faction"]});
AddEvent({text:"A vehicle with faction markings is parked ahead.", tags:["faction"]});
AddEvent({text:"You come across a couple faction member bodies on the ground. They were murdered.", tags:["faction"]});
AddEvent({text:"You see a faction outpost. # people in faction colors patrol it.", min:2, max:8, tags:["faction"]});
AddEvent({text:"You spot # people with faction clothes searching an area, they haven't noticed you yet.", tags:["faction"]});

// The Rest
AddEvent({text:"A vehicle labeled \"General Trader\" cruises nearby.", weight:100});
AddEvent({text:"A vehicle labeled \"Food 4 Trade\" cruises nearby.", weight:100});
AddEvent({text:"A vehicle labeled \"Gunz\" cruises nearby.", weight:100});
AddEvent({text:"You come across a small shelter. You see about # living residents.", min:2, max:8});
AddEvent({text:"You spot a caravan of # vehicles cruising through.", min:3, max:7});
AddEvent({text:"A military convoy passes through with # vehicles. They are heavily armed.",  min:3, max:6});
AddEvent({text:"The next time you fire a gun, it will jam. Your character is unaware."});
AddEvent({text:"You hear a vehicle in the distance. The sound is getting closer to you."});
AddEvent({text:"You come across an abandoned vehicle that looks like it still runs. A zombie is locked inside with the keys."});
AddEvent({text:"You see a living animal ahead."});
AddEvent({text:"You spot a crashed car ahead of you. It's totalled."});
AddEvent({text:"You come across a recently dead body. They were executed."});
AddEvent({text:"A bullet comes out of nowhere and hits near your feet."});
AddEvent({text:"A quad bike can be heard in the distance, you can hear it but you can't see it."});
AddEvent({text:"A military plane flies overhead. It throws out a container with a parachute. It falls about a mile away."});
AddEvent({text:"A helicopter flies overhead. It doesn't notice you, and keeps on flying away."});
AddEvent({text:"Roll a die. If it's a 1, someone in your group will be bitten at your next zombie encounter. (If you're alone, you will be bitten.)"});
AddEvent({text:"Flip a coin. If it's heads, the next time you encounter survivors, they will be hostile. (If tails, you choose.)"});
AddEvent({text:"The next time you're in a car, a tire will blow on the highway."});
AddEvent({text:"You come across a vehicle with collected supplies. It's not abandoned, but you also don't see anyone around."});
AddEvent({text:"You come across a bus which was a mobile safehouse. It is wrecked beyond repair, but may contain leftover supplies."});
AddEvent({text:"You will come across a military outpost in your travels."});
AddEvent({text:"Roll a die. If it's a 3 or 6, one of your group will contract a viral illness (not the zombie illness, but a zombie could give it). You decide the effects."});
AddEvent({text:"For a moment, you forget that zombies have taken over and you feel pretty normal."});
AddEvent({text:"You suddenly remember a bad memory from your past, before the outbreak."});
AddEvent({text:"You suddenly remember a good memory from your past, before the outbreak."});
AddEvent({text:"A van with survivors in it cruises past. If you are alone, flip a coin. If it's Tails, they stop and shoot you with a taser. You are kidnapped. You decide how it plays out.", weight:20});
AddEvent({text:"On the road, you'll come across a semi-truck. Its trailer is locked shut. Opening it would reveal a safehouse for one person."});
AddEvent({text:"A boxtruck is crashed on the side of the road. It's back is locked. Roll a 6-sided die. If it's a 6, it will be full of whatever your next \"loot\" item is. If it's a 5, it will be half full. Otherwise it will be empty."});
AddEvent({text:"You hear the sound of gunfire in the distance."});
AddEvent({text:"You suddenly hear an explosion in the distance."});
AddEvent({text:"You hear the sound of a plane flying overhead. Suddenly it sputters and comes crashing down about a mile away."});
AddEvent({text:"The next time you search a garage, barn, or automotive building, etc. you will find a vehicle in perfect condition (\";gv\" and ignore parts and status)"});
AddEvent({text:"You see a wrecked maintenance vehicle. It may contain tools."});
AddEvent({text:"You come across a looted aidrop. It's empty."});
AddEvent({text:"You come across several piles of bones where lots of bodies were burned in the early days of the apocalypse."});
AddEvent({text:"The next time you enter a building, it will have a booby trap on the front door. (Roll a 10-sided die. If it's a 10, the trap removes an arm or leg, if its 6-9, it does heavy damage, if it's 1-5, it misses or is a dud. Disregard the roll if your character is perceptive enough to notice the trap.)", weight:20});

function AddEvent(event)
{
	exports.events.push(new Event(event.text, event.min, event.max, event.tags, event.weight));
}