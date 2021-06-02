<?php

function passwordStrength($password): ?int
{
    $safety = 0; #надежность пароля изначально
    $lenConstant = strlen($password);
    $safety += 4*$lenConstant; #к надежности прибавляется 4*(количество символов)
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
    $safety += 4*$countNumbers; #к надежности добавляется 4*(количество цифр) 
	echo "Надежность пароля увеличивается на 4*$countNumbers за счет {$countNumbers} цифр<br />";
    if ($countLettersUpper > 0)
    {
        $safety += 2*($lenConstant - $countLettersUpper); #к надежности прибавляется ((len -n)*2)
		echo "Надежность пароля увеличивается на 2*($lenConstant - $countLettersUpper) за счет {$countLettersUpper} заглавных букв<br />";
    }
    if ($countLettersLower > 0)
    {
        $safety += 2*($lenConstant - $countLettersLower); #к надежности прибавляется ((len -n)*2)
		echo "Надежность пароля увеличивается на 2*($lenConstant - $countLettersLower) за счет {$countLettersLower} строчных букв<br />";
    }
    if ($countNumbers === 0)
    {
        $safety -= $lenConstant; #пароль состоящий только из букв
		echo "Надежность пароля уменьшается на {$lenConstant} из-за того, что он состоит только из букв<br />";
    }
    if ($countLettersLower === 0 && $countLettersUpper === 0)
    {
        $safety -= $lenConstant; #пароль состоящий только из цифр
		echo "Надежность пароля уменьшается на {$lenConstant} из-за того, что он состоит только из цифр<br />";
    }
    $countRepeats = 0;
    $newLenConstant = strlen(join(array_unique(str_split($password))));
    $delta = $lenConstant - $newLenConstant;
    $safety -= $delta;
	echo "Надежность пароля уменьшается на {$delta}, где {$delta} — число повторяющихся символов <br />";
    return $safety;
}

$passwordValue = $_GET["password"];
if ($passwordValue !== null)
{
    echo "Сложность пароля " . passwordStrength($passwordValue);    
}
else
{
    echo 'There isn\'t any password to check';
}   