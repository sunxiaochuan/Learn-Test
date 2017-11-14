// console.log($);
$(function(argument) {
	$('#btnsubmit').click(function(event) {
		event.preventDefault();
		// alert('准备提交');
		$.ajax({
			url:'/receive',
			type:'get',
			dataType:'json',
			data:{
				username:$('#username').val()
			},
			success:function(data) {
				alert(data.msg);
			},
			error:function() {
				alert('error');
			}
		})
	})
})