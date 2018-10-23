function music(x){
	let a = '<audio class="audio1" src="'+x+'" hidden="true" autoplay="true"></audio>';
	$('#music').append(a);
	setTimeout(function(){
		$('.audio1:first').remove();
	},5000);
}