    //John Williams
    //Oct 25, 2012
    //ASD WK 1
    //The Flower Shop

	function autoFillData(){
		var json = {
			"contact1": {
				"fname": ["Name:", "Jay Williams"],
				"email": ["Email:", "jay@fullsail.edu"],
				"url": ["Url:", "www.clubugly.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Daisies"],
				"borndate": ["Date of birth:", "2011-12-09"],
				"quantity": ["Quantity:", "12"],
				"comments": ["Additional Info:", "Make them cold!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact2": {
				"fname": ["Name:", "Alvin Williams"],
				"email": ["Email:", "alvin@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Timeless Tulips"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a mug!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact3": {
				"fname": ["Name:", "Calvin Williams"],
				"email": ["Email:", "calvin@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a mug!"],
				"terms": ["TOS:", "Yes"]
			}
						
		};
		
		//Store the JSON OBJECT in local storage
		for(var n in json){
			var id 			= Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}		