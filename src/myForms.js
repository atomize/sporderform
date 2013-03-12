var counter = 1;
function addSpan() {
$('#demo-2-form').dform({
	"html":[{	    
		"type" : "text",
		"name":"person.span["+(counter+1)+"]",
	    "id" : "the-span",
	    "value":"Boom",
	    "html":"You must login"+(counter+1)	},
	{	    
		"type" : "text",
		"name":"person.spon["+(counter+1)+"]",
	    "id" : "the-span",
	    "value":"oh",
	    "html":"You must login"+(counter+1)	}]
});
	counter++;
	};

$('#demo-2-form').dform({
    "action":"index.html",
    "method":"post",
    "html":[
        {
            "type":"fieldset",
            "caption":"Customer information",
            "html":[
                {
                    "name":"person.name.first",
                    "caption":"First Name",
                    "type":"text",
                    "placeholder":"Nancy",
                    "validate":{
                        "email":false
                    }
                },
                {
                    "name":"person.name.last",
                    "caption":"Last Name",
                    "type":"text",
                    "placeholder":"McFancy",
                    "validate":{
                        "email":false
                    }
                },
                {
                    "type":"radiobuttons",
                    "caption":"New Customer?",
                    "name":"purchaseOrder.customer.status",
                    "class":"labellist",
                    "options":{
                        "1":"Yes",
                        "0":"No"
                    }
                },
                            ]
        },
        {
            "type":"fieldset",
            "caption":"Address information",
            "html":[
                {
                    "name":"name",
                    "caption":"Your name",
                    "type":"text",
                    "placeholder":"E.g. John Doe"
                },
                {
                    "name":"address",
                    "caption":"Address",
                    "type":"text",
                    "validate":{ "required":true }
                },
                {
                    "name":"zip",
                    "caption":"ZIP code",
                    "type":"text",
                    "size":5,
                    "validate":{ "required":true }
                },
                {
                    "name":"city",
                    "caption":"City",
                    "type":"text",
                    "validate":{ "required":true }
                },
                {
                    "type":"select",
                    "name":"continent",
                    "caption":"Choose a continent",
                    "options":{
                        "america":"America",
                        "europe":{
                            "selected":"true",
                            "id":"europe-option",
                            "value":"europe",
                            "html":"Europe"
                        },
                        "asia":"Asia",
                        "africa":"Africa",
                        "australia":"Australia"
                    }
                }
            ]
        },
            ]
});
