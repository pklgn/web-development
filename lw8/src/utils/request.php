<?php
class Request
{
    public function getPostParameter(string $value): string
    {
        $param = $_POST[$value];
        return $param;
    }

    public function getGetParameter(string $value): string
    {
        $param = $_GET($value);
        return $param;
    }

    public function getRequestMethod(): string
    {
        $method = $_SERVER['REQUEST_METHOD'];
        return $method;
    }

}