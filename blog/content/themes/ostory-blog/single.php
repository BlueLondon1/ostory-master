<?php get_header(); ?>

<?php

if ($wp_query->have_posts()): while($wp_query->have_posts()): $wp_query->the_post();

get_template_part('template-parts/content/post', 'full');

setPostViews(get_the_ID());

endwhile; endif;

wp_reset_postdata();

?>

<?php get_footer(); ?>
