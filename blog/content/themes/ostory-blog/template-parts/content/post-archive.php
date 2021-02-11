<?php
// We want to redirect people on an archive date, wich isn't the same in the url. (15 Juin 2019 with get_the_date and 2019/06/15 in the url)
$archive_year  = get_the_time('Y');
$archive_month = get_the_time('m');
$archive_day   = get_the_time('d');
?>

<section class="posts" id="posts">
    <article class="post" style="background-image: url('<?php the_post_thumbnail_url(); ?>')">
        <h2 class="post__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <div class="post__content">
            <p>
                <a href="<?= get_day_link($archive_year, $archive_month, $archive_day); ?>"><?= get_the_date(); ?></a>
            </p>
            <p>
                <a href="<?= get_author_posts_url(get_the_author_meta('ID'), get_the_author_meta('user_nicename')); ?>"> de : <?= get_the_author(); ?></a>
            </p>
            <p>
                <a href="<?php the_permalink(); ?>"><?php the_excerpt(); ?></a>
            </p>
        </div>
    </article>
</section>