<?php 

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include "db.php";
if($_SERVER["REQUEST_METHOD"] == "POST") {
	$_POST = json_decode(file_get_contents('php://input'), true);
	$name = $_POST['name'];
	$lastName = $_POST['lastName'];
	$smer = $_POST['smer'];
	createStudent($name, $lastName, $smer);
	echo json_encode($smer);
}

?>