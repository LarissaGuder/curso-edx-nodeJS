curl "http://localhost:3000/profile"
curl -H "Content-Type: application/json" -X POST -d '{"first_name": "Batman", "last_name":"Wayne"}' "http://localhost:3000/profile"
sleep 2
curl -H "Content-Type: application/json" -X PUT -d '{"first_name": "SuperMan", "last_name":"Man"}' "http://localhost:3000/profile/0"
sleep 2
curl "http://localhost:3000/profile?id=0"
sleep 2
curl -X DELETE "http://localhost:3000/profile/0"
