<?php
/*
Plugin Name: Newsletter oStory
Author: oStory Team
Description: Création d'une table newsletter.
Version: 0.0.1
*/

// Sécurisation du plugin
if (!defined('WPINC')) {die();}

// Inclusion des différentes classes necessaire au plugin
require plugin_dir_path(__FILE__) . 'inc/custom-database.php';
require plugin_dir_path(__FILE__) . 'inc/auto-send-mails.php';


// CUSTOM DATABASE FOR OUR NEWSLETTER
$custom_database = new customDatabase();
register_activation_hook( __FILE__, [$custom_database, 'newsletter_db'] );

// AUTO MAILING FOR THE NEWSLETTER (1 new post = 1 email)
$auto_mailing = new autoMailing();

