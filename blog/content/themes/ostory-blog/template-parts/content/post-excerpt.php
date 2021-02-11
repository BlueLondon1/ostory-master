<article class="post" style="background-image: url('<?php the_post_thumbnail_url(); ?>')">
    <h2 class="post__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <div class="post__content">
        <p>
            <a href="<?php the_permalink(); ?>"><?php the_excerpt(); ?></a>
        </p>
    </div>
</article>