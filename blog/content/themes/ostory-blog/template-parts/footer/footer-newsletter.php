

<?php if (get_theme_mod('ostory_footer_newsletter')): ?>
<div class="footer__newsletter" id="contact">
    <form id="newsletter-footer" action="" method="POST">
        <h5>Inscrivez-vous pour recevoir notre Newsletter !</h5>
        <div class="newsletter-form">
            <div class="newsletter-email">
                <input type="email" name="subscriber_email" placeholder="Votre adresse email ici" />
            </div>
            <div class="newsletter-submit">
                <input type="hidden" name="submit" value="envoyer" />
                <input type="submit" name="submit" value="envoyer" />
            </div>
        </div>
    </form>
    
<?php endif; ?>

<?php

    // TODO : A voir si on ne peut pas le greffer sur un add-action ou un hook pour libérer le footer.

    if (!empty($_POST['submit'])) {

        $email = htmlspecialchars(stripslashes(trim($_POST['subscriber_email'])));

        if (!preg_match("/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/", $email)) {

            $email = '';
        }

        // On check si l'email est déjà présent dans la custom DB, pour éviter d'avoir des doublons
        $data = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT * FROM wp_newsletter WHERE email = %s",
                $email 
            )
        );

        // var_dump($data); // Ici je trouve bien mes informations de la custom DB après avoir soumis mon formulaire, voici le résultat array(6) { [0]=> object(stdClass)#5536 (2) { ["id"]=> string(2) "31" ["email"]=> string(25) "oclock.n.talbot@gmail.com" } 

        // echo $wpdb->num_rows; // Ici je retrouve le nombre des emails rentrés dans la BDD, à compter de 0. Ici, j'ai rentré 8 fois le mail oclock.n.talbot@gmail.com, j'ai donc le résultat "7", il me suffit donc de dire "si c'est supérieur à 0, alors le mail est déjà présent dans la custom DB, donc erreur.

        if ($wpdb->num_rows > 0) {
            
            $email = '';

            $already_exist = 'Vous avez déjà souscrit à la Newsletter';
        }

    
        // Vérification de PHP contre les injections SQL
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

            // Insertion de l'email du subscriber
            global $wpdb;

            $table_name = $wpdb->prefix . 'newsletter';

            $data = array(

                'email' => $_POST['subscriber_email'],

            );

            $format = array(

                '%s'

            );
            

            $success = $wpdb->insert($table_name, $data, $format);

            // Je dis à Wordpress d'éxecuter une query SQL et de me retourner l'entièreté du résultat. Il va ainsi me donner les résultats sous forme de tableau. 
            // Ici, je cherche à detecter deux emails présents dans deux table différentes. Un des emails se trouve dans wp_newsletter, notre BDD custom, l'autre dans la table native wp_users.
            // La requête est donc : selectionne sur la table wp_newsletter le champ email, sur la table wp_users le champ user_email depuis la table wp_newsletter que je joints à wp_users ou l'email est le résultat de la saisie de l'utilisateur. L'insertion en BDD s'étant faite juste au dessus, le code est capable de répérer si oui où non le résultat est dispo en BDD.
            $data = $wpdb->get_results(
                $wpdb->prepare(
                "SELECT wp_newsletter.email, wp_users.user_email FROM wp_newsletter INNER JOIN wp_users ON email = user_email WHERE email = %s",
                $email
                )
            );
            // var_dump($data); Je retrouve mes deux mails présents dans mes deux tables wp_newsletter et wp_users, ajouter un utilisateur dans wp_newsletter qui n'est pas dans wp_users renvoie un tableau vide.
            
            
            $count_email = $wpdb->num_rows;
            // echo $count_email; retourne 0 si l'utilisateur n'est pas inscrit sur le site (wp_users) mais qu'il a souscrit à la newsletter. Il renvoit 1 si l'utilisateur est déjà présent dans wp_users et wp_newsletter.

            if ($success) {

                $sucess = '<div class="confirmation-true"><p class="newsletter-success">Merci, vous êtes bien inscrit(e) à la newsletter ! Un email va vous être envoyé pour confirmer votre inscription </p></div>';


                // Ici, le but est de detecter que l'utilisateur n'est pas inscrit sur le site, et de lui proposer le cas échéant de le faire.
                if ($count_email === 0) {
                    $you_should_subscribe = '<p class="newsletter-success"> Pas encore inscrit ? N\'attendez plus et allez sur <a href="www.ostory.io/#/signup">pour vous inscrire</a> et pour participer à une aventure ! </p>' ;
                    echo $you_should_subscribe;
                }

                $user = $_POST['subscriber_email'];

                $title = 'Confirmation de l\'inscription à la newsletter';

                $header = 'oStory' ;

                $headers  = 'MIME-Version: 1.0' . "\r\n";
        
                $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
        
                $headers .= 'Cci: sssssssssss' . "\r\n";
        
                $headers .= 'From: ' . $header. "\r\n";
        
                $title = 'Confirmation de l\'inscription à la newsletter';
        
                mail( $user, $title, 'Vous êtes bien inscrit(e) à la newsletter, pour vous désinscrire, rendez vous sur votre profil ', $headers );

            }
            
        } else {

            $fail = '<div class="confirmation-false"><p class="default-email"> Email incorrect </p></div>';
        }
    }

?>

    <div class="confirmation-true"><?= $sucess ?></div>
    <div class="confirmation-false"><?= $fail . $already_exist ?></div>
</div>
