//管理页面逻辑处理
//通过获取到的数据，逐一渲染页面的数据结构

window.onload = function() {
	$('#container-box').load('manage.html');	
	$('.manage-tools li').each(function(index, value) {
		
		$(this).click(function() {
			$('.manage-tools li').attr('class', '');
			$(this).attr('class', 'active');

			if($(this).find('a').eq(0).html() == '前台管理') {

				$('#container-box').load('manage.html');

			} else if($(this).find('a').eq(0).html() == '收银明细') {
				$('#container-box').load('cash.html');
			} else if($(this).find('a').eq(0).html() == '基础资料') {
				$('#container-box').load('base-data.html');
			} else if($(this).find('a').eq(0).html() == '业绩报表') {
				$('#container-box').load('statement.html');
			}
		})
	})


}