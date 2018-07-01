<?php

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

	if($_SERVER['REQUEST_METHOD'] == "GET") {
		$param = $_GET["id"];
		echo json_encode($param);
	}

?>


































