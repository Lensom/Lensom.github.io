$(document).ready(function(){

//Tabs
$('.tab:gt(0)').hide();
$('#tabs li a').click(function(){
	if ($(this).parent().hasClass('active')){
		return false;
	} else {
		$('.tab').hide();
		$(this).parent().parent().children().removeClass('active');
		$(this).parent().addClass('active');
		$('.tab').eq($(this).parent().index()).show();
		return false;
	};
});

});