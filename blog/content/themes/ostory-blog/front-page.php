<?php get_header(); ?>

<?php
if (have_posts()): while(have_posts()): the_post();

    get_template_part('template-parts/content/banner');

endwhile; endif;
?>


<section class="posts" id="posts" style="background-color: <?= get_theme_mod('ostory_home_bgcolor'); ?>">
    
    <?php

        if (get_theme_mod('ostory_home_nbrarticles')) {

            $post_per_page = get_theme_mod('ostory_home_nbrarticles');

        } else {

            $post_per_page = 6;
        }

        $args = [
            'category_name' => 'news',
            'posts_per_page' => $post_per_page,
            'order' => 'DESC',
        ];

        $wp_query = new WP_Query($args);

        if ($wp_query->have_posts()): while($wp_query->have_posts()): $wp_query->the_post();

            get_template_part('template-parts/content/post', 'excerpt');

        endwhile; endif;

        wp_reset_postdata();
    ?>
</section>


<?php get_footer(); ?>