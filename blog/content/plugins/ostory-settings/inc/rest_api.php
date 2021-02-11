<?php

class oStoryRestApi
{

    public function __construct()
    {
        add_action('rest_api_init', [$this, 'metaField']);
        add_action('rest_api_init', [$this, 'thumbnailField']);
        add_action('rest_api_init', [$this, 'taxoStylesField']);
        add_action('rest_api_init', [$this, 'authorField']);
        add_action('rest_api_init', [$this, 'saveField']);
    }


    // ============================ SECTION CUSTOM FIELDS ============================

    // fonction pour créer / écraser le champ meta dans la REST API
    public function metaField()
    {

        register_rest_field(
            'story',
            'meta',
            [
                'get_callback' => [$this, 'getMetaCf'],
                'update_callback' => null,
                'schema' => null
            ]
        );
    }

    // récupérer les custom fields des récits
    public function getMetaCf($object, $field_name, $request)
    {

        $all_meta = get_post_meta($object['id']);

        $array_return = [];

        foreach ($all_meta as $meta_name => $meta_value) {

            if (substr($meta_name, 0, 1) !== '_') {
                $array_return[$meta_name] = $meta_value;
            }
        }

        return $array_return;
    }


    // ============================ SECTION THUMBNAILS ============================

    // fonction pour créer le champ thumbnails dans la REST API
    public function thumbnailField()
    {

        register_rest_field(
            'story',
            'thumbnails',
            [
                'get_callback' => [$this, 'getThumbnail'],
                'update_callback' => null,
                'schema' => null
            ]
        );
    }

    // récupérer les thumbnails (toutes tailles) des récits

    public function getThumbnail($object, $field_name, $request)
    {

        if (has_post_thumbnail($object['id'])) {

            return get_the_post_thumbnail_url($object['id']);
            // $thumbnail_details = wp_get_attachment_image_src($object['featured_media']);
            // return [
            //     'url' => $thumbnail_details[0],
            //     'width' => $thumbnail_details[1],
            //     'height' => $thumbnail_details[2],
            // ];
            
        } else {

            return false;
        }
    }


    // ============================ SECTION TAGS STYLES ============================

    // fonction pour créer le champ pour les tags custom "styles"
    public function taxoStylesField()
    {

        register_rest_field(
            'story',
            'styles',
            [
                'get_callback' => [$this, 'getTaxoStyle'],
                'update_callback' => null,
                'schema' => null
            ]
        );
    }

    // récupérer les custom tags (styles) des récits
    public function getTaxoStyle($object, $field_name, $request)
    {

        $array_return = [];

        foreach ($object[$field_name] as $term_id) {
            $wp_term = get_term($term_id, $field_name);

            $array_return[] = [
                'id' => $term_id,
                'name' => $wp_term->name,
                'slug' => $wp_term->slug
            ];
        }
    }


    // ============================ SECTION TAGS UNIVERS ============================

    // fonction pour créer le champ pour les tags custom "univers"
    public function taxoUniversField()
    {

        register_rest_field(
            'story',
            'univers',
            [
                'get_callback' => [$this, 'getTaxoUnivers'],
                'update_callback' => null,
                'schema' => null
            ]
        );
    }

    // récupérer les custom tags (univers) des récits
    public function getTaxoUnivers($object, $field_name, $request)
    {

        $array_return = [];

        foreach ($object[$field_name] as $term_id) {
            $wp_term = get_term($term_id, $field_name);

            $array_return[] = [
                'id' => $term_id,
                'name' => $wp_term->name,
                'slug' => $wp_term->slug
            ];
        }
    }

    // ============================ SECTION AUTHOR FIELD ============================

    public function authorField() 
    {
        // Modification du retour de la REST API pour le champs author
        register_rest_field(

            ['post', 'story'],
            'author',
            [
                'get_callback' => [$this, 'getAuthorName'],
                'update_callback' => null,
                'schema' => null
            ]
        );
    }

    public function getAuthorName($object, $field_name, $request) 
    {

        return [
            'id' => $object['author'],
            'name' => get_the_author_meta('nickname', $object['author'])
        ];
    }

    // ============================ SECTION SAVE FIELD ============================

    function saveField()
    {
        register_rest_field(
            'user',
            'saves',
            [
                'get_callback' => function ($object, $field_name, $request) 
                {
                    

                    // ---------- NOTE Code rajouté ---------- \\
                    // Je récupere toutes les méta
                    $all_meta = get_metadata("user", $object['id'], "saves");

                    $array_return = [];

                    // Puis je les parcours toutes
                    foreach ($all_meta as $meta_name => $meta_value) {
                        $array_return[$meta_name] = $meta_value;
                    }
                    return $array_return;
                    // ---------- NOTE fin du code rajouté ---------- \\

                    // code original du mec
                    // return get_user_meta($object['id'], $field_name, false);
                },

                'update_callback' => function ($meta_value, $object, $field_name, $request) 
                {
                    $havemetafield  = get_user_meta($object->ID, 'saves', false);
                    
                    if ($havemetafield) {
                        $ret = update_user_meta($object->ID, 'saves', $meta_value);
                        return true;
                    } else {
                        $ret = add_user_meta($object->ID, 'saves', $meta_value, false);
                        return true;
                    }
                },
                'schema' => null
            ]
        );
    }

}
