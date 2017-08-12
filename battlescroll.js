var enemyhealth = 5;

function pupperAttack(){

	enemyhealth -= 1;
	console.log(enemyhealth);

	if (enemyhealth===0)
		getElementById("text") = "You win!"
};

function Attack(){
	console.log(enemyhealth);
	enemyhealth -= 1;
};
