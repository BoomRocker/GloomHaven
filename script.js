//Variables
	var count=0
	var countP=0
	var countW=0
	var countA=0
	var countS=0	
	var woundWatcher=0
	
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
		window.alert("Run the Page");
		displayFinalDamage= woundFinal + poisonFinal + shieldAttackResolve;

			document.getElementById("totalWND").innerHTML="wound "+countW;
			document.getElementById("totalATK").innerHTML="attack "+countA;
			document.getElementById("totalSHLD").innerHTML="shield "+countS;
			document.getElementById("totalPSN").innerHTML="poison "+countP;
			
			document.getElementById("poisonSwitch").addEventListener("load", function(){
				if(countP > 0){
					document.getElementById("poisonDMGcount").style.opacity = "1";
			   } else {
					document.getElementById("poisonDMGcount").style.opacity = "0";
				}
				}
			);
		
		// Listener for Attack Poisoner START
		document.getElementById("attackAdd").addEventListener("load", function(){
			if(countA > 0){
					document.getElementById("poisonSwitch").disabled = false;
			   } else {
					document.getElementById("poisonSwitch").disabled = true;
				}
			}		
		); // Listener for Attack Poisoner END
		
		// Toggle Switch for Poison START
		document.getElementById("poisonSwitch").addEventListener("click", function(){
			if(document.getElementById("poisonSwitch").checked == true){
				document.getElementById("poisonHurts").style.color = "lime";
				countP=countP+1;
				count=count+1;
				  document.getElementById("damageTotaler").innerHTML=count;
				  document.getElementById("poisonDMGcount").style.opacity = "1";
			   } else {
				   document.getElementById("poisonHurts").style.color = "#cccccc";
				   	countP=countP-1;
					count=count-1;
					  document.getElementById("damageTotaler").innerHTML=count;
					  document.getElementById("poisonDMGcount").style.opacity = "0";
				}
			}		
		); // Toggle Switch for Wound END
		
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
			countFloat=Math.max(0,countA+countP-countS);		
			document.getElementById("attackDamage").innerHTML=countA;
			count=countFloat;
			document.getElementById("damageTotaler").innerHTML=count;
			document.getElementById("poisonSwitch").disabled = false;
		}
		document.getElementById("attackSubtract").onclick=function(){
			countA=Math.max(0, countA-1)
			countFloat=Math.max(0,countA+countP-countS);	
		document.getElementById("attackDamage").innerHTML=countA;
			countFloat=Math.max(0,countA-countS);
			count=countFloat;
		document.getElementById("damageTotaler").innerHTML=count;
		document.getElementById("poisonSwitch").disabled = true;
		}
		
//RESOLVE START+
		document.getElementById("resolve").onclick=function(){
			var countWP = Math.max(0,countW+countP);
			var countAS = Math.max(0,countA-countS);
			document.getElementById("damageFinal").innerHTML=countWP+countAS;
			document.getElementById("totalWND").innerHTML="wound "+countW;
			document.getElementById("totalATK").innerHTML="attack "+countA;
			document.getElementById("totalSHLD").innerHTML="shield "+countS;
			document.getElementById("totalPSN").innerHTML="poison "+countP;
		}
