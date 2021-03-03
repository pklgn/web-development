<?php
function removeExtraBlanks(string $str): ?string
{
    trim($str);
    $len = strlen($str);
    $count = 0;
    $foundBlank = 0;
    $res = '';
    while ($len > 0)
    { 
        $ch = $str[$count];
        if ($ch !== ' ')
        {
            $foundBlank = 0;
        }
        elseif ($foundBlank === 1)
        {
            $foundBlank = 2;
        }
        else
        {
            $foundBlank = 1;
        }
        if ($foundBlank !== 2)
        {
            $res .= $ch;
        }
        $count += 1;
        $len -= 1;
    }
    return $res;
}

$msg = removeExtraBlanks($_GET['text']);
echo $msg;