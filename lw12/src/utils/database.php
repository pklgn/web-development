<?php

function database(): PDO
{
    static $connection = null;
    if ($connection === null) {
        $connection = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    }
    return $connection;
}

function saveFeedback(array $feedback): void
{
    $sql = "REPLACE INTO feedback (name, email, country, gender, message)
            VALUES (:name, :email, :country, :gender, :message);";
    $statement = database()->prepare($sql);
    $statement->execute([
        ':name' => $feedback['name'],
        ':email' => $feedback['email'],
        ':country' => $feedback['country'],
        ':gender' => $feedback['gender'],
        ':message' => $feedback['message'],
    ]);
}

function getFeedback(string $email): array
{
    $sql = "SELECT * FROM feedback WHERE email = ?;";
    $statement = database()->prepare($sql);
    $statement->execute([$email]);
    return $statement->fetch();
}

function userExist(string $email): bool
{
    $email = database()->quote($email);
    $sql = "SELECT COUNT(`email`) FROM feedback WHERE email = {$email};";
    $statement = database()->query($sql);
    $answer = $statement->fetch();
    return $answer[0][0];
}
