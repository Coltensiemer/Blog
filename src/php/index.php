<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailForm = $_POST['mail'];
    $message = $_POST['message'];


    $mailto = "colten50@hotmail.com"
    $headers = "From: ".$mailForm; 
    $txt = "You recieved ab email from ".$name".\n\n".$message; 

    mail($mailto, $subject, $txt, $headers); 
    header("Location: index.php?mailsend"); 
}