<h2> how to use it </h2>

<p>
	<h3> sample code for use from controller </h3>

	<code>
		function upload_profile_pic(){ <br>
		$this->set_tog_profile(); <br>

		echo  Uploader::upload_now(array(
					'upload_dir' => FCPATH."assets/uploads/profiles/tmp/", <br>
					"upload_url" => base_url()."assets/uploads/profiles/tmp/", <br>
					"script_url" => base_url()."assets/uploads/profiles/tmp/", <br>
					"user"		 => $this->user->username <br>
			)); <br>
		
		
	} <br>
	<code> <br> <br> <br>

	<h3>  Standard Init</h3>
	// this will call uploader to init here. It will load a standard UI from plugin  <br>
	// will load /libraries/uploaders/header.php <br>
				 /libraries/uploaders/body.php <br>
				 /libraries/uploaders/footer.php <br>
			 	as UI <br>

          		   <?php Uploader::basic_uploader_init(); ?> <br>
	<code>
			<?php Uploader::init(); ?> <br>
	</code>

	<h3> Init uploader in view file  <br>( In standard way, function will automatically load all necessary css and js scripts ): </h3>
	<code> <br>
		<div>
	// a basic uploader with custom ui. loaders /libraries/uploaders/basic_uploader.php as UI <br>
          		   <?php Uploader::basic_uploader_init(); ?> <br>
          </div>
    
          
           <input id="new_profile_img" type="hidden" name="new_profile_img" value=""> <br>
           
          <div id="save_profile_pic_now" class="hide"> Save </div> <br>
          <div id="save_profile_cancel" class="hide"> Cancel </div> <br>
	</code> <br> <br>
 
	<h3> Intilizating in more custom way  </h3> <br> 
	// a basic loader no plugin UI / UX will be loaded all custom UI <br>
	// this will load application/views/custom_uploader.php as UI <br>
	// @params <br>
			first 	: either to load plugin scripts and css or not // make it false if css and js is preloaded. <br>
			second 	: your customr view file_name  <br>
	<code>
			<?php Uploader::uploader_with_options_init(array('load_scripts' => false , 'view' => 'tog_profile_uploader')); ?> <br>
	</code>

	<h3>  Javascript initilization </h3> <br>
	<code> <br>
		Profile_init.prototype.set_uploader = function() { <br>
			var self = this;
			   
		    try{ <br>
		    	$('#basic_fileupload').fileupload({ <br>
			        // Uncomment the following to send cross-domain cookies: <br>
			       //xhrFields: {withCredentials: true}, <br>
			       url: base_url+'togs/upload_profile_pic/', <br>
			       progressall: function (e, data) { <br>
			           var progress = parseInt(data.loaded / data.total * 100, 10); <br>
			           self.progress(progress); <br>
			       },success:function (data) {	 <br>
			      
			    			data = $.parseJSON(data); <br>
			    			self.toggle_buttons();
			    			$('#new_profile_img').val(data.files[0].name); <br>
			    			//console.log(data.files) <br>
			    			self.set_preview('tmp/'+data.files[0].name); <br>
			    			self.set_window_crop(); <br>
				       } <br>
				   }) <br>
		    }catch(es){ <br> 
		    	console.log(es); <br>
		    }
 <br>
		    
		} <br>
	</code>

	<p> <br>

		<a href="http://blueimp.github.io/jQuery-File-Upload/">	Read more about jquery file uploader </a>
	</p>
</p>
