<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package WordPress
 * @subpackage oStory
 * @since 0.0.1
 */
get_header();
if (have_posts()): while(have_posts()): the_post();
	get_template_part('template-parts/content/post', 'archive');
endwhile;endif;
get_footer();