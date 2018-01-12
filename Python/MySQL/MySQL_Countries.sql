-- 1
-- SELECT name, language, percentage 
-- FROM languages JOIN countries ON languages.country_code = countries.code
-- WHERE language = "Slovene"
-- ORDER BY percentage DESC;

-- 2
-- SELECT countries.name, COUNT(cities.name) AS count
-- FROM cities JOIN countries ON cities.country_code = countries.code
-- GROUP BY countries.name
-- ORDER BY count DESC

-- 3
-- SELECT name 
-- FROM countries
-- WHERE name = 'Mexico';
-- SELECT co
-- 4
-- 5
-- 6
-- 7
-- SELECT countries.name, cities.name, cities.district, cities.population
-- FROM countries JOin  cities on cities.country_code = countries.code 
-- WHERE countries.name = 'Argentina' AND cities.district = 'Buenos Aires' AND cities.population > 500000
-- ORDER by cities.district;
-- 8
SELECT countries.region AS 'Region', COUNT(countries.name) AS 'Number of Countries'
FROM  countries
GROUP BY countries.region
Order by COUNT(countries.name) DESC;