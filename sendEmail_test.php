


<?php
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
	//Import PHPMailer classes into the global namespace
	//These must be at the top of your script, not inside a function
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	//Load Composer's autoloader
	require 'vendor/autoload.php';

	//Create an instance; passing `true` enables exceptions
	$mail = new PHPMailer(true);

	try {
		//Server settings
		$mail->SMTPDebug = 1;                      //Enable verbose debug output
		$mail->isSMTP();                                            //Send using SMTP
		$mail->Host       = 'auxibleindia.com';                     //Set the SMTP server to send through
		$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
		$mail->Username   = 'info@auxibleindia.com';                     //SMTP username
		$mail->Password   = 'QN!M?&bs@^mG';     //SMTP password
	    $mail->SMTPSecure = 'tls';
	    $mail->Port = 587;
	  // $mail->Port = 25;

		//Recipients
		$mail->setFrom('info@auxibleindia.com');
		$mail->addAddress($_POST['cemail'], 'Sonal Anand');     //Add a recipient
		$mail->addAddress('info@auxibleindia.com');
		$mail->addAddress($_POST['cemail']);               //Name is optional
		$mail->addReplyTo($_POST['cemail'], 'Information');
		$mail->addCC($_POST['cemail']);
		// $mail->addBCC('bcc@example.com');

		//Attachments
		//$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
		//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

		//Content
		$mail->isHTML(true);                                  //Set email format to HTML
		$mail->Subject = $_POST['subject'];
		$mail->Body    = $_POST['message'];;
	    $mail->Subject = "test email try again";
	    $mail->Body = "test body email send";
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

		$mail->send();
		$result = 'Message has been sent';
		echo $result;
	} catch (Exception $e) {
		echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}
?>