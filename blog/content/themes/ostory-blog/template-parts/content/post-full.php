<!-- ============ SECTION SINGULAR ============ -->
<section class="singular" style="background-image: url('<?php the_post_thumbnail_url(); ?>')">
    <div class="single">
        <h1 class="single__title"><?php the_title(); ?></h1>
        <div class="single__text">
            <p class="single__text__content">
            <?php the_content(); ?>
            </p>
            <p class="single__text__viewcount">
            <?= getPostViews(get_the_ID()); ?>
            </p>
        </div>
    </div>
</section>