$(function(){
	$('.q-f').click(function(){
		$('body').toggleClass("main");
	})
	$('.nav-icon-f').click(function(){
		$('body').toggleClass("main");
	})
	$('.item-list-icon-left').click(function(){
		$('#left-panel1').toggleClass("left-panel1")
	})
	$('.preson-item-header .menu-list-icon').click(function(){
		$('#left-panel1').toggleClass("left-panel1")
	})
	$('.item-list-icon-right').click(function(){
		$('#left-panel2').toggleClass("left-panel2");
	})
	$('.item-list-icon-right2').click(function(){
		$('#left-panel2').addClass("left-panel2")
		$('#rightCloseBtn').show();
	})
	$('.warning-header .menu-list-icon').click(function(){
		$('#left-panel2').toggleClass("left-panel2")
	})
	$('.preson-item-header').click(function(){
		$('#left-panel1').toggleClass("preson-nav-down");
		$('.header-open').toggleClass('header-close');
	})
	$('.accordion-toggle').click(function(){
		$(this).children('.close').toggleClass('open');
	});
	//关注
	var alertDiv = $('<div class="alert-div">关注成功</div>')
	var alertDivfalse = $('<div class="alert-div-false">取消关注成功</div>')
	$('.star').click(function(){
		if($(this).hasClass('star-click')){
			$('.alert-div-false').addClass("alert-div-alert")
			setTimeout( function(){
				$('.alert-div-false').removeClass("alert-div-alert")
			}, 1000 );
			$(this).toggleClass("star-click");
		}else{
			$('.alert-div').addClass("alert-div-alert")
			setTimeout( function(){
				$('.alert-div').removeClass("alert-div-alert")
			}, 1000 );
			$(this).toggleClass("star-click")
			//$('.alert-div').removeClass("alert-div-alert");	
		}
		event.stopPropagation();
		return false
	})
	//左侧树关闭按钮
	//panel1
	$('.item-list-icon-left').click(function(){
		$(this).hide();
		$('.search-result').hide();
	})
	$('.item-list>.item-list-icon-left').click(function(){
		$('.item-list-icon-left').show();
	})
	//panel2
	$('.item-list-icon-right').click(function(){
		$(this).hide();
		$('.search-result').hide();
	})
	$('.item-list>.item-list-icon-right').click(function(){
		$('.item-list-icon-right').show();
	})
	//电池电量
	// function power(x){
	// 	if (x<=20){
	// 		$('.power-pro').addClass('power-pro-min');
	// 		$('.power-pro .progress .progress-bar').css('width',x+'%');
	// 	}else{
	// 		$('.power-pro').removeClass('power-pro-min');
	// 		$('.power-pro .progress .progress-bar').css('width',x+'%');
	// 	}
	// }
	// search result
	$('.resultBtn-search').click(function(){
		console.log($(this).attr('parent')=='searchBtnTrue');
		if($(this).attr('parent')=='searchBtnTrue'){
			$('.alert-box').hide();
			$('#alarmSearch').toggle();
			$('.noClick').toggle();
		}else{
			$('.alert-box').hide();
			$('#alarmSearch2').toggle();
			$('.noClick').toggle();
		}
	});
	$('#searchBtnTrue').click(function(){
		$('.search-result').show();
		$('.alert-box').hide();
		$('.noClick').hide();
		$('.resultBtn-search').attr('parent','searchBtnTrue');
	});
	$('#searchBtnTrue2').click(function(){
		$('.search-result').show();
		$('.alert-box').hide();
		$('.noClick').hide();
		$('.resultBtn-search').attr('parent','');
	});
	$('.returnPanelBtn').click(function(){
		$('.search-result').hide();
	})
	//fix-messages-more  => more btn
	$('.fix-messages-more').click(function(){
		$('#left-panel2').addClass("left-panel2");
		$('#rightCloseBtn').show();
		// $('#profile-tab');
		$('#home-tab').parent('li').removeClass('active');
		$('#profile-tab').parent('li').addClass('active');
		$('#profile').addClass('active in');
		$('#home').removeClass('active in');

	})
	//点击输入框显示警官名目录	
	$('#policeInput').focus(function(){
		$('.police-name').show();
		return false;
	});
	//点击其他元素关闭下拉列表
	$(document).click(function(e){
		//console.log($(e.target));
		if($(e.target).is('#policeInput')) {
			return;
		}else{
			$('.police-name').hide();
		}
	});
	//选择潜在受害人禁用其他矫正状态和类型的select
	$('#nonebody').change(function(){
				var options=$("#nonebody option:selected");
				//console.log(options.val());
				if (options.val()==='潜在受害人') {
					$("#stateSelect").attr("disabled","disabled");  
					$("#typeSelect").attr("disabled","disabled"); 
				}else{
					$("#stateSelect").removeAttr("disabled");
					$("#typeSelect").removeAttr("disabled");
				}
			});
	//点击关闭panel1 树
	// $('.listLink').click(function(e){
	// 	if($(e.target).is(".close")){
	// 		return;
	// 	}
	// 	if($(this).children('i').hasClass('close')){
	// 		$(this).next('div').toggleClass('in');
	// 		$('.left-panel1').toggleClass('preson-nav-down');
	// 		$('.header-open').removeClass('header-close');
	// 	}
	// 	return false;
	// });

	//告警高级搜索   唯一id打开指定的告警搜索框
	$('#alarmSearchBtn').click(function(){
		$('.alert-box').hide();
		$('#alarmSearch').toggle();
		$('.noClick').toggle();
	});
	//发送短信弹窗
	$('.SMSBtn').click(function(){
		$('.alert-box').hide();
		$('#alertSMS').toggle();
		$('.textarea-window').val('');
		$('.noClick').toggle();
	});
	//解除告警弹窗
	$('.alertAlarmBtn').click(function(){
		$('.alert-box').hide();
		$('#alertAlarm').toggle();
		$('.textarea-window').val('');
		$('.noClick').toggle();
	});
	//EUC911
	$('.ECU911').click(function(){
		$('.alert-box').hide();
		$('#alertECU').toggle();
		$('.textarea-window').val('');
		$('.noClick').toggle();
	});
	//监控高级搜索 唯一id打开指定的监控搜索框
	$('#alarmSearchBtn2').click(function(){
		$('.alert-box').hide();
		$('#alarmSearch2').toggle();
		$('.noClick').toggle();
	});
	//个人详细信息弹窗
	$('.preson-list>ul>li>a').click(function(){
		$('.alert-box').hide();
		$('#modal-preson').toggle();
	});
	$('.alertClosebtn').click(function(){
		$('.alert-box').hide();
		$('.noClick').hide();
	});
	//发送短信alert
	$('.btns-value').click(function(){
		var temp = $('.textarea-window').val();
		if (temp=='') {
			temp += $(this).text();
		}else{
			temp += '\n'+$(this).text();
		}
		$('.textarea-window').val(temp);
	});
	//时间日期插件属性
	 $('#alert-time1-start').daterangepicker({
	     "singleDatePicker": true,
	     "showDropdowns": true,
	     "showWeekNumbers": true,
	     "showISOWeekNumbers": true,
	     "locale": {
	         "direction": "ltr",
	         "format": "YYYY/MM/DD HH:mm",
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
	     "showCustomRangeLabel": false,
	     "startDate": "2016/06/01",
	     "endDate": "2016/06/02",
	     "opens": "center"
	 }, function(start, end, label) {
	   console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	 });
	$('#alert-time1-end').daterangepicker({
	     "singleDatePicker": true,
	     "showDropdowns": true,
	     "showWeekNumbers": true,
	     "showISOWeekNumbers": true,
	     "locale": {
	         "direction": "ltr",
	         "format": "YYYY/MM/DD HH:mm",
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
	     "showCustomRangeLabel": false,
	     "startDate": "2016/06/01",
	     "endDate": "2016/06/01",
	     "opens": "center"
	 }, function(start, end, label) {
	   console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	 });

	//pages
	var option1 = {
		"currentPage" : 1,//当前页码
		"totalPages" :1000,//总共页码
		"numberOfPages" : 4,//设置显示的页按钮的数量
		"alignment" : "left",//对齐方式 左对齐
		shouldShowPage:function(type, page, current){
		   	switch(type)
		    {
		        case "first":
		        case "last":
		            return false;
		        default:
		        return true;
		    }
		}
	};
	var option2 = {
		"currentPage" : 1,//当前页码
		"totalPages" :1000,//总共页码
		"numberOfPages" : 4,//设置显示的页按钮的数量
		"alignment" : "left",//对齐方式 左对齐
		shouldShowPage:function(type, page, current){
		   	switch(type)
		    {
		        case "first":
		        case "last":
		            return false;
		        default:
		        return true;
		    }
		}
	};
	$('#pages1').bootstrapPaginator(option1);
	$('.maxpage').text('共'+option1.totalPages+'页 ');
	$('.jump-btn1').click(function(){
		if ($('#jump-input1').val()<=option1.totalPages && $('#jump-input1').val()>0 && $('#jump-input1').val().indexOf(".")<0){
			$('#pages1').bootstrapPaginator("show", $('#jump-input1').val());
		}
	})
	$('#pages2').bootstrapPaginator(option2);
	$('.maxpage').text('共'+option2.totalPages+'页 ');
	$('.jump-btn2').click(function(){
		// console.log($('#jump-input').val().indexOf(".") > 0 );
		if ($('#jump-input2').val()<=option2.totalPages && $('#jump-input2').val()>0 && $('#jump-input2').val().indexOf(".")<0){
			$('#pages2').bootstrapPaginator("show", $('#jump-input2').val());
		}
	})
	var option3 = {
		"currentPage" : 1,//当前页码
		"totalPages" :1000,//总共页码
		"numberOfPages" : 4,//设置显示的页按钮的数量
		"alignment" : "left",//对齐方式 左对齐
		shouldShowPage:function(type, page, current){
		   	switch(type)
		    {
		        case "first":
		        case "last":
		            return false;
		        default:
		        return true;
		    }
		}
	};
	$('#pages3').bootstrapPaginator(option3);
	$('.maxpage').text('共'+option3.totalPages+'页 ');
	$('.jump-btn3').click(function(){
		if ($('#jump-input3').val()<=option3.totalPages && $('#jump-input3').val()>0 && $('#jump-input3').val().indexOf(".")<0){
			$('#pages3').bootstrapPaginator("show", $('#jump-input3').val());
		}
	})
})


//告警 展开
function messageDetails(Obj){
	if($(Obj).next().is(":hidden")){
		$('.message-details').hide();
		$(Obj).children('.messageClose').toggleClass('messageOpen');
		$(Obj).next().toggle();
		$(Obj).parent('li').addClass('active');
	}
	else{
		$(Obj).next().toggle();
		$(Obj).children('.messageClose').toggleClass('messageOpen');
		$(Obj).parent('li').removeClass('active');
	}
}

//右下角 浮动弹出层
function iconX(data){
	$(data).parent('a').parent('li').remove();
 	event.stopPropagation();
	return false;
}
function userMessagefix(data){
	$(data).parent('li').toggleClass("user-message-hide");
	$(data).children('.caret').toggleClass('caretTOP');
 	event.stopPropagation();
}

var messagerTimeout = setTimeout(function(){$('.fix-messages>ul>li').hide()},5000);
var messagerMoreTimeout = setTimeout(function(){$('.fix-messages-more').hide()},5000);
function timer(){
	clearTimeout(messagerTimeout);
	clearTimeout(messagerMoreTimeout);
}
function timerout(){
	messagerTimeout = setTimeout(function(){$('.fix-messages>ul>li').hide()},5000);
	messagerMoreTimeout = setTimeout(function(){$('.fix-messages-more').hide()},5000);
}

//自动输入到警官input输入框中
function police(obj){
	$('#policeInput').val('');
	$('#policeInput').val($(obj).text());
	$('.police-name').hide();
}



// jstree
$(function() {
  $('#container').jstree({
    'core' : {
    	"multiple" : false,//不可多选
    	'dblclick_toggle': false,//禁用双击打开
      	'data' : [
        { 
        	"id" : "parent1",
        	"text" : "北京市",
        	"icon" : "treeCity",//父级图标
        	"children" : [
            { 
            	"id" : "CY",
            	"text" : "<span class='list-line-span'>&nbsp;</span>朝阳区",
            	"icon" : false,
            	"children" : [
	            { 
	            	"id" : "ZJM",
	            	"text" : "<span class='list-line-span'>&nbsp;</span>皂君庙",
	            	"icon" : false,
	            	"children" : [
	            	{ 
	            		"id" : "10",
	            		"text" : "<span class='list-line-span'>&nbsp;</span>皂君庙",
	            		"icon" : false
	            	},
	            	{ 
	            		"id" : "11",
	            		"text" : "<span class='list-line-span'>&nbsp;</span>西二旗",
	            		"icon" : false
	            	}
	            	]
	            },
	            { 
	            	"id" : "4",
	            	"text" : "<span class='list-line-span'>&nbsp;</span>西二旗",
	            	"icon" : false
	            }
	          ]
            },
            { 
            	"id" : "5",
            	"text" : "<span class='list-line-span'>&nbsp;</span>海淀区",
            	"icon" : false
            }
          ],
        },{
        	"id" : "parent2",
        	"text" : "重点关注",
        	"icon" : "TreeImportant"
        },{
        	"id" : "parent3",
        	"text" : "我的分组",
        	"icon" : "TreeGroup",
        	"children" : [{
        		"id" : "3333",
            	"text" : "<span class='list-line-span'>&nbsp;</span>分组一",
            	"icon" : false
        	}]
        }
        ]
    }
  });


  //tree change时事件  
  $('#container').on("changed.jstree", function (e, data) {  	
  	var temp = data.instance.get_path(data.selected[0],"/",0);
  	while (temp.indexOf("<span class='list-line-span'>&nbsp;</span>")!=-1)
  	{
  		temp = temp.replace("<span class='list-line-span'>&nbsp;</span>","")
  	}
  	$('#outAddress').text(temp);
  	//关闭left-panel1 同时改变状态
  	$('#left-panel1').toggleClass("preson-nav-down");
  	$('.header-open').toggleClass('header-close');
  });

  
});
//jstree单击事件  
$("#container").bind("select_node.jstree", function (e, data) {  
    if(data.node.id !=0 ){                           //排除第一个节点  
        data.instance.toggle_node(data.node);        //单击展开下面的节点  
    }  
});
//pages


