<?php

if (!function_exists('ostory_setup')):

    function ostory_setup()
    {
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_theme_support( 'custom-logo', [
            'flex-height'   => true,   
            'flex-width'    => true,   
        ]);
    }

endif;

add_action('after_setup_theme', 'ostory_setup');