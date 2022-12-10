<?php
ini_set('display_errors', 1);
ini_set('log_errors', 1);
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
// ini_set("mail.log", "/tmp/mail.log");
// ini_set("mail.add_x_header", TRUE);
date_default_timezone_set('Europe/Bucharest');
require_once 'conectare.php';

$response = array();


if (isset($_GET['apicall'])) {
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    switch ($_GET['apicall']) {
        case 'Motiv':
            $dataMotiv = $obj["dataMotiv"];

            $stmt = $conn->prepare("INSERT INTO userappointmentdata (motiv) VALUES (?)");
            $stmt->bind_param("s", $dataMotiv);
            $stmt->execute();
            break;
        case '':
    }
} else {
    $response["eroare"] = true;
    $response["mesaj"] = "A aparut o eroare";
}

echo json_encode($response);
