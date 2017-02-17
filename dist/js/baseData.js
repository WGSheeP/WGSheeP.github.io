
$('.base-left-nav li ').each(function(index, value) {

	$(this).click(function() {
		$('.base-left-nav li ').each(function(index1, value1) {
			$(value1).attr('class', '');
		})
		$(this).attr('class', 'active');
		$('table').each(function(index, value) {
				$(value).attr('style', 'display: none;')
			})

		if(index == 0) {
			$('table').eq(0).attr('style', 'display: block;')
		} else if(index == 1) {
			$('table').eq(1).attr('style', 'display: block;')
		} else if(index == 2) {
			$('table').eq(2).attr('style', 'display: block;')
		}
		$('.table a').each(function(index, value) {
	$(this).click(function() {
		console.log(1)
		if((index) % 3==0) {
			$(this).parent().parent().find('td').attr('contenteditable',true);	
			$(this).parent().attr('contenteditable',false)
		} else if((index) % 3==1){
			var dishArr=[];
			var dishObj={};
			$(this).parent().parent().find('td').attr('contenteditable',false);
			$(this).parent().parent().find('td').each(function  (index,value) {
				dishArr.push(value.innerHTML)

			})
			dishObj={
				
				name:dishArr[0],
				price:dishArr[1],
				unit:dishArr[2],
				picture:dishArr[3],
				types:dishArr[4],
				detail:dishArr[5],
				introduce:dishArr[6],
				putaway:dishArr[7]
			}
			if ($(this).parent().parent()) {
				
			}
			orderData.dish.push(dishObj)
		}else if((index) % 3==2){
			$(this).parent().parent().remove();		
		}
	})
})

	})
})



$('#dishTable').html(template('dishTableTemplate', orderData));
$('#deskTable').html(template('deskTableTemplate', orderData));
$('#memberTable').html(template('memberTableTemplate', orderData));
