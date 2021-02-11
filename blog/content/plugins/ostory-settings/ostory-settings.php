<?php
/*
Plugin Name: oStory
Author: oStory Team
Description: Plugin pour la création d'aventures dont vous êtes le héros
Version: 0.0.2
*/

// Sécurisation du plugin
if (!defined('WPINC')) {die();}

// Inclusion des différentes classes necessaire au plugin
require plugin_dir_path(__FILE__) . 'inc/story_cpt.php';
require plugin_dir_path(__FILE__) . 'inc/rest_api.php';
require plugin_dir_path(__FILE__) . 'inc/register_route.php';
require plugin_dir_path(__FILE__) . 'inc/filter_taxo.php';

// CTP Story + Taxo
$story_cpt = new Story_cpt();

register_activation_hook(__FILE__, [$story_cpt, 'activation']);
register_deactivation_hook(__FILE__, [$story_cpt, 'deactivation']);

// Rest Api
$ostory_rest_api = new oStoryRestApi();
