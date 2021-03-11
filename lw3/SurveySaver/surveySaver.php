<?php

function createFile($dir): void
{
    $templateList = ['first_name', 'last_name', 'email', 'age'];
    $userFile = fopen($dir, "w+");
    foreach ($templateList as $value)
    {
        fwrite($userFile, $value.": \r\n");
    }
    fclose($userFile);
}

function writeFile($dir, $array): void
{
    $userFile = fopen($dir, "w");
    foreach($array as $value)
    {
        fwrite($userFile, $value);
    }
    fclose($userFile);
}

function surveySaver(): string
{
    $arrayOfParametres = [
        'first_name' => $_GET['first_name'],
        'last_name' =>  $_GET['last_name'],
        'email' => $_GET['email'],
        'age' => $_GET['age'],
    ];
    $uploadDir = 'data\\'.$arrayOfParametres['email'].'.txt';
    if (! file_exists($uploadDir))
    {
        createFile($uploadDir);
    }
    $arrayFile = file($uploadDir);
    reset($arrayFile);
    foreach($arrayOfParametres as $key => $value)
    {
        $oldValue = current($arrayFile); 
        echo "arrayOfParametres ".$key." and ".$value."<br />";
        if (! is_null($value))
        {
            $str = $key.": ".$value."\n";
        }
        else
        {
            $str = $oldValue;
        }
        $newArrayFile[] = $str;
        next($arrayFile); 
    }
    writeFile($uploadDir, $newArrayFile);
    return $uploadDir;
}

surveySaver();