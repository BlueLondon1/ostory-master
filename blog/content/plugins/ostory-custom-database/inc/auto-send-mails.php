<?php

class autoMailing
{

    // The function trigger when a new post is added by a developper or an administrator, it automaticly send mails to all the Newsletter's subscriber.
    public function __construct() {
        add_action( 'auto-draft_to_publish',[ $this, 'email_members' ] ); // auto-draft_to_publish allow me to send mail just when a new post is added, not when he's updated or corrected, i originally used publish_post but it send mails when i just add some changes to a post :(.
    }
    public function email_members( $post_ID )  { // I took the current post_ID

        global $wpdb; // contains a set of functions used to interact with a database. Its primary purpose is to provide an interface with the WordPress database

        $usersarray = $wpdb->get_col("SELECT email FROM wp_newsletter;"); // here I select all my subscraibers emails in my custom database with an SQL request.

        $users = implode(",", $usersarray); // implode = array to string, here my email's database.

        $header = 'oStory' ;

        $headers  = 'MIME-Version: 1.0' . "\r\n";

        $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

        $headers .= 'Cci: sssssssssss' . "\r\n";

        $headers .= 'From: ' . $header. "\r\n";

        $title = 'Une nouvelle mise à jour va arriver !';

        mail( $users, $title, 'Venez voir directement sur : http://92.243.9.174/blog/', $headers );


        return $post_ID;
    }

}


// TODO : I want to link the content of my new published post in my email. Like that, people don't have to click on the link for see what's the news.