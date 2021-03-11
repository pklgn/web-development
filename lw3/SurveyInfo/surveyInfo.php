<?php

function showInfo($user): string
{
    $userFilePath = "..\SurveySaver\data\\".$user.".txt";
    $file = fopen($userFilePath, "r");
    $userArrayFile = file($userFilePath);
    fclose($file);
    foreach($userArrayFile as $str)
    {
        echo $str."<br />";
    }
    return $userFilePath;
}

$user = $_GET["email"];
showInfo($user);