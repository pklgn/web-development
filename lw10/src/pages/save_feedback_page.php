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
    $errorArr["{$value}_error_msg"] = 'empty';
}

function setWrongValErr(string $value, array &$errorArr): void
{
    $errorArr['valid'] = false;
    $errorArr["{$value}_error_msg"] = 'wrong';
}

function getJSON()
{
    $data = file_get_contents('php://input');
    return json_decode($data, true);
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

function saveFeedbackPage()
{
    $request = getJSON();
    $email = $request['email'];
    $name = $request['name'];
    $message = removeExtraBlanksFrom($request['message']);
    $gender = $request['gender'];
    $country = $request['country'];
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
        saveDataIntoFile($response);
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}

saveFeedbackPage();


