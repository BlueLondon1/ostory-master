<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */


// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', '' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', '' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', '' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '');
define('SECURE_AUTH_KEY',  '');
define('LOGGED_IN_KEY',    '');
define('NONCE_KEY',        '');
define('AUTH_SALT',        '');
define('SECURE_AUTH_SALT', '');
define('LOGGED_IN_SALT',   '');
define('NONCE_SALT',       '');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

// J'indique à WP l'url du nouveau dossier "wp-content"
define( 'WP_CONTENT_URL', 'http://__monurlaremplacer__/content' );
// J'indique à WP le chemin du nouveau dossier "wp-content"
define( 'WP_CONTENT_DIR', dirname(__FILE__) . '/content' );

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
// Si j'active le WP_DEBUG, c'est que je suis en développement
define('WP_DEBUG', true);

// Si le debug est à true, c'est que je suis en développement
if (WP_DEBUG) {

  // Du coup je demande certaines choses à WP...

  // Je demande à WP de me créer un fichier de log d'erreurs
  define( 'WP_DEBUG_LOG', true );

  // Je demande à WP de m'afficher les messages d'erreurs
  define( 'WP_DEBUG_DISPLAY', true );

  // Désactivation totale des versions de contenus
  define( 'WP_POST_REVISIONS', false );

  // Je ne souhaite pas utiliser la corbeille
  define('EMPTY_TRASH_DAYS', 0 );

} else {

  // Sinon c'est que je suis en prod...

  // Je désactive l'installation de thème et de plugins
  define('DISALLOW_FILE_MODS',true);

  // Je limite le nombre de version à 5
  define( 'WP_POST_REVISIONS', 5 );

  // Les contenus restent 15 jours dans la corbeille avant d'être définitivement supprimés
  define('EMPTY_TRASH_DAYS', 15 );
}

// J'ordonne à WordPress d'utiliser la méthode "simple"/"classique" pour
// manipuler les fichiers.
// Pas besoin de FTP ni de SSH, ma machine est bien configurée & sécurisée !
define('FS_METHOD', 'direct');

// Je désactive l'éditeur embarqué.
// 1 - Je n'en ai pas besoin, moi j'ai VSCODE !
// 2 - Mieux vaut pas que Mme Michu touche aux fichiers PHP !
define('DISALLOW_FILE_EDIT',true);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');