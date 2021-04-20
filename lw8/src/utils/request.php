<?php

function getPostParameter(string $value)
{
    $param = $_POST[$value];
    return $param;
}

function getGetParameter(string $value): string
{
    $param = $_GET($value);
    return $param;
}

function getRequestMethod(): string
{
    $method = $_SERVER['REQUEST_METHOD'];
    return $method;
}

