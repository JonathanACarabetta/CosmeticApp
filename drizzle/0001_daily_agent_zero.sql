ALTER TABLE `items` RENAME TO `items_table`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_items_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`cost` integer,
	`price` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_items_table`("id", "name", "description", "cost", "price") SELECT "id", "name", "description", "cost", "price" FROM `items_table`;--> statement-breakpoint
DROP TABLE `items_table`;--> statement-breakpoint
ALTER TABLE `__new_items_table` RENAME TO `items_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;