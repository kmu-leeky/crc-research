/* Annotorious Initialize */
function init(){
	anno.makeAnnotatable(document.getElementById('testimage'));
	importPatternListID();
	//Polygonmode
	anno.addPlugin('PolygonSelector', { activate: false });

	anno.addHandler('onAnnotationCreated', function(annotation){
		//console.log(annotation.text);
		getData(annotation);
	});
};


/* get annotation data */
function getData(annotation){

	text = $("#selectTagName option:checked").text();
	annotation.text = text;
	sourceImage = annotation.src;
	geometry = annotation.shapes[0].geometry; // annotation shanpes is array form. 
	// and you want to get the geometry, must be toget previous row.
	changeJson(text, sourceImage, geometry);

};

/* file create function */
function changeJson(text, sourceImage, geometry){
	var annotationInfo = new Object();
	annotationInfo.tag = text;
	annotationInfo.anno = geometry;
	annotationInfo.imageLocation = sourceImage;

	var toJson = JSON.stringify(annotationInfo);
	console.log(toJson);

	//if(sourceImage != 
	var addJson  = addJsonData(toJson, text);

}


function addJsonData(toJson, tag){
	var req = new XMLHttpRequest();
	var url = window.location.href + "/php/formToJson.php";

	// why don't use XMLHttpRequests????
	//
	//	req.open("POST", url, true);
	//	req.onreadystatechange = function(){
	//		if(this.status == 200){
	//			console.log("test");
	//		}
	//	
	//	};
	//	sort = "data=".concat(toJson);
	//	console.log(sort);
	//	req.send("data=stringdata");

	// POST send
	$.ajax({
		data: 'data=' + toJson + "&tag=" + tag,
		url: url,
		method: 'POST',
		success: function(msg){
			console.log(msg);
		}

	});
}

function importPatternListID(){
	//console.log((document.getElementsByClassName("annotorious-annotationlayer")[0].getElementsByClassName("annotorious-editor")[0].getElementsByClassName("annotorious-editor-text goog-textarea")[0].id = 'annoTag'));

	$('textarea').replaceWith("<select id='selectTagName'>" + $(this).text() + "</select>");

	var tagNames = ["red","blue","green","apple","pizza"];
	
	tagNames.forEach(tag => {
		var typeOption = document.createElement('option');
		var tagOption = document.createTextNode(tag);
		typeOption.appendChild(tagOption);
		document.getElementById("selectTagName").appendChild(typeOption);
	});
}

/*	 autocomplete example */
/* 
   var completedText;
   if (opt == 1){
   completedText = [
   "apple",
   "green",
   "red"
   ];
   };

   };

   $( "#annoTag" ).autocomplete({
source: completedText
});
};
 */
