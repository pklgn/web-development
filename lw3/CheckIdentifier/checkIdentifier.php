<?php

function checkIdentifier($identifier): ?string
{
    $identifier = strtolower($identifier);
    $len = strlen($identifier) - 1;
    if ($len === -1)
    {
        return 'Empty value';
    }
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

$entryValue = $_GET['Identifier'];
if ($entryValue !== null)
{
    $res = checkIdentifier($entryValue);
    echo $res;
}
else
{
    echo 'Nothing to check';
}
