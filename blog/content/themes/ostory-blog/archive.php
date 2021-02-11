<?php get_header(); ?>

<?php get_template_part('template-parts/content/banner.php'); ?>


<?php 

    if (have_posts()): while(have_posts()): the_post();

        get_template_part('template-parts/content/post', 'archive');

    endwhile;endif;

?>

<?php get_footer(); ?>