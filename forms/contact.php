<?php
    if(!isset($_POST['submit']))
    {
        echo "error; you need to submit the form";
    
    }
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    if(empty($name)||empty($email))
    {
        echo "Name and email are mandatory!";
        exit;
    }
    $email_from = 'https//calvinmatsiko.github.io/calvinkellermantechnologies.github.io/'; 
    $email_subject = "New Form Submission";
    $email_body = "You have received a new message from the user $name.\n".
    "email address: $email\n".
    "Here is the message:\n $message".

    $to = 'calvinkellermantechnologies@gmail.com';
  
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr>
            <td>'.$firstname.'  '.$laststname.'</td>
        </tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>phone: '.$phone.'</td></tr>
        <tr><td>Text: '.$text.'</td></tr>
        
    </table>';

    if (@mail($to, $email_subject, $email_body, $headers))
    {
        echo 'The message has been sent.';
    }else{
        echo 'failed';
    }

?>
