<?php

function checkIdentifier($identifier): ?string
{
    $count = 0;
    $identifier = strtolower($identifier);
    $len = strlen($identifier) - 1;
    while ($len >= 0)
    {
        $ch = $identifier[$len];
        if ($len === 0)
        {
            if ($ch < 'a' or $ch > 'z')
            {
                return 'No, the first character: '.$ch.' isn\'t a letter';
            }
        }
        if (($ch < 'a' or $ch > 'z') && ($ch < '0' or $ch > '9'))
        {
            return 'No, the character: '.$ch.' isn\'t a letter or number ';
        }
        $len -= 1;
    }
    return 'Yes';
}

$res = checkIdentifier($_GET['Identifier']);
echo $res;