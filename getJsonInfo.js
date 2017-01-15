$(document).ready(function() {
	var req = $.getJSON({
		url: "https://api.dribbble.com/v1/shots/?access_token=26af61b5e8eeaf8d1142d4d68a23b03f67f2d01a248c22561f521c1cbf133825&per_page=100&sort=popular",
						
			format: "json"
	});
					
					
req.done(function(data) {
		//console.log(data);
						
	for(x in data)
		{
			console.log(data[x]);
							
	}
						
	/* ----------------- CÓDIGO FUNCIONAL ----------------------------------
	$('div').append('<p />' + data.id + '<p />' + data.description + '<br >');
		
		

		$.each(data.images, function(i, item) {
			
			
			
			$('img').attr("src", data.images.normal);
		});
		------------------------------------------------------------------------ */
		
		
		/* --- get info from each value --- */ 
							 
			$.each(data, function(key, value) {
				
				//var id = $('<p />', { text: value.id });
				var title = $("<h2 />", {text: value.title} );
				var desc = value.description;
				var img = $("<img />", {src: value.images.normal} );
				var user = $("<p />", {text: value.user.name} );
				var userAvatar = $("<img />", {src: value.user.avatar_url} );
				var viewsCount = $("<p />", {text: value.views_count} );
				
				$(userAvatar).addClass("userAvatar w3-padding-8");
				//$(title, desc, user, userAvatar).addClass('w3-container w3-white');
				$(img).css("width", "100%").addClass("w3-card-4 w3-row-padding");
				
				//$(title).addClass("verdanaTitle w3-xxlarge");
				
				$(desc).addClass("w3-large");
				
				$(" #main ").append("<div> <h2>" + value.title + "</h2> </div>" + "<img src='" + value.user.avatar_url + "'class= 'userAvatar' />")
				.addClass("verdanaTitle w3-xxlarge");
				$(" #main ").append("<p><b>" + value.user.name + "</b></p>").addClass("verdanaDesc");
				
				
				
				
				$('<div id="imgShots" class= "w3-third w3-container w3-margin-bottom"> <a href="' + value.html_url + '" ><img src="' + value.images.normal 
				+ '" id= "shots" class= "w3-card-4" /></a>'
				+ '<div class= "w3-top-left w3-black w3-padding" style= "max-width: 93%;" ><i class="fa fa-eye" style= "font-size: 20px; color: #fff;" />'
				+ '<span style= "color: #fff;"> ' + ' ' + value.views_count + '</span>' 
				+ '<div id="desc" class="w3-container w3-dark" style="max-width: 90%; max-height: 30%; display: block;" >' + value.description + '</div>')
				.clone().appendTo("#main").clone();
				
				
			
			});
			
			
	});					
	
});    
	
	
	