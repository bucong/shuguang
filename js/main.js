$.fn.toggle = function (fn, fn2) {
    var args = arguments, guid = fn.guid || $.guid++, i = 0,
        toggle = function (event) {
            var lastToggle = ($._data(this, "lastToggle" + fn.guid) || 0) % i;
            $._data(this, "lastToggle" + fn.guid, lastToggle + 1);
            event.preventDefault();
            return args[lastToggle].apply(this, arguments) || false;
        };
    toggle.guid = guid;
    while (i < args.length) {
        args[i++].guid = guid;
    }
    return this.click(toggle);
};
//捐助金额格式化
function FormatMoney(s) {  
    let m = Math.abs(s);
    m = m.toFixed(2);
    m = parseFloat(m);
    return m;
}
$(function(){
	$('.comment-open').click(function(){
		$('.comment-box').show();
	})
	$('.comment-box .cancel').click(function(){
		$('.comment-box').hide();
	})
	//评论提交不为空
	$('.comment-box textarea').bind('input propertychange', function() {
		if($(this).val().length > 0){
			$('.comment-box .sub').removeAttr('disabled');
		}else{
			$('.comment-box .sub').attr('disabled',true);
		}
	});
})

