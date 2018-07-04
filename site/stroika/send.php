<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$comment = htmlspecialchars($comment);
$name = urldecode($name);
$phone = urldecode($phone);
$comment = urldecode($comment);
$name = trim($name);
$phone = trim($phone);
$comment = trim($comment);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("info@cotedeazur.ca", "Contact form", "Name:".$name.". Phone: ".$phone , "From: info@cotedeazur.ca \r\n"))
	{     echo "Your message has been delivered"; 
} else { 
	echo "Your message is not delivered";
}?>