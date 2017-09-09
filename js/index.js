var MainObj = {
	init: function(){
		this.init_swiper();	
	},
	init_swiper: function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay : 3000,
			speed:300,
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',

		  })        
	}
}
MainObj.init()