<?php 

function getStudents() {
	$servername = "localhost";
	$password = "";
	$username = "root";
	$dbname = "studentskaalprava";

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	$query = "SELECT * FROM student";

	$result = mysqli_query($conn, $query);

	$studentsArray = [];

	if(mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {				
				$studentsArray[] = $row;
		}
	} else {
		return "No rows found";
	}

	mysqli_close($conn);
	return $studentsArray;

}

function createStudent($name, $lastName, $smer) {

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "baza";

	$conn = new mysqli($servername, $username, $password, $dbname);

	$stmt = $conn->prepare("INSERT INTO negde (name, lastName, numberr) VALUES(?, ?, ?)");
	$stmt->bind_param("sss", $name, $lastName, $smer);

	$stmt->execute();

	$stmt->close();
	$conn->close();

}

?>