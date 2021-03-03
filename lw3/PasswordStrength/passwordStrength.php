<?php

function passwordStrength($password): ?int
{
    $safety = 0;
    $lenConstant = strlen($password);
    $len = $lenConstant;
    $safety += 4 * $len;
    $countNumbers = 0;
    $countLettersUpper = 0;
    $countLettersLower = 0;
    while ($len > 0)
    {
        $ch = $password[$len];
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
        $len -= 1;
    }
    $safety += $countNumbers;
    $safety += 2*($lenConstant - $countLettersUpper);
    $safety += 2*($lenConstant - $countLettersLower);
    if ($countNumbers === 0)
    {
        $safety -= $lenConstant;
    }
    if ($countLettersLower === 0 && $countLettersUpper === 0)
    {
        $safety -= $lenConstant;
    }
    $newLenConstant = strlen(join(array_unique(str_split($a))));
    $delta = $lenConstant - $newLenConstant + 1;
    $safety -= $delta;
    return $safety;
}


echo passwordStrength($_GET["password"]);