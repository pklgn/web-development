<?php

function collectUserData(string $dir, array &$userInfo): array
{
    $userFile = fopen($dir, "r");
    while($currLine = fgets($userFile))
    {
        $currLine = explode(': ', $currLine);
        $userInfo[$currLine[0]] = $currLine[1];
    }
    fclose($userFile);

    return $userInfo;
}

function checkUserEmail(string $email, array &$result): void
{
    if (empty($email))
    {
        setEmptyValErr('email', $result);
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        setWrongValErr('email', $result);
    }
}

function feedbacksListPage(): void
{
    $response = [];
    $method = getRequestMethod();

    if ($method == 'post')
    {
        $email = $_POST['email'];
        $userDir = __DIR__ . "\..\..\data\\$email.txt";
        checkUserEmail($email, $response);
        if (file_exists($userDir))
        {
            $response['email'] = $email;
            collectUserData($userDir, $response);
        }
        else if (!isset($response['email_error_msg']))
        {
            $response['email_error_msg'] = "$email user does not exist";
        }
    }
    renderTemplate('feedbacks.tpl.php', $response);
}