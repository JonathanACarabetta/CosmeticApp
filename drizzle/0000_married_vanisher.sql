CREATE TABLE `items` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text(50) NOT NULL,
	`description` text(300),
	`cost` integer,
	`price` integer NOT NULL
);
