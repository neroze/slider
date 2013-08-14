<?php include('basic_uploader_scripts.php'); ?>

<!-- The fileinput-button span is used to style the file input field as button -->
            <div id="progress" class="progress">
                <div class="progress-bar progress-bar-success"></div>
            </div>
            <span class="btn btn-success fileinput-button">
                <i class="icon-plus icon-white"></i>
                <span>Change Profile Pic</span>
                <!-- The file input field used as target for the file upload widget -->
                <input id="basic_fileupload" type="file" name="files[]" multiple>
            </span>
           
            <!-- The global progress bar -->
            
            <!-- The container for the uploaded files -->
            <div id="files" class="files"></div>
            <br>
