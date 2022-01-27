exports.Range = Range;
exports.Weighted = Weighted;

// Random value from min to max (inclusive)
function Range(min, max)
{
	if(max <= min)
		return min;
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

// Random item from the array (items must have "weight" variable) 
function Weighted(array)
{
    let totalWeight = 0;
    for(i in array)
    {
        totalWeight += array[i].weight;
    }

    //Get weighted random from pool
	let value = Range(0, totalWeight - 1);
	for(i in array)
	{
		if(value < array[i].weight)
			return array[i];
		else
			value -= array[i].weight;
	}
}