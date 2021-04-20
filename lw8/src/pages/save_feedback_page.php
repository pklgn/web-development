<?php

require_once "../utils/request.php";

function saveFeedbackPage()
{
    $name = getPostParameter('name');
    $email = getPostParameter('email');
    $message = getPostParameter('message');
    $gender = getPostParameter('gender');
    $country = getPostParameter('country');
    $errors = [];
    if (!isset($name))
    {
        $errors['name_error_msg'] = 'Отсутствует имя';
    }
    elseif (!ctype_alpha($name))
    {
        $errors['name_error_msg'] = 'Неверно набранное имя';
    }

    if (!isset($email))
    {
        $errors['email_error_msg'] = 'Отсутствует электронная почта';
    }
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        $errors['email_error_msg'] = 'Неверно набранная электронная почта';
    }

    if (!isset($message))
    {
        $errors['message_error_msg'] = "Отсутствует сообщение";
    }

    foreach($errors as $answer)
    {
        echo "<p>$answer</p>";
    }
}

saveFeedbackPage();
