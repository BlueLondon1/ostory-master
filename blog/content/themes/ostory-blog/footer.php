<!-- ============ SECTION FOOTER ============ -->
<?php

    // NOTE By default the footer is not active, you have to check the button in the customizer, then click "publish"

    if (get_theme_mod('ostory_footer_active')):

      get_template_part('template-parts/footer/footer');

    endif;
  ?>

<!-- NOTE  Everything that needs to be updated should be written above this comment
</div>

<?php wp_footer(); ?>
</body>

</html>
