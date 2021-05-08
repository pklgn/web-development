<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="../../web/css/feedbacks/style.css"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"/>
    <title>Feedbacks</title>
</head>
<body>
<div class="form-wrapper">
    <div class="form-title">
        <hr class="form-title__line">
        <div class="form-title__text">
            Узнать о пользователе
        </div>
        <hr class="form-title__line">
    </div>
    <form class="form" method="post">
        <div class="form__fields">
            <div class="form__list">
                <div class="form__item">
                    <label class="label label_email" for="email">Email пользователя</label>
                    <input class="form__field" name="email" type="text" id="email"
                           value="<?php echo $args['email'] ?? '' ?>"/>
                    <?php if (isset($args['email_error_msg'])): ?>
                        <p class="error"><?php echo $args['email_error_msg']; ?></p>
                    <?php endif; ?>
                </div>
                <?php if (isset($args['email'])): ?>
                    <p class="user-info">Доступные данные о пользователе:</p>
                    <ul class="user-list">
                    <?php foreach ($args as $key => $answer): ?>
                        <li class="user-info_value"><?php echo ucwords($key) . ': ' . $answer; ?></li>
                    <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
            </div>
        </div>
        <div class="submit-container__button">
            <input class="submit-container__button-link" type="submit" value="Отправить">
        </div>
    </form>
</div>
</body>
</html>