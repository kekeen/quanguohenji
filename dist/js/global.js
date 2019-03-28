$(document).ready(function(){
    //模块js初始化
    commonJs.fn.init();
});

var commonJs = $(window).commonJs || {};

commonJs.fn = {
    init : function(){
        var _this = this;
        _this.dropdown();
        _this.icheck();
		_this.time();
		_this.page();
		_this.right_content();
    },

    // 下拉菜单
    dropdown : function () {
        $('.dropdown').on('click','.dropdown-menu li a', function(event) {
            var txt = $(this).text();
            $(this).parents('.dropdown-menu').siblings('.dropdown-toggle')[0].childNodes[0].nodeValue = txt + ' ';
        });
    },

    // 复选框
    icheck : function () {
        $('input').iCheck({
            checkboxClass: 'icheckbox_flat-blue',
            radioClass: 'iradio_flat-blue',
            increaseArea: '20%'
        });
    },
    
    //时间控件
	time : function(){
	    $(document).on('click', function(event) {
	        $(".dataList").hide();
	    });
	    jQuery('.ts-range,.ts-range2').datetimepicker({
	        format:'Y-m-d H:i',
	        lang:'ru',
	        onChangeDateTime:function(dp,$input){
	            $(".sure").click(function () {
	               /* var $inputs=$input.val()+" 至 "+$input.val();*/
	                $(this).parents('.data-times').find(".allData").val($(this).parents('.data-times').find('.ts-range').val()+" 至 "+$(this).parents('.data-times').find('.ts-range2').val());
	                $(this).parents(".dataList").hide();
	            })
	        }
	    });
	    $('.data-times').on('click',function(event){
	        event.stopPropagation();
	    })
	    $('.allData').on('click', function (event) {
	        $(".dataList").hide();
	        event.stopPropagation();
	        $(this).parent().siblings(".dataList").show();
	    });
	    $('.ts-range,.ts-range2').on('click',  function(event) {
	        event.stopPropagation();
	    });
	    $(".dataList ul li a").click(function (event) {
	        var $text=$(this).text();
	        $(this).parents(".data-times").find(".allData").val($text);
	        $(this).parents(".dataList").hide();
	        event.stopPropagation();
	    });
	},
	
	//分页器
	page : function(){
		$(".pagging").Paging({
            dom:{
                pageno: true, // 页码：1、2、3、4、5
                pagesize: false, // 每页显示多少条
                datacount: true, // 数据总数
                pagecount: false, // 页码总数
                pagebtn: true, // 上一页，下一页按钮
                pagefirst: false, // 首页按钮
                pagelast: false, // 尾页按钮
                fastgo: false // 快速跳转
            },
            pagesize: 5,
            current: 1,
            count: 100,
            pageSizeList: [10, 20, 30, 40, 50],
            prevTpl:"<",
            nextTpl:">"
        });
	},
	
	//right-content高度
	right_content : function(){
		resize();
	}
};
function resize(){
	var height = $(".content-right").height() - $(".links").outerHeight(true) - $(".console-box").outerHeight(true);
		$(".right-content-box").outerHeight(height);
}
$(window).resize(function(){
	resize();
})
