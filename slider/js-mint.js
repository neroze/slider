(function($){
	$.fn.js_mint_slider = function(opt) {
		var settings = {
				per_page: 6,
				width:900,
				height:500,
				speed:700
				
		};
		
		settings = $.extend(settings, opt);
		
		var styles = '<style>'+
						'.green_slider_pages { position:absolute }'+
						'.green_slider_pages > li{list-style:none; border:1px solid #333; padding:1px; margin:1px; width:15px; float:left; text-align:center; cursor:pointer;  }'+
						'#temp_green_slider {display:none;}'+
						'.active {background:#333; color:#fff; }'+
					'</style>';
						
		var self = this;
		var total_items,
			pages,
			all_items,
			cat,
			diff = settings.per_page;
		
		//console.log(total_items);
		
		var machine = {
				style:function(){
					this.creat_temp_holder();
					$("head").append(styles);
				},
				creat_temp_holder:function(){
					if($('#temp_green_slider').length == 0){
						$('body').append('<div id="temp_green_slider"></div>');
					}
				},
				set_temp_data:function(data){
					if($('#temp_green_slider').children().length == "0"){
						$('#temp_green_slider').html(data);
					}
					
				},
				count_child: function(filter){
					if(filter == undefined || filter == "0"){
						total_items = $(self).children().length
					}else{
						total_items = $(self).find('.item').filter("."+filter).length;
					}
				},
				get_items:function(filter){
					
					if( filter == undefined || filter == 0){
						return $(self).children().get()
					}else{
						return $(self).find('.item').filter("."+filter).get();
					}
					
					
				},
				log:function(msg){
					console.log(msg)
				},
				cal_total_pages:function(filter){
					this.count_child(filter);
					pages = Math.ceil( total_items / settings.per_page );
				},
				stringify:function(elements){
					
					   return $("<div>").append(elements).html();
					  
				},
				create_pages:function(filter){
					this.style();
					all_items = this.get_items(filter);
					this.cal_total_pages(filter);
					
					var j = 0;
					$(self).html("");
					for(var i=0; i < pages; i++){
						var page_string = "";
					 	var items = all_items.slice(j, settings.per_page);
					 	var str = this.stringify(items) ;
					 	
						page_string = '<div class="page" style="float:left; height:100%; width:'+settings.width+'px;" >'+str+"</div>";
						self_width = settings.width * pages;
						
			
						$(self).append(page_string).css({width:self_width, height:"100%",overflow: "hidden",position:"relative" });
						
						j = j + diff;
						settings.per_page = settings.per_page + diff;
						
					}
					if($('#root_train').length == 0){
						$(self).wrapAll("<div id='root_train' style='overflow:hidden; width:"+settings.width+"px; height:"+settings.height+"px; '></div>");
					}
					
					this.create_pagination();
					this.register_events();
					this.set_temp_data($(self).html());
					
				},
				generate_pagination:function(){
					var _wrap = "<ul class='green_slider_pages' style=''>";
					for(var i =0; i < pages; i++){
						_wrap = _wrap+"<li>"+i+"</li>";
					}
					_wrap = _wrap+"</ul>";
					return _wrap;
				},
				create_pagination:function(){
					
					$("#root_train").append(this.generate_pagination());
				},
				register_events:function(){
					var _this = this;
					$(document).on('click','.green_slider_pages > li', function(){
						var len = $(this).prevAll().length;
						offset = len * settings.width;
						$(this).siblings().removeClass('active');
						$(this).addClass('active');
						$(self).animate({
							left:"-"+offset+"px"
						},settings.speed);
					});
					
				},
				reset:function(filter){
					var _this = this;
					var all = "";
					cat = filter;
					settings.per_page = diff;
					
					var _temp = $('#temp_green_slider');
					$(self).html(_temp.html());
					$(self).css({left:"0px"});
					$("#root_train").find('.page').each(function(i, val){
					
						all = all + _this.stringify($(this).children());
					});
					$(self).html(all);
					$('.green_slider_pages').remove();
					
					_this.create_pages(cat);
					
				},
				resposive_offset:function(){
					var _screen = $(document).width();
					switch (_screen) {
						case value:
							
							break;
	
						default:
							break;
					}
				}
		}
		
		machine.create_pages();
		return machine;
		
	}
})(jQuery);