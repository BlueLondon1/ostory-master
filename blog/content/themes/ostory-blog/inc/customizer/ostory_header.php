<?php

function ostory_header($wp_customize) {

    $wp_customize->add_setting('ostory_header_bgcolor', [ // Here i want to change the background color of my main content
        'default' => '#261b19'
    ]);

    $instance_color_control = new WP_Customize_Color_Control(
        $wp_customize,
        'header_bgcolor',
        [
            'label' => 'Couleur de fond du header',
            'section' => 'ostory_header',
            'settings' => 'ostory_header_bgcolor',
            'description' => 'Permet de changer la couleur de fond du header'
        ]
    );

    // I add the instance on my customizer.
    $wp_customize->add_control($instance_color_control);
    // END OF THIS SETTING - CONTROL //

}