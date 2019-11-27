$(function(){//index
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

$(function(){//content
	var len=$('.goodsImg img').length;
	// console.log(len);
	for(var i=0;i<len;i++){
		$('.goodsThumb li').eq(i).on('click',function(){
			var index=$(this).index();
			// console.log(index);
			for(var k=0;k<len;k++){
				$('.goodsImg img').eq(k).removeClass('showThis');
				$('.goodsThumb li').eq(k).removeClass('nowThis');
			}
			$('.goodsImg img').eq(index).addClass('showThis');
			$('.goodsThumb li').eq(index).addClass('nowThis');
		})
	}
	// 商品数量算法
	var Price=$('#price').text()*1;
	var Num=$('#goodsNum').val()*1;
	var Total;
	console.log(Price,Num);
	var getTotal=function(){
		Total=Price*Num;
		$('#goodsNum').val(Num);
		$('#total').text(Total.toFixed(2));
	}
	$('#button-addon1').on('click',function(){
		if(Num>=2){
			Num--;
			console.log(Num);
		}
		getTotal();
		
	})
	$('#button-addon2').on('click',function(){
		Num++;
		console.log(Num);
		getTotal();		
	})
	$('#goodsNum').on('keyup',function(){
		Num=$('#goodsNum').val()*1;
		getTotal();
	})
	getTotal();
})