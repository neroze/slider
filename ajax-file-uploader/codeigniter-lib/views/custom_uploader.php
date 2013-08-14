<style type="text/css">
.change_cover_button {
  background: url("../images/add-btn.png") no-repeat scroll 0 0 transparent;
  border: medium none;
  color: #000000;
  font-size: 24px;
  height: 129px;
  left: 36%;
  margin-left: -1px;
  margin-top: -2px;
  position: absolute;
  text-transform: capitalize;
  top: 39%;
  transition: all 0.6s ease-in-out 0s;
  width: 322px;
  z-index: 1;

}
#cover_pic_wrapper{
	height: 100%;
}

#save_cover_pic_now{
	cursor: pointer;
	position: absolute;
	left: 36%;
	top: 29%;

}
#save_cover_cancel{
	cursor: pointer;
	position: absolute;
	left: 45%;
	top: 29%;
}
</style>
<div id="cover_progress" class="cover_progress">
    <div class="progress-bar progress-bar-success"></div>
</div>
<span class="btn btn-success change_cover_button fileinput-button">
    <i class="icon-plus icon-white"></i>
    <span class="">Change Cover Pic</span>
    <!-- The file input field used as target for the file upload widget -->
    <input id="tog_profle_img_upoader" type="file" name="files[]" multiple>
</span>
