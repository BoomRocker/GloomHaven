//Variables
	var count=0
	var countP=0
	var countW=0
	var countA=0
	var countS=0
	var countM=0
	var countN=0
	var woundWatcher=0
	var poisonWatcher=0
	var attackMulti=0
	var attackNull=0
	
	var woundFinal=0
	var poisonFinal=0
	var attackFinal=0
	var shieldFinal=0
	var shieldAttackResolve=0
	var displayFinalDamage
	document.getElementById("poisonSwitch").disabled = true;
	
	// RESET
	document.getElementById("resetAll").onclick=function(){
		window.location.href = window.location.href;
	}

	window.onload = function(){
		/*window.alert("Run the Page GITHUB");*/
		displayFinalDamage= woundFinal + poisonFinal + shieldAttackResolve;

			document.getElementById("totalWND").innerHTML="wnd "+countW;
			document.getElementById("totalATK").innerHTML="atk "+countA;
			document.getElementById("totalSHLD").innerHTML="shld "+countS;
			document.getElementById("totalPSN").innerHTML="psn "+countP;
			
			document.getElementById("attackNull").disabled = true;
			document.getElementById("poisonSwitch").disabled = true;
			document.getElementById("attackMultiply").disabled = true;

			

		
		// Listener for Attack Poisoner START
		document.getElementById("attackAdd").addEventListener("load", function(){
			if(countA > 0){
					document.getElementById("poisonSwitch").disabled = false;
					document.getElementById("attackMultiply").disabled = false;
					document.getElementById("attackNull").disabled = false;
			   } else {
					document.getElementById("poisonSwitch").disabled = true;
					document.getElementById("attackMultiply").disabled = true;
					document.getElementById("attackNull").disabled = true;
				}
			}		
		); // Listener for Attack Poisoner END
		
/*		// Toggle Switch for Poison START
		document.getElementById("poisonSwitch").addEventListener("click", function(){
			if(document.getElementById("poisonSwitch").checked == true){
				countP=countP+1;
				count=count+1;
				  document.getElementById("damageTotaler").innerHTML=count;
				  document.getElementById("poisonDMGcount").style.opacity = "1";
			   } else {
				   document.getElementById("poisonHurts").style.color = "#cccccc";
				   	countP=countP-1;
					count=count-1;
					  document.getElementById("damageTotaler").innerHTML=count;
					  document.getElementById("poisonDMGcount").style.opacity = "1";
				}
			}		
		); // Toggle Switch for Wound END
*/
	// Toggle Switch for POISON 2 START
		document.getElementById("poisonSwitch").addEventListener("change", function(){
			if(document.getElementById("poisonSwitch").checked == true){
					poisonWatcher=1;
					count=count+poisonWatcher;
					document.getElementById("damageTotaler").innerHTML=count;
				  	countP=1;
					document.getElementById("poisonDMGcount").innerHTML=countP;
					document.getElementById("attackSubtract").disabled = true;
			   } else {
				   	count=count-poisonWatcher;
					document.getElementById("damageTotaler").innerHTML=count;
					poisonWatcher=0;
					countP=0;
					document.getElementById("poisonDMGcount").innerHTML=countP;
					document.getElementById("attackSubtract").disabled = false;
				}
			}		
		); // Toggle Switch for POISON 2 END
		
		// Toggle Switch for Wound START
		document.getElementById("woundSwitch").addEventListener("change", function(){
			if(document.getElementById("woundSwitch").checked == true){
					woundWatcher=1;
					count=count+woundWatcher;
					document.getElementById("damageTotaler").innerHTML=count;
				  	countW=1;
					document.getElementById("woundDamage").innerHTML=countW;
			   } else {
				   	count=count-woundWatcher;
					document.getElementById("damageTotaler").innerHTML=count;
					woundWatcher=0;
					countW=0;
					document.getElementById("woundDamage").innerHTML=countW;
				}
			}		
		); // Toggle Switch for Wound END
		
	};
		
//SHIELD START
	document.getElementById("shieldAdd").onclick=function(){
		countS=countS+1;
		document.getElementById("shieldDamage").innerHTML=countS;
	  	  if (countS > 0 ){
			count=Math.max(0, count-1);
			document.getElementById("damageTotaler").innerHTML=count;
	   } else {
		   
	   }
	}
	document.getElementById("shieldSubtract").onclick=function(){
		countS=Math.max(0, countS-1)
		document.getElementById("shieldDamage").innerHTML=countS;
	  
	  if (countS >= 0){
		  countFloat=Math.max(0,countA+countP-countS);
		  count=countFloat;
		 document.getElementById("damageTotaler").innerHTML=Math.max(0, count);
		}
	}

//ATTACK START
		document.getElementById("attackAdd").onclick=function(){
			countA=countA+1;
			document.getElementById("opacityP").style.opacity = "1";
			document.getElementById("attackMultiply").style.opacity = "1";
			document.getElementById("attackNull").style.opacity = "1";
			countFloat=Math.max(0,countA+countP-countS);		
			document.getElementById("attackDamage").innerHTML=countA;
			count=countFloat;
			document.getElementById("damageTotaler").innerHTML=count;
			document.getElementById("poisonSwitch").disabled = false;
			document.getElementById("attackMultiply").disabled = false;
			document.getElementById("attackNull").disabled = false;
		}
		document.getElementById("attackSubtract").onclick=function(){
			countA=Math.max(0, countA-1)
			countFloat=Math.max(0,countA+countP-countS);	
			document.getElementById("attackDamage").innerHTML=countA;
			countFloat=Math.max(0,countA-countS);
			count=countFloat;
			document.getElementById("damageTotaler").innerHTML=count;

		   
	   }
	   
//MULTIPLY NULL START
		document.getElementById("attackMultiply").onclick=function(){		
			if (countM == 1 ){
				document.getElementById("attackMultiply").style.backgroundColor = "transparent";
				document.getElementById("attackMultiply").style.color = "#000";
				var modifyFlipM=".";
				document.getElementById("modifyDamage").innerHTML=modifyFlipM;
				countM=0;
			} else{
				countM=1;
				countA=countA*2;
				var modifyFlipM="x2";
				document.getElementById("attackMultiply").style.backgroundColor = "#7e57a6";
				document.getElementById("attackMultiply").style.color = "#fff";
				document.getElementById("modifyDamage").innerHTML=modifyFlipM;
				document.getElementById("modifyDamage").style.color = "#7e57a6";
				count=countFloat;
				document.getElementById("damageTotaler").innerHTML=count;
				document.getElementById("attackDamage").innerHTML=countA;
			}
		}
		document.getElementById("attackNull").onclick=function(){
			if (countN == 1 ){
				document.getElementById("attackNull").style.backgroundColor = "transparent";
				document.getElementById("attackNull").style.color = "#000";
				countN=0;
			} else{
				countN=1;
				countA=countA*0;
				var modifyFlipN="X";
				document.getElementById("attackNull").style.backgroundColor = "orange";
				document.getElementById("attackNull").style.color = "#fff";
				document.getElementById("modifyDamage").innerHTML=modifyFlipN;
				document.getElementById("modifyDamage").style.color = "#c78e00";
				count=countFloat;
				document.getElementById("damageTotaler").innerHTML=count;
				document.getElementById("attackMultiply").style.opacity = ".5";
				/*document.getElementById("attackDamage").innerHTML=countA;*/
			}

		   
	   }
		
		
//RESOLVE START+
		document.getElementById("resolve").onclick=function(){
			var countWP = Math.max(0,countW+countP);
			var countAS = Math.max(0,countA-countS);
			document.getElementById("damageFinal").innerHTML=countWP+countAS;
			document.getElementById("totalWND").innerHTML="WND "+countW;
			document.getElementById("totalATK").innerHTML="ATK "+countA;
			document.getElementById("totalSHLD").innerHTML="SLD "+countS;
			document.getElementById("totalPSN").innerHTML="PSN "+countP;
		}
