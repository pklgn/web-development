<?php

function createFile($dir):void
{
    $templateList = ['first_name', 'last_name', 'email', 'age'];
    $userFile = fopen($dir, "w+");
    foreach ($templateList as $value)
    {
        fwrite($userFile, $value.": \r\n");
    }
    fclose($userFile);
    echo count(file($userFile));
    
}

function splitFile($dir):array
{
    $userFile = fopen($dir, "r+");
    for ($i = 0; $i < count($userFile); $i++)
    {
        $arrayFile[] = fgets($userFile);
    }
    echo "splitFile<br>";
    var_dump($arrayFile);
    return $arrayFile;
}

function surveySaver(): ?string
{
    $arrayOfParametres = [
        'first_name' => trim($_GET['first_name']),
        'last_name' =>  trim($_GET['last_name']),
        'email' => trim($_GET['email']),
        'age' => trim($_GET['age']),
    ];
    $uploaddir = 'data\\'.$arrayOfParametres['email'].'.txt';
    if (! file_exists($uploaddir))
    {
        createFile($uploaddir);
    }
    echo $uploaddir."<br>";
    for ($i = 0; $i < count($arrayOfParametres); $i++)
    {
        $parameter = current($arrayOfParametres);
        if (isset($parameter))
        {
            $str = key($arrayOfParametres).": ".$parameter."\n";
        }
        else
        {
            $str = null;
        }
        echo $str."<br>";
        $newArrayFile[] = $str; 
        next($arrayOfParametres);
    }
    var_dump($newArrayFile);
    $arrayFile = splitFile($uploaddir);
    var_dump($arrayFile);
    $userFile = fopen($uploaddir, 'r+');

    for ($i = 0; $i < count($userFile); $i++)
    {
        $newParameter = current($newArrayFile);
        if (! isset($newParameter))
        {
            fwrite($userFile, $newParameter);
        }
        else
        {
            fwrite($userFile, current($arrayFile));
        }
        next($arrayFile);
        next($newArrayFile);
    }
    fclose($userFile);
    return $uploaddir;
}

surveySaver();