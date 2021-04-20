<!DOCTYPE html>
<html lang="ru">
<head>
    <link href="../../web/css/style.css" rel="stylesheet" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <title>Survey</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
</head>

<body>
<div class="form-wrapper">
    <div class="form-title">
        <hr class="form-title__line">
        <div class="form-title__text">
            НАПИШИ МНЕ
        </div>
        <hr class="form-title__line">
    </div>
    <form class="form" action="../pages/save_feedback_page.php" method="post">
        <div class="form__fields">
            <ul class="form__list">
                <li class="form__item">
                    <label class="label label_name" for="name">Ваше имя</label>
                    <input class="form__field" name="name" type="text" id="name">
                    <?php if (isset($args['name_error_msg'])): ?>
                        <p class="error"><?php echo $args['name_error_msg']; ?></p>
                    <?php endif; ?>
                </li>
                <li class="form__item">
                    <label class="label label_email" for="email">Ваш email</label>
                    <input class="form__field" type="text" id="email">
                    <?php if (isset($args['email_error_msg'])): ?>
                        <p class="error"><?php echo $args['email_error_msg']; ?></p>
                    <?php endif; ?>
                </li>
                <li class="form__select">
                    <label class="label label_select" for="country">Откуда вы?</label>
                    <select class="form__select-country" id="country">
                        <option class="form__select-option" value="Russia">Россия</option>
                        <option class="form__select-option" value="China">Китай</option>
                        <option class="form__select-option" value="England">Англия</option>
                    </select>
                </li>
                <li class="form__radio">
                    <label class="label label_radio" for="">Ваш пол</label>
                    <div class="form__radio-wrapper">
                        <input class="form__gender-item" type="radio" id="male" name="gender" value="male">
                        <label class="form__gender-item-info" for="male">Мужской</label>
                        <input class="form__gender-item" type="radio" id="female" name="gender" value="female">
                        <label class="form__gender-item-info" for="female">Женский</label>
                    </div>
                </li>
                <li class="form__textarea">
                    <label class="label label_textarea" for="text">Ваше сообщение</label>
                    <textarea class="form__textarea-field" id="text"></textarea>
                    <?php if (isset($args['message_error_msg'])): ?>
                        <p class="error"><?php echo $args['message_error_msg']; ?></p>
                    <?php endif; ?>
                </li>
            </ul>
        </div>
        <div class="submit-container__button">
            <input class="submit-container__button-link" type="submit" value="Отправить">
        </div>
    </form>
</body>
</html>