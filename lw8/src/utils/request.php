<?php

function getPostParameter(string $value): string
{
    isset($value) ? $param = $_POST[$value] : $param = null;
    return $param;
}

function getGetParameter(string $value): string
{
    isset($value) ? $param = $_POST[$value] : $param = null;
    return $param;
}

function getRequestMethod(): string
{
    $method = $_SERVER['REQUEST_METHOD'];
    return $method;
}

