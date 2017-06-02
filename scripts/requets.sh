curl -X GET 'http://localhost:8080/helloworld' -s
curl -X GET 'http://localhost:8080/right_arm?steps=120&direction=up' -s
curl -X GET 'http://localhost:8080/left_arm?steps=120&direction=up' -s
curl -X GET 'http://localhost:8080/left_arm?steps=-50&direction=down' -s
curl -X GET 'http://localhost:8080/right_arm?steps=-50&direction=down' -s
