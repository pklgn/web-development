SELECT
    student.first_name AS Имя,
    student.last_name AS Фамилия,
    `group`.name AS Группа
FROM student
    LEFT JOIN `group` ON student.group_id = `group`.id
WHERE
    student.age = 18;