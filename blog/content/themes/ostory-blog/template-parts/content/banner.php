<!-- ============ SECTION TEXT BANNER ============ -->
<section class="banner" style="background-image: url('<?php

if (get_theme_mod('ostory_banner_image')) {

    echo get_theme_mod('ostory_banner_image');

} else {

    the_post_thumbnail_url(); 
}
?>')">
    <div class="intro">
        <h1 class="intro__title"><?php

            if (get_theme_mod('ostory_banner_title')) {

                echo get_theme_mod('ostory_banner_title');

            } else {

                the_title();
            }
            ?>
        </h1>
        <p class="intro__content">
        <?php
            if (get_theme_mod('ostory_banner_content')) {

                echo get_theme_mod('ostory_banner_content');

            } else {

                the_content();
            }
        ?>
        </p>
    </div>
    <div class="action-bar">
        <a href="http://92.243.9.174/#/adventures" class="action-button">Partir à l'aventure !</a>
        <a href="#contact" class="action-button">Newsletter</a>
    </div>
    <?php get_search_form(); ?>
</section>



