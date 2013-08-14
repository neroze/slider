<h2> how to use it </h2>

<p>
	<h3> sample code for use from controller </h3>

	<code>
			function upload_profile_pic(){
		$this->set_tog_profile();

		echo  Uploader::upload_now(array(
									'upload_dir' => FCPATH."assets/uploads/profiles/tmp/",
									"upload_url" => base_url()."assets/uploads/profiles/tmp/",
									"script_url" => base_url()."assets/uploads/profiles/tmp/",
									"user"		 => $this->user->username
							));
		
		
	}
	<code>

	<h3>  Standard Init</h3>
	// this will call uploader to init here. It will load a standard UI from plugin 
	// will load /libraries/uploaders/header.php
				 /libraries/uploaders/body.php
				 /libraries/uploaders/footer.php
			 	as UI

          		   <?php Uploader::basic_uploader_init(); ?>
	<code>
			<?php Uploader::init(); ?>
	</code>

	<h3> Init uploader in view file ( In standard way, function will automatically load all necessary css and js scripts ): </h3>
	<code>
		<div>
					// a basic uploader with custom ui. loaders /libraries/uploaders/basic_uploader.php as UI
          		   <?php Uploader::basic_uploader_init(); ?>
          </div>
    
          
           <input id="new_profile_img" type="hidden" name="new_profile_img" value="">
           
          <div id="save_profile_pic_now" class="hide"> Save </div>
          <div id="save_profile_cancel" class="hide"> Cancel </div>
	</code>

	<h3> Intilizating in more custom way  </h3>
	// a basic loader no plugin UI / UX will be loaded all custom UI
	// this will load application/views/custom_uploader.php as UI
	// @params
			first 	: either to load plugin scripts and css or not // make it false if css and js is preloaded.
			second 	: your customr view file_name 
	<code>
			<?php Uploader::uploader_with_options_init(array('load_scripts' => false , 'view' => 'tog_profile_uploader')); ?>
	</code>

	<h3>  Javascript initilization </h3>
	<code>
		Profile_init.prototype.set_uploader = function() {
			var self = this;
			   
		    try{
		    	$('#basic_fileupload').fileupload({
			        // Uncomment the following to send cross-domain cookies:
			       //xhrFields: {withCredentials: true},
			       url: base_url+'togs/upload_profile_pic/',
			       progressall: function (e, data) {
			           var progress = parseInt(data.loaded / data.total * 100, 10);
			           self.progress(progress);
			       },success:function (data) {	
			      
			    			data = $.parseJSON(data);
			    			self.toggle_buttons();
			    			$('#new_profile_img').val(data.files[0].name);
			    			//console.log(data.files)
			    			self.set_preview('tmp/'+data.files[0].name);
			    			self.set_window_crop();
				       }
				   })
		    }catch(es){
		    	console.log(es);
		    }

		    
		}
	</code>

	<p>

		Read more about jquery file uploader
	</p>
</p>
