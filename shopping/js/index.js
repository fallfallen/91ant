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
	// console.log(Price,Num);
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

$(function(){//支付
	var Pro,Cit,Cou,Faddr,Name,Tel;
	$('.firstSave').on('click',function(){
		Pro=$('#inputGroupSelect01').find("option:selected").text();
		Cit=$('#inputGroupSelect02').find("option:selected").text();
		Cou=$('#inputGroupSelect03').find("option:selected").text();
		Faddr=$('#fullAddress').val();
		Name=$('#gueName').val();
		Tel=$('#gueTel').val();
		if(Pro=='省份'||Cit=='城市'||Cou=='县区'||Faddr==''||Name==''||Tel==''){
			alert("请完善您的地址信息");
		}else{
			var Li=document.createElement('li');
			var newAddr=`<h6><span>`+Name+`</span><span>`+Tel+`</span></h6>
										<p>`+Pro+Cit+Cou+Faddr+`</p>
										<div class="reviseAddress">
											<a data-toggle="modal" data-target="#exampleModal">
											  修改地址
											</a>
										</div>`
			Li.innerHTML+=newAddr;
			$('.existAddress ul').append(Li);
			$('.noAddress').css('display','none');
			exist();
		}
		
	})
	var Pro2,Cit2,Cou2,Faddr2,Name2,Tel2;
	$('.modalSave').on('click',function(){
		Pro2=$('#inputGroupSelect04').find("option:selected").text();
		Cit2=$('#inputGroupSelect05').find("option:selected").text();
		Cou2=$('#inputGroupSelect06').find("option:selected").text();
		Faddr2=$('#fullAddress2').val();
		Name2=$('#gueName2').val();
		Tel2=$('#gueTel2').val();
		if(Pro2=='省份'||Cit2=='城市'||Cou2=='县区'||Faddr2==''||Name2==''||Tel2==''){
			alert("请完善您的地址信息");
		}else{
			var Li=document.createElement('li');
			var newAddr=`<h6><span>`+Name2+`</span><span>`+Tel2+`</span></h6>
										<p>`+Pro2+Cit2+Cou2+Faddr2+`</p>
										<div class="reviseAddress">
											<a data-toggle="modal" data-target="#exampleModal">
											  修改地址
											</a>
										</div>`
			Li.innerHTML+=newAddr;
			$('.existAddress ul').append(Li);
			$('#exampleModal').modal('hide');
			exist();
		}
		
	})
	var exist=function(){
		var addressLen=$('.existAddress ul li').length;
		for(var k=0;k<addressLen;k++){
			$('.existAddress ul li').eq(k).on('click',function(){
				$(this).siblings().removeClass('thisAddress');
				$(this).addClass('thisAddress');
			})
		}
	}
	exist();
	var payLen=$('.otherPay a').length;
	// console.log(payLen);
	for(var j=0;j<payLen;j++){
		$('.otherPay a').eq(j).on('click',function(){
			$(this).siblings().removeClass('thisPay');
			$(this).addClass('thisPay');
		})
	}
	$('#payLink').on('click',function(){
		if($('.thisAddress').length==0){
			alert("请选择收货地址!");
		}else{	
			if($('.thisPay').length==0){
				alert("请选择支付方式!");
			}		
		}
	})
})