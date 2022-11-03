// JavaScript Document

let lightArmourTable = { "name":"Light Armour",
	"dataKeys":["Armour", "Cost(s)", "Type", "Con Req", "PR", "BR", "SR", "AR", "MTN", "Dura"],
	"data": [
	{
		"Armour":"Hide",
		"Cost(s)":"15",
		"Con Req":"2",
		"PR":"2",
		"BR":"1",
		"SR":"2",
		"AR":"9",
		"MTN":"0",
		"Dura":"8",
	},
	{
		"Armour":"Full Soft Leather",
		"Cost(s)":"18",
		"Con Req":"2",
		"PR":"2",
		"BR":"1",
		"SR":"3",
		"AR":"9",
		"MTN":"0",
		"Dura":"12",
	},
	{
		"Armour":"Full Hard Leather",
		"Cost(s)":"30",
		"Con Req":"3",
		"PR":"3",
		"BR":"2",
		"SR":"4",
		"AR":"9",
		"MTN":"0",
		"Dura":"16",
	},
	{
		"Armour":"Brigandine",
		"Cost(s)":"33",
		"Con Req":"3",
		"PR":"3",
		"BR":"3",
		"SR":"4",
		"AR":"9",
		"MTN":"0",
		"Dura":"16",
	}
]};

let mediumArmourTable = { "name":"Medium Armour",
	"dataKeys":["Armour", "Cost(s)", "Type", "Con Req", "PR", "BR", "SR", "AR", "MTN", "Dura"],
	"data": [
	{
		"Armour":"Leather and Chain",
		"Cost(s)":"63",
		"Con Req":"3",
		"PR":"4",
		"BR":"4",
		"SR":"6",
		"AR":"0",
		"MTN":"10",
		"Dura":"24",
	},
	{
		"Armour":"Scale Mail",
		"Cost(s)":"106",
		"Con Req":"4",
		"PR":"4",
		"BR":"3",
		"SR":"5",
		"AR":"1",
		"MTN":"1",
		"Dura":"24",
	},
	{
		"Armour":"Lamellar",
		"Cost(s)":"111",
		"Con Req":"4",
		"PR":"4",
		"BR":"4",
		"SR":"5",
		"AR":"1",
		"MTN":"1",
		"Dura":"24",
	},
	{
		"Armour":"Full Chain",
		"Cost(s)":"121",
		"Con Req":"4",
		"PR":"5",
		"BR":"4",
		"SR":"5",
		"AR":"1",
		"MTN":"1",
		"Dura":"24",
	}
]};

let heavyArmourTable = { "name":"Heavy Armour",
	"dataKeys":["Armour", "Cost(s)", "Type", "Con Req", "PR", "BR", "SR", "AR", "MTN", "Dura"],
	"data": [
	{
		"Armour":"Full Laminar",
		"Cost(s)":"306",
		"Con Req":"4",
		"PR":"5",
		"BR":"4",
		"SR":"5",
		"AR":"2",
		"MTN":"12",
		"Dura":"28",
	},
	{
		"Armour":"Half Plate",
		"Cost(s)":"326",
		"Con Req":"5",
		"PR":"5",
		"BR":"4",
		"SR":"6",
		"AR":"2",
		"MTN":"12",
		"Dura":"32",
	},
	{
		"Armour":"Full Plate",
		"Cost(s)":"450",
		"Con Req":"5",
		"PR":"7",
		"BR":"4",
		"SR":"7",
		"AR":"3",
		"MTN":"14",
		"Dura":"40",
	}
]};

let meleeAxeTable = { "name":"Axes",
	"dataKeys":["Weapon", "Cost(s)", "Type", "Str Req", "CTN", "ATN", "DTN", "DM", "Reach", "Adv", "Dis", "Dura"],
	"data": [
	{
		"Weapon":"Axe",
		"Cost(s)":"20",
		"Type":"Slashing",
		"Str Req":"3",
		"CTN":"8",
		"ATN":"6",
		"DTN":"8",
		"DM":"8",
		"Reach":"1",
		"Dura":"48"
	},
	{
		"Weapon":"Battle Axe",
		"Cost(s)":"41",
		"Type":"Slashing",
		"Str Req":"4",
		"ATN":"4",
		"DTN":"8",
		"DM":"8",
		"Reach":"1",
		"Adv":"1H or 2H",
		"Dura":"48",
	},
	{
		"Weapon":"Great Axe",
		"Cost(s)":"64",
		"Type":"Slashing",
		"Str Req":"6",
		"ATN":"6",
		"DTN":"9",
		"DM":"10",
		"Reach":"2",
		"Adv":"2H",
		"Dura":"60",
	},
	{
		"Weapon":"Pickaxe",
		"Cost(s)":"20",
		"Type":"Piercing",
		"Str Req":"3",
		"CTN":"8",
		"ATN":"7",
		"DTN":"8",
		"DM":"7",
		"Reach":"1",
		"Adv":"1H or 2H, Penetrating",
		"Dura":"42",
	},
	{
		"Weapon":"War Pick",
		"Cost(s)":"56",
		"Type":"Piercing",
		"Str Req":"5",
		"ATN":"6",
		"DTN":"9",
		"DM":"9",
		"Reach":"2",
		"Adv":"2H, Penetrating",
		"Dura":"54",
	}
]};


let allTables=[lightArmourTable, mediumArmourTable, heavyArmourTable, meleeAxeTable]



function bodyLoad()
{
	/*
		var defaultSelectBox = document.getElementById("defaultSelectID");	
	for (let currentOption = 0; currentOption < defaultOptions.length; currentOption++)
	{
		var newOption = new Option(defaultOptions[currentOption].description, currentOption);
		defaultSelectBox.add(newOption, undefined);
	}
	defaultSelectBox.value = -1;
	
	*/
	
	var modeSelect = document.getElementById("modeSelectID");
	
	var newOption = new Option("Show Tables", 0);
	modeSelect.add(newOption, undefined);
	
	var newOption = new Option("Craft Item", 1);
	modeSelect.add(newOption, undefined);
	
	var newOption = new Option("Enchant Item", 2);
	modeSelect.add(newOption, undefined);
	
	modeSelect.value = 0;
	
	changeMode();
}

function getTableSelectionBox()
{
	// Show Tables Mode
	var tableSelectBox = document.createElement( 'select' );
	
	for (let currentRow = 0; currentRow < allTables.length; currentRow++)
	{
		var newOption = new Option(allTables[currentRow].name, currentRow);
		tableSelectBox.add(newOption, undefined);
	}
	
	tableSelectBox.setAttribute("class", "dd");
	
	tableSelectBox.setAttribute("id", "tableSelectID");
	
	tableSelectBox.setAttribute("onchange", "updateTable()");
	
	tableSelectBox.value = 0;
	
	return tableSelectBox;
}

function getEmptyTableDiv()
{
	var emptyDiv = document.createElement( 'div' );
	
	emptyDiv.setAttribute("id", "tableDivID");
	
	return emptyDiv;
}

function changeMode()
{
	var modeSelect = document.getElementById("modeSelectID");
	var modeValue = parseInt(document.getElementById("modeSelectID").value, 10);
	
	var PageContents = document.getElementById("javaScriptContents");
	PageContents.innerHTML = "";
		
	if (modeValue == 0)
	{
		PageContents.appendChild(getTableSelectionBox());
		PageContents.appendChild(getEmptyTableDiv());
		updateTable();
	}
	else
	{
		PageContents.innerHTML = "";
	}
}

function getFullTable(tableDataObject)
{
	var tableObject = document.createElement('table');
	var keysArray = tableDataObject.dataKeys;
	
	tableObject.setAttribute("class", "tg");
	
	const tr = tableObject.insertRow();
	tr.setAttribute("class", "tg-titleCell");

	for (let column = 0; column < keysArray.length; column++)
	{
		const td = tr.insertCell();
		td.appendChild(document.createTextNode(keysArray[column]));
	}	
	
	for (let row = 0; row < tableDataObject.data.length; row++)
	{
		const tr = tableObject.insertRow();
		tr.setAttribute("class", "tg-dataCell");
		
		for (let column = 0; column < keysArray.length; column++)
		{
			const td = tr.insertCell();
			if (tableDataObject.data[row][keysArray[column]] === undefined)
			{
				td.appendChild(document.createTextNode("-"));
			}
			else
			{
				td.appendChild(document.createTextNode(tableDataObject.data[row][keysArray[column]]));
			}
		}
	}
	
	return tableObject;
}

function updateTable()
{
	var tableDiv = document.getElementById("tableDivID");
	tableDiv.innerHTML = "";
	
	var tableIndex = parseInt(document.getElementById("tableSelectID").value, 10);
	
	tableDiv.append(getFullTable(allTables[tableIndex]));
}





