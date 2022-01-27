exports.GetWeather = GetWeather;
exports.RandomizeWeather = RandomizeWeather;
exports.SetWeather = SetWeather;
exports.SetWeatherChannel = SetWeatherChannel;

const Random = require('./Random');

const weatherTypes = [
	"Clear",
	"Cloudy",
	"Foggy",
	"Misty",
	"Rainy",
	"Stormy",
	"Snowy",
	"Blizzard",
]

const weatherEmoji = [
	":sunny:",
	":partly_sunny:",
	":cloud:",
	":white_sun_rain_cloud:",
	":cloud_rain:",
	":thunder_cloud_rain:",
	":cloud_snow:",
	":fog:",
]

const weatherIncreaseChance = 30;
const weatherDoubleIncreaseChance = 10;
const weatherDecreaseChance = 50;
const weatherDoubleDecreaseChance = 30;

var weatherChannel = null;

var weather = {setting:0};
var oldWeather = 0;
var maxWeathers = 8;
var weatherUpdateTime = 1000 * 60 * 60 * 6; //6 hours

setInterval(TryWeatherChange, weatherUpdateTime);

function GetWeather()
{
    return String(weatherTypes[weather.setting] + " " + weatherEmoji[weather.setting]);
}

function RandomizeWeather()
{
    weather.setting = Random.Range(0, weatherTypes.length);
	UpdateWeatherChannel();
}

function SetWeather(id)
{
	let weatherID = Number(id);
	if(isNaN(weatherID) || weatherID < 0 || weatherID >= weatherTypes.length)
		return false;
	weather.setting = weatherID;
	UpdateWeatherChannel();
	return true;
}

function SetWeatherChannel(channel)
{
    weatherChannel = channel;
	UpdateWeatherChannel();
}

function TryWeatherChange()
{
	let rand = Random.Range(1,100);
	if(rand < weatherIncreaseChance)
	{
		rand -= weatherIncreaseChance;
		if(rand < weatherDoubleIncreaseChance)
			weather.setting += 2;
		else
			weather.setting += 1;
		
		if(weather.setting > maxWeathers - 1)
			weather.setting = maxWeathers - 1;
	}
	else 
	{
		rand -= weatherIncreaseChance;
		if (rand < weatherDecreaseChance)
		{
			rand -= weatherDecreaseChance;
			if(rand < weatherDoubleDecreaseChance)
				weather.setting -= 2;
			else
				weather.setting -= 1;
			
			if(weather.setting < 0)
				weather.setting = 0;
		}
	}

	if(weather.setting != oldWeather)
	{
		oldWeather = weather.setting;
		UpdateWeatherChannel();
	}
}

function UpdateWeatherChannel()
{
	if(weatherChannel)
		weatherChannel.setName("weather: " + weatherTypes[weather.setting]);
}