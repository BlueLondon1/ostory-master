<?php

function ostory_footer($wp_customize) {

    // I declare a new setting
    $wp_customize->add_setting('ostory_footer_active', []); // Here i want a checkbox for hide or reveal the footer

    // Adding a new control to my setting - repeat that each time you want to customize - new settings = new control
    $wp_customize->add_control('ostory_footer_active', [
        'type' => 'checkbox',
        'section' => 'ostory_footer',
        'label' => 'Activer l\'affichage du footer',
        'description' => 'Permet de masquer ou afficher le footer présent sur toutes les pages du site'
    ]); // END OF THIS SETTING - CONTROL //

    // === Repeat the operation until we've customize all the site === // 
    

    $wp_customize->add_setting('ostory_footer_newsletter', []); // Here i want a checkbox for hide or reveal the newsletter

    $wp_customize->add_control('ostory_footer_newsletter', [
        'type' => 'checkbox',
        'section' => 'ostory_footer',
        'label' => 'Activer l\'affichage de la Newsletter',
        'description' => 'Permet de masquer ou afficher la Newsletter présent sur toutes les pages du blog'
    ]); // END OF THIS SETTING - CONTROL //


    
    $wp_customize->add_setting('ostory_footer_email', []); // Here i want to change the mail in my footer

    $wp_customize->add_control('ostory_footer_email', [
        'type' => 'email',
        'section' => 'ostory_footer',
        'label' => 'Adresse email',
        'description' => 'Permet de modifier le mail de contact et celui qui sera affiché dans le footer. Attention les mails seront dorénavant envoyé à cette adresse'
    ]); // END OF THIS SETTING - CONTROL //

    
    $wp_customize->add_setting('ostory_footer_phone', []); // Here i want to change the phone in my footer

    $wp_customize->add_control('ostory_footer_phone', [
        'type' => 'text',
        'section' => 'ostory_footer',
        'label' => 'Numéro de téléphone',
        'description' => 'Permet de modifier le numéro de téléphone de contact qui sera affiché dans le footer.'
    ]); // END OF THIS SETTING - CONTROL //

    $wp_customize->add_setting('ostory_footer_twitter', []); // Here i want to change the twitter url in my footer

    $wp_customize->add_control('ostory_footer_twitter', [
        'type' => 'textarea',
        'section' => 'ostory_footer',
        'label' => 'Lien vers twitter',
        'description' => 'Permet de modifier le lien vers twitter.'
    ]); // END OF THIS SETTING - CONTROL //

    $wp_customize->add_setting('ostory_footer_facebook', []); // Here i want to change the facebook url in my footer

    $wp_customize->add_control('ostory_footer_facebook', [
        'type' => 'textarea',
        'section' => 'ostory_footer',
        'label' => 'Lien vers facebook',
        'description' => 'Permet de modifier le lien vers facebook.'
    ]); // END OF THIS SETTING - CONTROL //

    
    $wp_customize->add_setting('ostory_footer_bgcolor', [ // Here i want to change the background color of my footer
        'default' => '#261b19'
    ]);

    $instance_color_control = new WP_Customize_Color_Control(
        $wp_customize,
        'footer_bgcolor',
        [
            'label' => 'Couleur de fond du footer',
            'section' => 'ostory_footer',
            'settings' => 'ostory_footer_bgcolor',
            'description' => 'Permet de changer la couleur de fond du footer'
        ]
    );

    // I add the instance on my customizer.
    $wp_customize->add_control($instance_color_control);
    // END OF THIS SETTING - CONTROL //
}