-- -- @BLOCK
-- CREATE TABLE Notes(
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     title VARCHAR(255) NOT NULL,
--     content VARCHAR(255) NOT NULL
-- )
-- -- @BLOCK
-- INSERT INTO notes (title, content)
-- VALUES ('Off Button', 'Press the Off Button')
-- @BLOCK
SELECT *
FROM Notes
WHERE id = 2;