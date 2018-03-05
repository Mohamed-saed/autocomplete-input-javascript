function fillauto(){
	var qval =  $('#url').val();
	var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
			,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
			,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
			,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
			,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
			,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
			,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
			,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
			,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
			,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
			,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
			,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
			,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
			,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
			,"Yemen","Zambia","Zimbabwe"];
	var filteredarry = [];
	if(qval.length > 0){
		for (var j=0; j<country_list.length; j++)if (country_list[j].toLowerCase().indexOf(qval) == 0) filteredarry.push(country_list[j]);
		$('#list').html("");
		var arrayLength = filteredarry.length;
		if(arrayLength > 0){
			for (var i = 0; i < arrayLength; i++) {
				
				$('#list').append("<li class='dli'>"+filteredarry[i].toLowerCase().replace(qval, '<b>'+qval+'</b>')+"</li>");
			}
			
		}else{
			$('#list').html('<p style="font-style:italic;color: #ccc;">&nbsp; no result found</p>');
		}
	}else{
		$('#list').html('<p style="font-style:italic;color: #ccc;">&nbsp; type something</p>');
	}
}

function selectval(elment)
{
	$('.dli').removeClass('selected');
	elment.addClass("selected");
	settextval(elment.html()); 
}
function settextval(val){
	val = val.replace("<b>", "").replace("</b>", "");;
	$('#url').val(val); 
}

$("#url").keyup(function(e) {
    if (e.keyCode == 13) { // enter
        if ($("#list").is(":visible") && $(".selected").length > 0) {
	        settextval($(".selected").html()); 
	        getsonglist();
        }else{
        	getsonglist();
        }
    }
    else if (e.keyCode == 38) { // up
        var selected = $(".selected");
        if (selected.prev().length == 0) {
        	selectval(selected.siblings().last());
        } else {
        	selectval(selected.prev());
        }
    }
    else if (e.keyCode == 40) { // down
        var selected = $(".selected");
        if(selected.length == 0){
        	selectval($(".dli").first());
        }else{
	        if (selected.next().length == 0) {
	        	selectval(selected.siblings().first());
	        } else {
	        	selectval(selected.next());
	        }
        }
    }
    else{
    	fillauto();
    }
});

$('#url').focusin(  
  function(){  
    $('#list').show('slow');  
    $('#url').keyup();
  }).focusout(  
  function(){  
    $('#list').hide('slow');  
});

$('#list').on("click", ".dli", function() {
 	settextval($(this).html()); 
});

$('#list').on("mouseover", ".dli", function() {
   	selectval($(this));   	
});
