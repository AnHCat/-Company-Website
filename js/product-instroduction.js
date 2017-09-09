window.onload=function(){
	var txt_pic=document.getElementById("txt_pic");
	var ul=document.getElementById("txt_top").children[0];
	var lis=ul.children;
	var banner=document.getElementById("banner");
	var b_span=banner.getElementsByTagName("span");
	var main=document.querySelectorAll('.main');
	for(var i=0;i<b_span.length;i++)
	{
		b_span[i].index=i;
		b_span[i].onclick=function(){
			
			console.log(2);
			for(var i=0;i<b_span.length;i++)
				{
					main[i].className="main";
					b_span[i].className="";
				}
			main[this.index].className="show1";
			this.className="active";
		}
			
		
	}//页面切换，产品中心与销售网络
	
		var imgData={"data":[{"src":"2.png"},{"src":"3.png"},{"src":"4.png"},{"src":"5.png"},{"src":"6.png"},{"src":"7.png"},{"src":"8.png"},{"src":"1.png"}]}
		for(var i=0;i<4;i++)
			{
				var ul=document.createElement("ul");
				txt_pic.appendChild(ul);	
				 for(var j=0;j<8;j++){
				 		var li=document.createElement("li");
					 	var img=document.createElement("img");
					 	img.src="../images/牛"+imgData.data[i].src;
					 	var a=document.createElement("a");
					 	a.appendChild(img);
					 	li.appendChild(a);
					 	ul.appendChild(li);
				}
				 
				}//动态生成ul

	var uls=txt_pic.children;
	var txt_spans=document.getElementById("txt_spans");
	var spans=txt_spans.children;
	for(var i=0;i<uls.length;i++){
		var span=document.createElement("span");
		span.innerHTML=(uls.length)-i;
		txt_spans.insertBefore(span,txt_spans.children[1]);
		if(i==uls.length-1)
		spans[1].className="current";
	}
	//动态生成sapn

	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].addEventListener('click',function(){
			for(var i=0;i<uls.length;i++){
				uls[i].className=""
			}			
			uls[this.index].className="show";	
				count=this.index;
				for(var i=0;i<spans.length;i++)
					spans[i].className="";
				spans[count+1].className="current";
		})
	}
	//导航栏
	var count=0;
	for(var i=0;i<spans.length;i++){
		spans[i].index=i;
		spans[i].addEventListener('mouseover',function(){
			for(var i=0;i<spans.length;i++)
				spans[i].className="";
			this.className='current';})
		spans[i].addEventListener('click',function(){
			for(var i=0;i<spans.length;i++)
				{
					
					spans[i].className="";
					if(i<uls.length)
						uls[i].className="";
				}
			if(this.index==0)
				{	
					count--;
					if(count<0){count=uls.length-1;}
					uls[count].className="show";
					for(var i=0;i<spans.length;i++)
					spans[i].className="";
				spans[count+1].className="current";
				}
			else if(this.index>0&&this.index<spans.length-1)
				{
					uls[this.index-1].className="show";
					count=this.index-1;
				}
			else{
				count++;
				if(count>uls.length-1){count=0;}
				uls[count].className="show";
				for(var i=0;i<spans.length;i++)
					spans[i].className="";
				spans[count+1].className="current";
				
			}
//			for(var i=0;i<lis.length;i++)
//					lis[i].className="";
//				lis[count].className="color";
			this.className='current';
			window.getSelection?window.getSelection().removeAllRanges():docuemt.selection.empty();
		})

		
		
	}
	
}
//切换图片
