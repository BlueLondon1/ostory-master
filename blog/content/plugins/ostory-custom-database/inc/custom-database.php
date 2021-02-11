<?php

class customDatabase
{

	function newsletter_db() {
		global $wpdb;
		global $jal_db_version;

		$table_name = $wpdb->prefix . 'newsletter';

		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE IF NOT EXISTS $table_name (
			id INT unsigned NOT NULL AUTO_INCREMENT,
			email varchar(64) NOT NULL,
			PRIMARY KEY  (id)
		) $charset_collate;";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );

		add_option( 'newsletter_db', $jal_db_version );
	}
	
}