<?php
function surveySaver(): ?string
{
    $first_name = $_GET['first_name'];
    $last_name = $_GET['last_name'];
    $email = $_GET['email'];
    $age = $_GET['age'];
    $dir = 'data\\'.$email.'.txt';
    $userFile = fopen($dir, 'w+');
    $identifiersArray = ['first_name', 'last_name', 'email', 'age'];
    $valuesArray = [$first_name, $last_name, $email, $age];
    for ($i = 0; $i < count($identifiersArray); $i++)
    {
        if ($valuesArray !== null)
        {
            $str = $identifiersArray[$i].': '.$valuesArray[$i]."\n";
        }
        else
        {
            $str = $identifiersArray[$i]."\n";
        }
        fwrite($userFile, $str); 
    }
    fclose($userFile);
    return $dir;
}

surveySaver();