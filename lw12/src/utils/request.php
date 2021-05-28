<?php

function getPostParameter(string $value): string
{
    isset($_POST[$value]) ? $param = $_POST[$value] : $param = "";
    return $param;
}

function getGetParameter(string $value): string
{
    isset($_POST[$value]) ? $param = $_POST[$value] : $param = "";
    return $param;
}

function getRequestMethod(): string
{
    $method = $_SERVER['REQUEST_METHOD'];
    return strtolower($method);
}

