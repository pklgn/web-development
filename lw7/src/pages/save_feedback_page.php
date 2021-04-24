<?php

require_once "../utils/request.php";
require_once "../utils/template.php";

function removeExtraBlanksFrom($value): string
{
    $value = trim($value);
    preg_replace('/\s+/', ' ', $value);
    return $value;
}


function saveFeedbackPage()
{
    $name = getPostParameter('name');
    $email = getPostParameter('email');
    $message = getPostParameter('message');
    $gender = getPostParameter('gender');
    $country = getPostParameter('country');
    $errors = [];
    $legalValues = [];
    $nameTemplate = '/^([а-яА-ЯЁёa-zA-Z]+)$/u';


    $message = removeExtraBlanksFrom($message);
    if (!isset($name))
    {
        $errors['name_error_msg'] = 'Отсутствует имя';
    }
    elseif (!preg_match($nameTemplate, $name))
    {
        $name = removeExtraBlanksFrom($name);
        $errors['name_error_msg'] = 'Неверно набранное имя';
    }

    if (!isset($email))
    {
        $errors['email_error_msg'] = 'Отсутствует электронная почта';
    }
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        $email = trim($email);
        $errors['email_error_msg'] = 'Неверно набранная электронная почта';
    }

    if (!isset($message))
    {
        $errors['message_error_msg'] = "Отсутствует сообщение";
    }
    else
    {
        $message = removeExtraBlanksFrom($message);
    }

    if (count($errors))
    {
        renderTemplate("main.tpl.php", $errors);
    }
}


