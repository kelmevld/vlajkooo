<?php 

	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json");
	include 'db.php';

	if ($_SERVER["REQUEST_METHOD"] == "GET") {
		echo json_encode(getStudents());
	} 

?>
