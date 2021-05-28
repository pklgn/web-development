<?php

function removeExtraBlanksFrom(string $value): string
{
    $value = trim($value);
    preg_replace('/\s+/', ' ', $value);
    return $value;
}

function setEmptyValErr(string $value, array &$errorArr): void
{
    $errorArr['valid'] = false;
    $errorArr["{$value}_error_msg"] = ucwords($value) . " cannot be empty";
}

function setWrongValErr(string $value, array &$errorArr): void
{
    $errorArr['valid'] = false;
    $errorArr["{$value}_error_msg"] = ucwords($value) . " has a wrong format";
}

function saveDataIntoFile(array $data): void
{
    $fileName = strtolower($data['email']);
    $path = __DIR__ . "\..\..\data\\$fileName.txt";
    $file = fopen($path, 'w');
    foreach ($data as $name => $value)
    {
        fwrite($file, "$name: $value" . PHP_EOL);
    }
    fclose($file);
}

function saveFeedbackPage(): void
{
    $name = trim(getPostParameter('name'));
    $email = trim(getPostParameter('email'));
    $message = removeExtraBlanksFrom(getPostParameter('message'));
    $gender = getPostParameter('gender');
    $country = getPostParameter('country');
    $nameTemplate = '/^([а-яА-ЯЁёa-zA-Z]+)$/u';
    $response['valid'] = true;

    if (empty($name)) {
        setEmptyValErr('name', $response);
    } else if (!preg_match($nameTemplate, $name)) {
        setWrongValErr('name', $response);
    } else {
        $response['name'] = $name;
    }

    if (empty($email)) {
        setEmptyValErr('email', $response);
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        setWrongValErr('email', $response);
    } else {
        $response['email'] = $email;
    }

    if (!empty($gender))
    {
        $response['gender'] = $gender;
    }

    if (!empty($country))
    {
        $response['country'] = $country;
    }

    if (empty($message)) {
        setEmptyValErr('message', $response);
    } else {
        $message = str_replace("\r\n", "<br />", $message);
        $response['message'] = $message;
    }

    if ($response['valid'] === true)
    {
        unset($response['valid']);
        saveFeedback($response);
    }

    renderTemplate("main.tpl.php", $response);
}


