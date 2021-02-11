<?php get_header(); ?>

<!-- à supprimer si tout fonctionne -->

<!-- <div class="footer__newsletter" id="contact">
    <form class ="unsubscribe-newsletter" id="unsubscribe-newsletter" action="" method="POST">
        <h5>Pour vous désinscrire de la Newsletter, entrez votre email.</h5>
        <div class="newsletter-form">
            <div class="newsletter-email">
                <input type="email" name="unsubscribe__email" placeholder="Votre adresse email ici" />
            </div>
            <div class="newsletter-submit">
                <input type="hidden" name="submit" value="envoyer" />
                <input type="submit" name="submit" value="envoyer" />
            </div>
        </div>
    </form> -->

<section class="newsletter" id="contact">
    <form class="newsletter__unsubscribe-newsletter" id="unsubscribe-newsletter" action="" method="POST">
        <h5>Pour vous désinscrire de la Newsletter, entrez votre email.</h5>
        <div class="newsletter__unsubscribe-newsletter__form">

            <div class="newsletter__unsubscribe-newsletter__form__email">
                <input type="email" name="unsubscribe__email" placeholder="Votre adresse email ici" />
            </div>

            <div class="newsletter__unsubscribe-newsletter__form__submit">
                <input type="hidden" name="submit" value="envoyer" />
                <input type="submit" name="submit" value="envoyer" />
            </div>
        </div>
    </form>

    <div class="confirmation-true"><?= $ok ?></div>
    <div class="confirmation-false"><?= $fail ?></div>
</section>


<?php

// TODO : A voir si on ne peut pas le greffer sur un add-action ou un hook pour libérer le footer.

if (!empty($_POST['submit'])) {

    $email = htmlspecialchars(stripslashes(trim($_POST['unsubscribe_email'])));

    if (!preg_match("/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/", $email)) {

        //'<p class="default-email"> Les caractères saisis sonts incorrects, veuillez à nouveau saisir votre email </p>';

        $email = false;
    }

    // On check si l'email est déjà présent dans la custom DB, pour éviter d'avoir des doublons
    $data = $wpdb->get_results(
        $wpdb->prepare(
            "SELECT * FROM wp_newsletter WHERE email = %s",
            $email
        )
    );

    // var_dump($email);
    // var_dump($data); // Ici je trouve bien mes informations de la custom DB après avoir soumis mon formulaire, voici le résultat array(6) { [0]=> object(stdClass)#5536 (2) { ["id"]=> string(2) "31" ["email"]=> string(25) "oclock.n.talbot@gmail.com" } 
    // echo $wpdb->get_results;
    // echo $wpdb->num_rows; // Ici je retrouve le nombre des emails rentrés dans la BDD, à compter de 0. Ici, j'ai rentré 8 fois le mail oclock.n.talbot@gmail.com, j'ai donc le résultat "7", il me suffit donc de dire "si c'est supérieur à 0, alors le mail est déjà présent dans la custom DB, donc erreur.

    if ($wpdb->num_rows  >= 0) {

        // Vérification de PHP contre les injections SQL
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // echo('<p class="sucess-email">' . $email . ' est une adresse email valide </p>');

            // Suppression de l'email du subscriber
            global $wpdb;

            $table_name = $wpdb->prefix . 'newsletter';

            $data = array(

                'email' => $_POST['unsubscribe_email'],

            );

            $format = array(

                '%s'

            );


            // $ok = $wpdb->delete($table_name, $data, $format);
            $ok = $wpdb->query(
                $wpdb->prepare(
                    "DELETE FROM wp_newsletter WHERE email = %s",
                    $email
                )
            );

            if ($ok) {

                $ok = '<div class="confirmation-true"><p class="newsletter-success">Vous êtes bien désinscrit(e) à la newsletter ! Vous ne recevrez plus d\'emails de notre part</p></div>';
            } else {
                $email = false;
                $fail = '<div class="confirmation-false"><p class="default-email"> Email incorrect </p></div>';
            }
        } else {
            $email = false;
            $fail = '<div class="confirmation-false"><p class="default-email"> Email incorrect </p></div>';
        }
    }
}
?>

<div class="confirmation-true"><?= $ok ?></div>
<div class="confirmation-false"><?= $fail ?></div>
</div>

<?php get_footer(); ?>