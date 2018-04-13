<?php
$getData = $_POST["data"];
$getTag =  $_POST["tag"];

if(!empty($getData)){
	
	//echo $getData.$getTag;
	$savePath = "/var/www/html/jsondata/";
	$fileName = $savePath.$getTag.".json"; // join path.
	
	if(file_exists($fileName)){
		echo "ex";
		$fp = fopen($fileName, 'a');
	} else {
		echo "no";
		$fp = fopen($fileName, 'w');
	}
	
	fwrite($fp, $getData);
	fclose($fp);

} else {
	echo "noting data";
}

clearstatcache();	
?>
