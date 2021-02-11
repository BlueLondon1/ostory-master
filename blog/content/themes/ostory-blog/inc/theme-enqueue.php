<?php

if (!function_exists('ostory_scripts')):

    function ostory_scripts()
    {
        wp_enqueue_style(
            'ostory-style',
            get_theme_file_uri('/public/css/style.css'),
            [],
            '2.0.0'
        );

        wp_enqueue_script(
            'ostory-app',
            get_theme_file_uri('/public/js/app.js'),
            [],
            '1.0.0',
            true
        );
    }

endif;


add_action('wp_enqueue_scripts', 'ostory_scripts');