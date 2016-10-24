$(function(){
	// table
	$('.tableMoreBtn').click(function(){
		$('#disTr').removeClass('pagination-detail');
		$('.tableMoreBtn').hide();
	});
	$('.tableCloseBtn').click(function(){
		$('#disTr').addClass('pagination-detail');
		$('.tableMoreBtn').show();
	});
	// table a:active
	$('.alermSearch-table').children('tbody').children('tr').children('td').children('a').click(function(){
		$(this).parent('td').children('a').removeClass('active');
		$(this).addClass('active');
	});
	//table bootstrap
	(function(){
		$('.que').click(function(){
			var parameter = $('.ye').val();
			$('.mytable').bootstrapTable('selectPage', parameter);
			// 	$('.mytable').bootstrapTable('toggleView');
		})	
		$('.mytable').bootstrapTable({
				sortName: 'category',
				sortOrder: 'desc',
				pagination: 'true',
				pageSize: 10,
				paginationHAlign:'right',
				paginationLoop:'false',
			    columns: [{
			    	checkbox: 'true',
			    }, {
			    	width: '200',
			        field: 'name',
			        title: '矫正对象'
			    }, {
			    	width: '110',
			        field: 'level',
			        title: '告警级别'
			    }, {
			    	width: '120',
			        field: 'category',
			        title: '告警类别'
			    }, {
			    	width: '105',
			    	order:'desc',
			        field: 'time',
			        title: '时间'
			    }, {
			    	width: '85',
			        field: 'state1',
			        title: ' '
			    }, {
			    	width: '100',
			        field: 'state',
			        title: '状态'
			    }, {
					field: 'address',
			        title: '地址'
			    }, 
			    {
			    	width: '200',
			        field: 'operation',
			        title: ' '
			    }],
			    data: [{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救1',
			        time: '6.23 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救2',
			        time: '6.26 11:33:20',
			        state1: '<span class="red">1</span>',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救1',
			        time: '6.27 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救4',
			        time: '6.25 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			    	name: '<img src="images/objName.png" class="objName"/>某某某',
			        level: '<span class="Lv1">一级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦'
			    },{
			    	name: '<img src="images/objName.png" class="objName"/>某某某',
			        level: '<span class="Lv2">二级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦',
			        state1: '<a><i title="ECU911返回结果" class="I-messages"></i></a><a><i title="自动处理" class="I-auto"></i></a>',
			        operation: '<a><i title="解除" class="I-relieve"></i></a><a><i title="推送ECU911" class="I-911">911</i></a><a><i title="电话" class="I-phone"></i></a><a><i title="短信" class="I-message"></i></a><a><i title="轨迹" class="I-track"></i></a>'
			    },{
			    	name: '<img src="images/objName.png" class="objName" objID="ssss"/>某某1某',
			        level: '<span class="Lv3">三级</span>',
			        category: '紧急呼救3',
			        time: '6.24 11:33:20',
			        state: '未处理',
			        address: '中软大厦中软大厦中软大厦中软大厦',
			        state1: '<a><i title="ECU911返回结果" class="I-messages"></i></a><a><i title="自动处理" class="I-auto"></i></a>',
			        operation: '<a><i title="解除" class="I-relieve"></i></a><a><i title="推送ECU911" class="I-911">911</i></a><a><i title="电话" class="I-phone"></i></a><a><i title="短信" class="I-message"></i></a><a><i title="轨迹" class="I-track"></i></a>'
			    }]
		});
	}());
	// table date-input-btns-> show or hide
	$('.custom-time-btn').click(function(){
		$('.custom-time').show();
		$('.uncustom-time').hide();
	});
	$('.custom-time-btn-N').click(function(){
		$('.custom-time').hide();
		$('.uncustom-time').show();
	});
	// table date-input -> value
	$(function(){
		$('#custom-time-input-star').daterangepicker({
		    "showDropdowns": true,
		    "showWeekNumbers": true,
		    "showISOWeekNumbers": true,
		    "timePicker": true,
		    "timePicker24Hour": true,
		    "timePickerSeconds": true,
		    "autoApply": true,
		    "locale": {
		        "direction": "ltr",
		        "format": "YYYY/MM/DD HH:mm:ss",
		        "separator": " - ",
		        "applyLabel": "Apply",
		        "cancelLabel": "Cancel",
		        "fromLabel": "From",
		        "toLabel": "To",
		        "customRangeLabel": "Custom",
		        "daysOfWeek": [
		            "Su",
		            "Mo",
		            "Tu",
		            "We",
		            "Th",
		            "Fr",
		            "Sa"
		        ],
		        "monthNames": [
		            "January",
		            "February",
		            "March",
		            "April",
		            "May",
		            "June",
		            "July",
		            "August",
		            "September",
		            "October",
		            "November",
		            "December"
		        ],
		        "firstDay": 1
		    },
		    "linkedCalendars": false,
		    "startDate": "2016/10/06",
		    "endDate": "2016/10/12"
		}, function(start, end, label) {
		  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
		});
	});
	//table input-dropdown -> show or hide
	$('.dealing-name').focus(function(){
		$('.dealing-name-show').show();
	});
	$(document).click(function(e){
		if ($(e.target).is('.dealing-name')) {
			return;
		}else{
			$('.dealing-name-show').hide();
		}
	});
	
	// head -> show or hide
	$('.nav-icon').click(function(){
		$('.navbar').toggleClass("top");
		$('#left-panel-alarm').toggleClass('top0');
		$('.warning-content').toggleClass('top0');
		$('.nav-icon-f').toggle();
	})  
	// tree a:active
	// $('#left-panel-alarm a').click(function(){
	// 	$('#left-panel-alarm a').removeClass('active');
	// 	$(this).addClass('active');
	// });
	// //
	// $('.listLink').click(function(){
	// 	$(this).children('.close').toggleClass('open');
	// })
});
function police(obj){
		$('.dealing-name').val('');
		$('.dealing-name').val($(obj).text());
		$('.dealing-name-show').hide();
	}