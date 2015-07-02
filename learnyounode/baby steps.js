// process.argv variable que corre al ejecutar comando node
// lo usamos para pedir los parámetros que se le pasan al js

	var i = 2
	var sum = 0
	while (i < process.argv.length){
		sum = sum + Number(process.argv[i])
		i = i + 1
	}
	console.log(sum)