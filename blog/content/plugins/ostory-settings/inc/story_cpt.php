<?php

class Story_cpt
{
    public function __construct()
    {
        add_action('init', [$this, 'create_cpt']);
        add_action('init', [$this, 'create_taxo']);
    }

    // ======================== SECTION DECLARATION CPT RECIT ========================

    public function create_cpt() {
        $labels = [
            'name'                  => 'Récits',
            'singular_name'         => 'Récit',
            'menu_name'             => 'Récits',
            'name_admin_bar'        => 'Récits',
            'archives'              => 'Archives des récits',
            'attributes'            => 'Attributs des récits',
            'parent_item_colon'     => 'Element parent',
            'all_items'             => 'Tous les récits',
            'add_new_item'          => 'Ajouter un nouveau récit',
            'add_new'               => 'Ajouter un nouveau récit',
            'new_item'              => 'Nouvelle récit',
            'edit_item'             => 'Editer le récit',
            'update_item'           => 'Mettre à jour le récit',
            'view_item'             => 'Voir le récit',
            'view_items'            => 'Voir les récits',
            'search_items'          => 'Rechercher les récits',
            'not_found'             => 'Aucun récits trouvé',
            'not_found_in_trash'    => 'Aucun récits trouvé dans la corbeille',
            'featured_image'        => 'Image du récits',
            'set_featured_image'    => 'Ajouter une image au récit',
            'remove_featured_image' => 'Supprimer l\'image du récit',
            'use_featured_image'    => 'Utiliser une image pour le récit',
            'insert_into_item'      => 'Inserer dans le récit',
            'uploaded_to_this_item' => 'Televerser dans le récit',
            'items_list'            => 'Liste des récits',
            'items_list_navigation' => 'Liste des récits',
            'filter_items_list'     => 'Filtrer la liste des récits',
        ];

        $args = [
            'labels'                => $labels,
            'description'           => 'Récits',
            'supports'              => [
                'title',
                'editor',
                'author',
                'thumbnail',
                'excerpt',
                'custom-fields',
                'revisions',
            ],
            'hierarchical'          => false,
            'public'                => true,
            'menu_position'         => 4,
            'menu_icon'             => 'dashicons-book-alt',
            'has_archive'           => true,
            'show_in_rest'          => true,
            'rewrite'               => [
                'slug'              => 'recit',
                'with_front'        => true,
            ],

        ];

        register_post_type('story', $args);
    }

    public function create_taxo() {

        // ======================== SECTION TAXO UNIVERS ========================
        $labels = [
            'name'                       => 'Univers',
            'singular_name'              => 'Univers',
            'menu_name'                  => 'Univers',
            'all_items'                  => 'Tous les univers',
            'new_item_name'              => 'Nouveaux univers',
            'add_new_item'               => 'Ajouter un univers',
            'update_item'                => 'Mettre à jour un univers',
            'edit_item'                  => 'Editer un univers',
            'view_item'                  => 'Voir tous les univers',
            'separate_items_with_commas' => 'Séparer les univers avec une virgule',
            'add_or_remove_items'        => 'Ajouter ou supprimer un univers',
            'choose_from_most_used'      => 'Choisir parmis les univers les plus utilisés',
            'popular_items'              => 'Univers populaires',
            'search_items'               => 'Rechercher un univers',
            'not_found'                  => 'Aucun univers trouvé',
            'items_list'                 => 'Lister les univers',
            'items_list_navigation'      => 'Lister les univers',
        ];

        $args = [
            'labels'        => $labels,
            'hierarchical'  => true,
            'public'        => true,
            'show_in_rest'  => true,
            'show_admin_column' => true,
            
        ];

        register_taxonomy('universe', 'story', $args);


        // ======================== SECTION TAXO HISTOIRES ========================
        $labels = [
            'name'                       => 'Histoires',
            'singular_name'              => 'Histoire',
            'menu_name'                  => 'Histoires',
            'all_items'                  => 'Toutes les histoires',
            'new_item_name'              => 'Nouvelles histoires',
            'add_new_item'               => 'Ajouter une histoire',
            'update_item'                => 'Mettre à jour une histoire',
            'edit_item'                  => 'Editer une histoire',
            'view_item'                  => 'Voir toutes les histoires',
            'separate_items_with_commas' => 'Séparer les histoires avec une virgule',
            'add_or_remove_items'        => 'Ajouter ou supprimer une histoire',
            'choose_from_most_used'      => 'Choisir parmis les histoires les plus utilisées',
            'popular_items'              => 'Histoires populaires',
            'search_items'               => 'Rechercher une histoire',
            'not_found'                  => 'Aucune histoire trouvé',
            'items_list'                 => 'Lister les histoires',
            'items_list_navigation'      => 'Lister les histoires',
        ];

        $args = [
            'labels'        => $labels,
            'hierarchical'  => true,
            'public'        => true,
            'show_in_rest'  => true,
            'show_admin_column' => true,
            
        ];

        register_taxonomy('histoires', 'story', $args);


        // ======================== SECTION TAXO GENRES ========================

        $labels = [
            'name'                       => 'Genres',
            'singular_name'              => 'Genre',
            'menu_name'                  => 'Genres',
            'all_items'                  => 'Tous les genres',
            'new_item_name'              => 'Nouveaux genres',
            'add_new_item'               => 'Ajouter un genre',
            'update_item'                => 'Mettre à jour un genre',
            'edit_item'                  => 'Editer un genre',
            'view_item'                  => 'Voir tous les genres',
            'separate_items_with_commas' => 'Séparer les genres avec une virgule',
            'add_or_remove_items'        => 'Ajouter ou supprimer un genre',
            'choose_from_most_used'      => 'Choisir parmis les genres les plus utilisés',
            'popular_items'              => 'Genres populaires',
            'search_items'               => 'Rechercher un genre',
            'not_found'                  => 'Aucun genre trouvé',
            'items_list'                 => 'Lister les genres',
            'items_list_navigation'      => 'Lister les genres',
        ];

        $args = [
            'labels'        => $labels,
            'hierarchical'  => false,
            'public'        => true,
            'show_in_rest'  => true,
            'show_admin_column' => true,
        ];

        register_taxonomy('genre', 'story', $args);


        // ======================== SECTION TAXO STARTER ========================

        $labels = [
            'name'                       => 'Starters',
            'singular_name'              => 'Starter',
            'menu_name'                  => 'Starters',
            'all_items'                  => 'Tous les starters',
            'new_item_name'              => 'Nouveaux starters',
            'add_new_item'               => 'Ajouter un starter',
            'update_item'                => 'Mettre à jour un starter',
            'edit_item'                  => 'Editer un starter',
            'view_item'                  => 'Voir tous les starters',
            'separate_items_with_commas' => 'Séparer les starters avec une virgule',
            'add_or_remove_items'        => 'Ajouter ou supprimer un starter',
            'choose_from_most_used'      => 'Choisir parmis les starters les plus utilisés',
            'popular_items'              => 'Starters populaires',
            'search_items'               => 'Rechercher un starter',
            'not_found'                  => 'Aucun starter trouvé',
            'items_list'                 => 'Lister les starters',
            'items_list_navigation'      => 'Lister les starters',
        ];

        $args = [
            'labels'        => $labels,
            'hierarchical'  => false,
            'public'        => true,
            'show_in_rest'  => true,
            'show_admin_column' => true,
        ];

        register_taxonomy('starter', 'story', $args);

    }


    // ======================== SECTION FUNCTIONS ACTIVATION / DEACTIVATION ========================
    
    public function activation()
    {
        $this->create_cpt();
        $this->create_taxo();

        flush_rewrite_rules();
    }

    public function deactivation()
    {
        flush_rewrite_rules();
    }
}