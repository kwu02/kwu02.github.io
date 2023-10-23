<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Define recipient email address
    $to = 'kenkerry@gmail.com';

    // Set email subject
    $subject = 'Contact Form Submission from ABC Toys Contact Page';

    // Compose the email message
    $message_body = "Name: $name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Message:\n$message\n";

    // Send the email
    $mail_success = mail($to, $subject, $message_body);

    if ($mail_success) {
        // Email sent successfully
        echo 'Thank you for contacting us! We will get back to you soon.';
    } else {
        // Email sending failed
        echo 'Oops! Something went wrong. Please try again later.';
    }
} else {
    // Redirect back to the form page if accessed directly
    header('Location: contact_us.html');
}
?>
