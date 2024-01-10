docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test-java/app ../../..
