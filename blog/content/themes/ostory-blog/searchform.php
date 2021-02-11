<form role="search" method="get" id="searchform" class="searchform" action="<?php echo esc_url(home_url('/')); ?>">
    <div class="searchform__box">
        <label class="searchform__box__label" for="s"><?php _x('Search for:', 'label'); ?></label>
        <input type="text" class="searchform__box__input" placeholder="Rechercher un article" value="<?php echo get_search_query(); ?>" name="s" id="s" />
        <input type="hidden" value="post" name="post_type" id="post_type" />
        <button type="submit" class="searchform__box__submit" id="searchsubmit" value="<?php echo esc_attr_x('Search', 'submit button'); ?>"><i class="fa fa-search" aria-hidden="true"></i></button>
    </div>
    <!-- <div class="line-2"></div> -->
</form>

