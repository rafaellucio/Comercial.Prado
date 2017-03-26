sleep 1

echo '\n******* GET http://localhost:3000/products\n'
curl -X GET -H "Content-Type: application/json" -H "Cache-Control: no-cache" "http://localhost:3000/products" | python -m json.tool

sleep 1
echo '\n******* PUT http://localhost:3000/product/58d832e5463f62247b3f7a78\n'
curl -X PUT -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d '{ 
  "image": "teste/teste/teste.png",
  "description": "Vitro Alumínio 199,0 x 199,2 sem grade.",
  "price": 9.5
}' "http://localhost:3000/product/58d832e5463f62247b3f7a78" | python -m json.tool

sleep 1
echo '\n******* POST http://localhost:3000/product\n'
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d '{ 
  "image": "teste/teste/teste.png",
  "description": "Vitro Alumínio 1,0 x 1,2 sem grade.",
  "price": 0.5 
}' "http://localhost:3000/product" | python -m json.tool

sleep 1
echo '\n******* DELETE http://localhost:3000/product/58d832e5463f62247b3f7a78\n'
curl -X DELETE -H "Content-Type: application/json" -H "Cache-Control: no-cache" "http://localhost:3000/product/58d832e5463f62247b3f7a78" | python -m json.tool