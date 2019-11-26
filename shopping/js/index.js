$(function(){
	var items=document.getElementsByClassName('item-title');
	var itemsLen=items.length;
	// console.log(itemsLen);
	var itemTitle;
	for(var i=0;i<itemsLen;i++){		
		itemTitle='';
		itemTitle=$('.item-title').eq(i).text();
		// console.log(itemTitle);
		$('.item-title').eq(i).attr('title',itemTitle);
	}
})