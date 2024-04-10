-- create the tables for our actors
CREATE TABLE `actors` (
   `actorID` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `firstName` varchar(100) NOT NULL,
   `lastName` varchar(100) NOT NULL,
   `dob` DATE DEFAULT NULL,
   `movies` int(10) unsigned DEFAULT null,
   PRIMARY KEY (`actorID`),
   FOREIGN KEY (`movies`) REFERENCES movies(`movieid`)
);
-- insert data into the tables
INSERT INTO actors
VALUES (1, "Cate", "Blanchett", "1969-05-14", 1),
(2, "Scarlett", "Johansson", "1984-11-22", 2),
(3, "John", "Goodman", "1952-06-20", 3),
(4, "John", "Noble", "1948-08-20", 4),
(5, "Amy", "Morton", "1959-04-03", 5)
