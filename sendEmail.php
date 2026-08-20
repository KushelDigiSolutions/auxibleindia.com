<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if( isset($_POST) )
{
    // var_dump($_POST["cemail"]);exit;

$sendingmail = "sonalanand.kushel@gmail.com";
// $ccemail = "jitender.kardam@aaamedia.co.in";
$ccemail = "sonalanand102@gmail.com";

// $Bccemail = "testing.kushel@gmail.com";
// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($_POST["message"],70);
$headers = "From: " . strip_tags($sendingmail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($sendingmail) . "\r\n";
$headers .= "CC: ". strip_tags($ccemail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

//	 send email
mail($sendingmail,$_POST["subject"],$msg,$headers);
if(!empty($_POST["cemail"])){
	$message = '<html><body>';
	$message .= '<h3>Thankyou, for your enquiry we will get back to you shortly</h3>';
	$message .= '</body></html>';
	mail($_POST["cemail"],"Stemgenn Therapeutics",$message,$headers);
}

}
?>