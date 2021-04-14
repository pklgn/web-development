<?php

function renderTemplate(string $tplName, array $args = []): void
{
    include __DIR__ . "../templates/{$tplName}";
}
