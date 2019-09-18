var znavImages = document.querySelectorAll("#znav_two a img")

var prevent = 0;


for (var  i = 0; i < znavImages.length; i++) {
	 znavImages.index = i;
	
	znavImages[i].onmouseover = function(){
		
		for (var j = 0; j < znavImages.length; j++) {
			znavImages[j].style.width = "100px";
			znavImages[j].style.height = "100px";
		}
		this.style.width = "107px";
		this.style.height = "107px";
		
		this.onmouseout = function(){
			this.style.width = "100px";
			this.style.height = "100px";
		}
	}
}


// 
// $(function (){
// 	
// 	
//     $.ajax({
//         url: 'zdata/nav_pic.json',
//         type: 'get',
//         dataType: 'json',	
//         cache: false,	
//         success: function (json){	
//             var results = '';	
// 		
//             $.each(json,function (index,value){	//遍历json	
// 				console.log(index);
//                 results += '<a href=""><img src="'+value.imgurl+'" alt=""></a>';
// 				
//             });
// 			
// 		$('.pic_scroll_left').html(results);
// 		
//         }
//     });
// });
// 