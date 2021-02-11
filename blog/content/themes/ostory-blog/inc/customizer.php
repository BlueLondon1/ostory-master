<?php

// J'inclu mes fichiers de customizer
require('customizer/ostory_header.php');
require('customizer/ostory_home.php');
require('customizer/ostory_footer.php');

function ostory_customize_register($wp_customize) {

    // Je déclare un nouveau panel
    $wp_customize->add_panel('ostory_theme_panel', [
        // Titre du panel
        'title' => 'oStory',
        // Description du panel (dans le ?)
        'description' => 'oStory - Gestion du thème',
        // Emplacement
        'priority' => 1,
    ]);

    // Je déclare une nouvelle section
    $wp_customize->add_section('ostory_header', [
        // Titre de la section
        'title' => 'Header',
        // Panel de la section
        'panel' => 'ostory_theme_panel',
        // Description de la section
        'description' => 'Mise en forme du header',
    ]);

    // Je déclare une nouvelle section
    $wp_customize->add_section('ostory_home', [
        // Titre de la section
        'title' => 'Page d\'accueil',
        // Panel de la section
        'panel' => 'ostory_theme_panel',
        // Description de la section
        'description' => 'Mise en forme de la page d\'accueil',
    ]);

    // Je déclare une nouvelle section
    $wp_customize->add_section('ostory_footer', [
        // Titre de la section
        'title' => 'Footer',
        // Panel de la section
        'panel' => 'ostory_theme_panel',
        // Description de la section
        'description' => 'Mise en forme du footer',
    ]);

    // J'appel ma fonction dédiée au customizer de la section home
    ostory_header($wp_customize);

    // J'appel ma fonction dédiée au customizer de la section home
    ostory_home($wp_customize);

    // J'appel ma fonction dédiée au customizer de la section footer
    ostory_footer($wp_customize);

}

add_action('customize_register', 'ostory_customize_register');