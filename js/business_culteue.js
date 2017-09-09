var Business_culteue = {
	init: function(){
		this.bindEvent();
	},
	setDom: function $(dom){
		return document.querySelector(dom);	
	},
	setDoms: function $(dom){
		return document.querySelectorAll(dom);	
	},
	bindEvent: function(){
		var that = this;
		var Domnavs = this.setDom('nav').children;
		var Dommains = this.setDoms('.main');
		Domnavs[0].onclick = function(){
			that.clearDom();
			Domnavs[0].setAttribute("class","active");
			Dommains[0].style.display = 'block';
		}
		Domnavs[1].onclick = function(){
			that.clearDom();
			console.log(Domnavs[1])
			Domnavs[1].setAttribute("class","active");
			Dommains[1].style.display = 'block';
		}
		Domnavs[2].onclick = function(){
			that.clearDom();
			Domnavs[2].setAttribute("class","active");
			Dommains[2].style.display = 'block';
		}
	},
	clearDom: function(){
		var Domnavs = this.setDom('nav').children;
		var Dommains = this.setDoms('.main');
		for (var i = 0; i < Domnavs.length; i++) {
			Domnavs[i].setAttribute("class","");
			Dommains[i].style.display = 'none';
		}
	}
}
Business_culteue.init()