-- 1
-- SELECT name, language, percentage 
-- FROM languages JOIN countries ON languages.country_code = countries.code
-- WHERE language = "Slovene"
-- ORDER BY percentage DESC;

-- 2
SELECT countries.name, COUNT(cities.name) AS count
FROM cities JOIN countries ON cities.country_code = countries.code
GROUP BY countries.name
ORDER BY count DESC

-- 3
-- SELECT co
