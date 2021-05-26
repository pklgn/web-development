CREATE TABLE user
(
    id       INT AUTO_INCREMENT NOT NULL,
    name     VARCHAR(255)       NOT NULL,
    password VARCHAR(255)       NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;

INSERT INTO user
    (name, password)
VALUES ('TestName', md5('1234234')),
       ('TestName6', md5('123449')),
       ('TestName5', md5('123412')),
       ('TestName4', md5('12342')),
       ('TestName3', md5('123443')),
       ('TestName2', md5('12344')),
       ('TestName1', md5('12345'));

SELECT *
FROM user
WHERE name = 'TestName' or name = 'TestName5';
