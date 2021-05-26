CREATE DATABASE university;

USE university;

CREATE TABLE faculty
(
    `id`   INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255)       NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;

CREATE TABLE `group`
(
    `id`         INT AUTO_INCREMENT NOT NULL,
    `name`       VARCHAR(255)       NOT NULL,
    `faculty_id` INT                NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;

CREATE TABLE `student`
(
    `id`         INT AUTO_INCREMENT NOT NULL,
    `first_name` VARCHAR(255)       NOT NULL,
    `last_name`  VARCHAR(255)       NOT NULL,
    `age`        INT                NOT NULL,
    `group_id`   INT                NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;


INSERT INTO faculty
    (`name`)
VALUES ('ММФ'),
       ('ФЕН'),
       ('ГГФ');

INSERT INTO `group`
    (name, faculty_id)
VALUES ('ВМ-101', 1),
       ('ВМ-102', 1),
       ('ПМ-101', 1),
       ('АГ-109', 2),
       ('ФХ-111', 2),
       ('КМ-113', 2),
       ('ГФ-101', 3),
       ('ГФ-110', 3),
       ('ГФ-111', 3);

INSERT INTO student
    (first_name, last_name, age, group_id)
VALUES
    ('ВЛАДИМИР', 'БАКЛАНОВ', 19, 1),
    ('МАРИЯ', 'ВИНОГРАДОВА', 18, 1),
    ('ВСЕВОЛОД', 'ЗАОСТРОВСКИЙ', 20, 1),
    ('КОНСТАНТИН', 'ЗЕМЛЯНОВ', 19, 1),
    ('МАРГАРИТА', 'ЗОТОВА', 19, 1),
    ('МАРГАРИТА', 'ЗОТОВА', 21, 2),
    ('ДИАНА', 'КАЛИКАЕВА', 19, 2),
    ('ЕФИМ', 'КАЛИНИН', 20, 2),
    ('АЛЕКСАНДР', 'КАМЫЗИН', 18, 2),
    ('ПОЛИНА', 'КАЧАНОВА', 18, 2),
    ('ПАВЕЛ', 'КОРНИЙЧУК', 19, 3),
    ('АЛЕКСАНДРА', 'ЛОМОНОСОВА', 18, 3),
    ('АЛЕКСАНДР', 'ЛЮЛЯКОВ', 18, 3),
    ('АНАСТАСИЯ', 'МАХОВА', 18, 3),
    ('НИКИТА', 'НИКИТЕНКО', 18, 3),
    ('МИХАИЛ', 'СЁМИН', 18, 4),
    ('НАДЕЖДА', 'СОЛОДОВА', 18, 4),
    ('ДАРЬЯ', 'СТЕРЖАНТОВА', 19, 4),
    ('СЕРГЕЙ', 'ТРОФИМОВ', 21, 4),
    ('ДЕНИС', 'ХАРИТОНОВ', 20, 4),
    ('ЭДВАРД', 'ТУМАНЯНЦ', 18, 5),
    ('ДАРЬЯ', 'ШАРОВА', 18, 5),
    ('ОЛЬГА', 'ЮШКОВА', 18, 5),
    ('ВЛАДИСЛАВ', 'МОРОЗОВ', 20, 5),
    ('ПОЛИНА', 'МОСКВИЧЕВА', 18, 5),
    ('ПАВЕЛ', 'ВИНОГРАДОВ', 19, 6),
    ('МАРИЯ', 'БАКЛАНОВА', 18, 6),
    ('ГЕРМАН', 'ДЕНИСЕНКО', 20, 6),
    ('ПАВЕЛ', 'ЗАГИБАЛОВ', 19, 6),
    ('НАИЛЬ', 'ЗИАТДИНОВ', 20, 6),
    ('СТЕПАН', 'ИГУМЕНИКОВ', 20, 7),
    ('АЛЕКСАНДР', 'КАРАСЕВ', 19, 7),
    ('ОЛЕГ', 'КАРПОВ', 20, 7),
    ('ОКСАНА', 'КАШИНА', 18, 7),
    ('АНТОН', 'КОНОПЛЁВ', 18, 7),
    ('АЛЕКСАНДР', 'КОРЕЦКИЙ', 19, 8),
    ('АЛИСА', 'ЛУШИНА', 18, 8),
    ('ВАСИЛИСА', 'МАСЛЕННИКОВА', 18, 8),
    ('ИВАН', 'МИШУНИН', 18, 8),
    ('ДАРЬЯ', 'МОНИНА', 18, 8),
    ('МИХАИЛ', 'ПОЛОЗОВ', 18, 9),
    ('ИВАН', 'ПРОТАСОВ', 18, 9),
    ('ЕГОР', 'РОЛГИН', 19, 9),
    ('ГЛЕБ', 'ЗУБКО', 18, 9),
    ('КИРИЛЛ', 'КИРЕЕВ', 19, 9);















