$(document).ready(function() {
	var req = $.getJSON({
		url: "https://api.dribbble.com/v1/shots/?access_token=YOUR_TOKEN&per_page=100&sort=popular",
		format: "json" // or jsonp
	});
					
					
req.done(function(data) {
		
		/* --- get info from each value --- */ 
							 
			$.each(data, function(key, value) {
	/* Storing values in variables also works
	 *
	 * var id = $('<p />', { text: value.id });
	 * var img = $("<img />", {src: value.images.normal} );
	 */
	
				
$(" #main ").append("<div> <h2>" + value.title + "</h2> </div>" + "<img src='" 
+ value.user.avatar_url + "'class= 'userAvatar' />")
.addClass("verdanaTitle w3-xxlarge");
				
	$(" #main ").append("<p><b>" + value.user.name + "</b></p>").addClass("verdanaDesc");
				
		
				
$('<div id="imgShots" class= "w3-third w3-container w3-margin-bottom"> <a href="' 
+ value.html_url + '" ><img src="' + value.images.normal 
+ '" id= "shots" class= "w3-card-4" /></a>'
+ '<div class= "w3-top-left w3-black w3-padding" style= "max-width: 93%;" ><i class="fa fa-eye" style= "font-size: 20px; color: #fff;" />'
+ '<span style= "color: #fff;"> ' + ' ' + value.views_count + '</span>' 
+ '<div id="desc" class="w3-container w3-dark" style="max-width: 90%; max-height: 30%; display: block;" >' + value.description + '</div>')
	.clone().appendTo("#main").clone();
				
				
			
			});
			
			
	});					
	
});    
	
	
	
