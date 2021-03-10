<?php

function passwordStrength($password): ?int
{
    $safety = 0; # надежность пароля изначально
    $lenConstant = strlen($password);
    $safety += 4*$lenConstant; 
    $countNumbers = 0;
    $countLettersUpper = 0;
    $countLettersLower = 0;
    for ($i = 0; $i < $lenConstant; $i++)
    {
        $ch = $password[$i-1];
        if ($ch >= '0' && $ch <= '9')
        {
            $countNumbers += 1;
        }
        elseif ($ch >= 'A' && $ch <= 'Z')
        {
            $countLettersUpper += 1;
        }
        else
        {
            $countLettersLower += 1;
        }
    }
    $safety += 4*$countNumbers; 
    if ($countLettersUpper > 0)
    {
        $safety += 2*($lenConstant - $countLettersUpper);
    }
    if ($countLettersLower > 0)
    {
        $safety += 2*($lenConstant - $countLettersLower);
    }
    if ($countNumbers === 0)
    {
        $safety -= $lenConstant;
    }
    if ($countLettersLower === 0 && $countLettersUpper === 0)
    {
        $safety -= $lenConstant;
    }
    $countRepeats = 0;
    $newLenConstant = strlen(join(array_unique(str_split($password))));
    foreach (count_chars($password, 1) as $value)
    {
        if ($value !== 1)
        {
            $countRepeats += 1;
        }
    }
    $delta = $lenConstant - $newLenConstant + $countRepeats;
    $safety -= $delta;
    return $safety;
}

$passwordValue = $_GET["password"];
if ($passwordValue !== null)
{
    echo passwordStrength($passwordValue);    
}
else
{
    echo 'There isn\'t any password to check';
}   