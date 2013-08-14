<?php
require('UploadHandler.php');
/*
 * stdClass Object
(
    [files] => Array
        (
            [0] => stdClass Object
                (
                    [name] => 13760479011301408917Batu Caves Malaysia by Danny Xeero.jpg
                    [size] => 213177
                    [type] => image/jpeg
                    [url] => http://192.168.123.10/togally-dev/assets/files/Batu%20Caves%20Malaysia%20by%20Danny%20Xeero.jpg
                    [thumbnailUrl] => http://192.168.123.10/togally-dev/assets/files/thumbnail/13760479011301408917Batu%20Caves%20Malaysia%20by%20Danny%20Xeero.jpg
                    [deleteUrl] => http://192.168.123.10/togally-dev/?file=13760479011301408917Batu%20Caves%20Malaysia%20by%20Danny%20Xeero.jpg
                    [deleteType] => DELETE
                )

        )

)

 */
class Uploader{
	private static $ci;

	function __construct(){
		self::$ci =& get_instance();
	}
	
	static function init(){
		include 'header.php';
		include 'body.php';
		include 'footer.php';
	}
	
	static function upload_now($options){
		
	//	error_reporting(E_ALL | E_STRICT);		
		$upload_handler = new UploadHandler($options);
		
		return  $upload_handler->to_json();
		
				
	}

	static function basic_uploader_init(){
		include 'basic_uploader.php';
	}

	static function uploader_with_options_init($options){
		$data['settings'] = array(
							
							'view'		 	=> "404",
							'load_scripts'	=> true

						);

		$data['settings'] = array_merge($data['settings'],$options);

		if($data['settings']['view'] == "404"){
			show_error('No View file defined for uploader');
		}
		if($data['settings']['load_scripts']){
			include('basic_uploader_scripts.php');
		}
		self::$ci->load->view('uploader/'.$options['view'], $data);


	}
}