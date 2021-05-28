<?php

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

    if ($method === 'post')
    {
        $email = $_POST['email'];
        checkUserEmail($email, $response);
        if (userExist($email))
        {
            $response = getFeedback($email);
            unset($response['id']);
        }
        else if (!isset($response['email_error_msg']))
        {
            $response['email_error_msg'] = "$email user does not exist";
        }
    }
    renderTemplate('feedbacks.tpl.php', $response);
}