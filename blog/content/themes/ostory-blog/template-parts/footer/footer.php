<footer class="footer" style="background-color: <?= get_theme_mod('ostory_footer_bgcolor'); ?>">
    <div class="footer__logo">
        <a href="#">
            <?php 

                if ( function_exists( 'the_custom_logo' ) ) {
                the_custom_logo();
                }
            ?>
        </a>
        <p><a href="#">Mentions légales</a></p>
    </div>

    <?php if (!is_page('unsubscribe')) : ?>
        <?php get_template_part('template-parts/footer/footer', 'newsletter'); ?>
    <?php endif; ?>

    <?php get_template_part('template-parts/footer/footer', 'contact'); ?>

    
</footer>