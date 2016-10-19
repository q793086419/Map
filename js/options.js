$(function(){
	// choose all -> checked
	$('#chooseAll').click(function(){
		if ($(this).is(':checked')) {
			$('.user-info-text input[name="files"]').prop('checked', true);
		}else{
			$('.user-info-text input[name="files"]').removeAttr('checked', true);
		}
	});
});