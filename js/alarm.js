(function(){
	// $('.tableMoreBtn').click(function(){
	// 	$(this).parent().parent().next().toggleClass('display-tableTr');
	// 	$(this).parent().parent().next().next().toggleClass('display-tableTr');
	// });
	// $('.alermSearch-table').children('tbody').children('tr').children('td').children('a').click(function(){
	// 	$(this).parent('td').children('a').removeClass('active');
	// 	$(this).addClass('active');
	// });
	/* bootstrap table */
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
	    },{
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
	    }, 
	    // {
	    // 	width: '85',
	    //     field: 'state1',
	    //     title: ' '
	    // },
	     {
	    	width: '130',
	        field: 'state',
	        title: '状态'
	    }, {
			field: 'address',
	        title: '地址'
	    }, {
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
	        address: '中软大厦',
	        // state1: '<a><i class="I-messages"></i></a><a><i class="I-auto"></i></a>',
	        operation: '<a><i class="I-relieve"></i></a><a><i class="I-911">911</i></a><a><i class="I-phone"></i></a><a><i class="I-message"></i></a><a><i class="I-track"></i></a>'
	    },{
	        level: '<span class="Lv3">三级</span>',
	        category: '紧急呼救3',
	        time: '6.24 11:33:20',
	        state: '未处理',
	        address: '中软大厦中软大厦中软大厦中软大厦',
	        // state1: '<a><i class="I-messages"></i></a><a><i class="I-auto"></i></a>',
	        operation: '<a><i class="I-relieve"></i></a><a><i class="I-911">911</i></a><a><i class="I-phone"></i></a><a><i class="I-message"></i></a><a><i class="I-track"></i></a>'
	    }]
	});
}());