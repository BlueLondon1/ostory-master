<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<?php wp_head(); ?>
</head>

<body class="">
	<div class="wrapper" style="background-color: <?= get_theme_mod('ostory_home_bgcolor'); ?>" >
		<!-- ============ SECTION HEADER ============ -->
		<header class="header" style="background-color: <?= get_theme_mod('ostory_header_bgcolor'); ?>">
			<div class="header__logo">
				<a href="http://92.243.9.174">
					<?php 

						if ( function_exists( 'the_custom_logo' ) ) {
						the_custom_logo();
						}
					?>
				</a>
			</div>
			
			<!-- ============ SECTION EXTRA LARGE HEADER ============ -->
			<div class="header__nav">
				<ul class="header__nav__list">
					<li class="header__nav__list__item"><a href="http://92.243.9.174">Accueil</a></li>
					<li class="header__nav__list__item"><a href="http://92.243.9.174/#/adventures">Aventures</a></li>
					<li class="header__nav__list__item__active"><a href="http://92.243.9.174/blog/">Blog</a></li>
					<li class="header__nav__list__item"><a href="#takecontact">Contact</a></li>
					<li class="header__nav__list__item"><a href="http://92.243.9.174/#/about">A propos</a></li>
				</ul>
			</div>

			<div class="header__sign">
				<button class="header__sign-up"><a href="http://92.243.9.174/#/signup">Inscription</a></button>
				<button class="header__sign-in"><a href="http://92.243.9.174/#/signin">Connexion</a></button>
			</div>


			<!-- ============ SECTION SMALL-MEDIUM HEADER ============ -->

			<input class="header__burger" id="burger" type="checkbox" />

			<label class="header__burger__label" for="burger">
				<i class="fa fa-bars" aria-hidden="true"></i>
			</label>

			<nav class="header__burger__nav">
				<ul class="header__burger__nav__list">
					<li class="header__burger__nav__list__item"><a href="http://92.243.9.174">Accueil</a></li>
					<li class="header__burger__nav__list__item"><a href="http://92.243.9.174/#/adventures">Aventures</a></li>
					<li class="header__burger__nav__list__item"><a href="http://92.243.9.174/#/blog">Blog</a></li>
					<li class="header__burger__nav__list__item"><a href="#takecontact">Contact</a></li>
					<li class="header__burger__nav__list__item"><a href="http://92.243.9.174/#/about">A propos</a></li>
				</ul>
			</nav>
		</header>