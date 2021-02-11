<?php

function ostory_home($wp_customize) {

    $wp_customize->add_setting('ostory_banner_image', []); // Here i want to change the phone in my banner

    $wp_customize->add_control(
        new WP_Customize_Image_Control(
            $wp_customize,
            'logo',
            array(
                'label'      => 'Image de la bannière',
                'section'    => 'ostory_home',
                'settings'   => 'ostory_banner_image',
                'context'    => 'Permet de changer l\'image de fond de la bannière' 
            )
        )
    ); // END OF THIS SETTING - CONTROL //

    $wp_customize->add_setting('ostory_banner_title', []); // Here i want to change the phone in my banner

    $wp_customize->add_control('ostory_banner_title', [
        'type' => 'text',
        'section' => 'ostory_home',
        'label' => 'Titre de la bannière',
        'description' => 'Permet de modifier le titre de la bannière.'
    ]); // END OF THIS SETTING - CONTROL //

    $wp_customize->add_setting('ostory_banner_content', []); // Here i want to change the phone in my banner

    $wp_customize->add_control('ostory_banner_content', [
        'type' => 'textarea',
        'section' => 'ostory_home',
        'label' => 'Contenu de la bannière',
        'description' => 'Permet de modifier le contenu de la bannière.'
    ]); // END OF THIS SETTING - CONTROL //

    $wp_customize->add_setting('ostory_home_nbrarticles',
    [
        'default' => 10
    ]);

    $wp_customize->add_control(
        'ostory_home_nbrarticles',
        [
            'type' => 'number',
            'input_attrs' => [
                'min' => 0,
                'max' => 20,
                'step' => 2
            ],
            'section' => 'ostory_home',
            'label' => 'Nombre d\'articles',
            'description' => 'Nombre d\'articles affichés sur la page d\'accueil'
        ]
    );

    $wp_customize->add_setting('ostory_home_bgcolor', [ // Here i want to change the background color of my main content
        'default' => '#45312d'
    ]);

    $instance_color_control = new WP_Customize_Color_Control(
        $wp_customize,
        'home_bgcolor',
        [
            'label' => 'Couleur de fond de la page article',
            'section' => 'ostory_home',
            'settings' => 'ostory_home_bgcolor',
            'description' => 'Permet de changer la couleur de fond de la page article'
        ]
    );

    // I add the instance on my customizer.
    $wp_customize->add_control($instance_color_control);
    // END OF THIS SETTING - CONTROL //

}