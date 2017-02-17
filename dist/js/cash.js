//window.onload=function  () {切记这个坑，刷新与不刷新的特性在代码执行时的区别，不要同时使用

	$('#search-btn').click(function  () {	
		var arr=[];
		var n=0;
		var totalArr=[];
		var str='';		
		$(orderData.orderMassage).each(function  (index,value) {
			if (value.deskNum==$('#deskNum-data').val()&&value.deskStatus) {
				if ($('#deskNum-data').val()!=str) {
				$('.cash-massage-list input').val('')
				arr.push($(orderData.orderMassage)[index])
				$(arr[0].ordering).each(function  (index,value) {
					n+=value.price;
				})
				totalArr.push(n);			
				$('.cash-massage-list').html(template('cashOrderTemplate',{orderList:arr}))	
				$('#cashData').html(template('cashDataTemplate',{orderList:arr}))
				$('.cash-desk-list').html(template('cashDataStatsTemplate',{total:totalArr}))
				str=$('#deskNum-data').val();
				}

		}
			
		})

	})
//	$('#cash-btn').click(function  () {
//		var Change = parseFloat($('#chargeCash').val()-$('.payable').val())
//
//		$('.chargeCash').val($('#chargeCash').val())
//		$('#change').val(Change);
//		
//	})
//	var cashNum=0;		
	var cashText='';
	$('.account input').each(function  (index,value) {
		$(this).click(function  () {
			if ($(this).val()=='退格') {
				cashText=cashText.substring(0,cashText.length-1)
				console.log(cashText)
			}else if($(this).val()=='清除'){
				cashText='';				
				$('#change').val('');				
			}else if($(this).val()=='确定'){
				var Change = parseFloat($('#chargeCash').val()-$('.payable').val());		
				$('.chargeCash').val($('#chargeCash').val());
				$('#change').val(Change);				
			}else {
			cashText+=$(this).val();
			console.log(cashText)				
			}

			$('#chargeCash').val(cashText)				
		})
					
		})


