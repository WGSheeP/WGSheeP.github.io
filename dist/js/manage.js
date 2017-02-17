	$('.deskTab li').each(function(index, value) {

		$(this).click(function() {
			$('.deskTab li').attr('class', '')
			$(this).attr('class', 'active')
		})
	})
	var deskArr = [];
	$(orderData.orderMassage).each(function(index, value) {
		if(value.deskStatus) {
			deskArr.push(value.deskNum);
			//			alert(0)
		}

	})

	$('.desk-list').html(template('desk-listTemplate', {
		desk: orderData.desk
	}));
		
	$('.desk-list h5').each(function(index, value) {
		//		alert(1)
		$(deskArr).each(function(index1, value1) {
			//				console.log(index==parseInt(value1))			
			if(index + 1 == parseInt(value1)) {
				//				alert(1)
//				console.log(value)
				$(value).attr('style', 'background: #d9534f;')
				$(value).html('占用');
				$(value).attr('onoff', true);
			}

		})
	})
	var currentDesk = [];
	$('.desk-list li').each(function(index, value) {
		$(this).click(function() {
			$('.desk-list h5').each(function(index) {
				if($(this).attr('onoff')) {
					$(this).attr('style', 'background: #d9534f;')
				}

			})
			currentDesk = [];
			var h = $(this).find('h5').eq(0);
			if($(h).attr('onoff')) {

				$(h).attr('style', 'background: #f0ad4e;');
				$(orderData.orderMassage).each(function(index1, value1) {
					if(parseInt(value1.deskNum) == (index + 1) && value1.deskStatus) {
						currentDesk.push(value1);

					}
				})
				$('#detailTable').html(template('detailTemplate', {
					current: currentDesk[0]

				}))

				$('.currentList').html(template('currentListTemplate', {
					current: currentDesk[0]
				}));

			}
		})
	})

		$('.allList').html(template('allListTemplate', {
			allData: orderData.desk,
			usedDesk: deskArr
		}));
