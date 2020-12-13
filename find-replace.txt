		var count=0
		var countY=0
		var countP=0
		var countW=0
		var countA=0
		var countS=0
		var countY=0

		document.getElementById("counter").onclick=function(){
			countY=countY+1;
			this.innerHTML=countY}

		document.getElementById("reset").onclick=function(){
			countY=0
			document.getElementById("counter").innerHTML=countY;
		}

		var countPoisonAdd=0

		document.getElementById("poisonAdd").onclick=function(){
			countP=countP+1;
		 document.getElementById("poisonDamage").innerHTML=countP;
			  count=count+1;
		  document.getElementById("damageTotaler").innerHTML=count;
		  
		}

		document.getElementById("poisonSubtract").onclick=function(){
			countP=Math.max(0, countP-1);
		 document.getElementById("poisonDamage").innerHTML=countP;
				 count=Math.max(0, count-1);
		  document.getElementById("damageTotaler").innerHTML=count;
		}

		document.getElementById("resetP").onclick=function(){
			countP=0
			document.getElementById("poisonDamage").innerHTML=countP;
		}

		var countWoundAdd=0

		document.getElementById("woundAdd").onclick=function(){

		 document.getElementById("attackDamage").innerHTML=countA;
		  if (countA > 0){
			document.getElementById("woundAdd").classList.add('activeWound');
				countW=countW+1;
		 document.getElementById("woundDamage").innerHTML=countW;
				count=count+1;
		  document.getElementById("damageTotaler").innerHTML=count;
		   }
		}

		document.getElementById("woundSubtract").onclick=function(){
			countW=Math.max(0, countW-1);
		 document.getElementById("woundDamage").innerHTML=countW;
				 count=Math.max(0, count-1); document.getElementById("damageTotaler").innerHTML=count;
		}

		document.getElementById("resetW").onclick=function(){
			countW=0
			document.getElementById("woundDamage").innerHTML=countW;
		}

		var countAttackAdd=0

		document.getElementById("attackAdd").onclick=function(){
			countA=countA+1;
		   
		  if (countA > 0){
			document.getElementById("woundAdd").classList.add('activeWound');
			
			 document.getElementById("woundSubtract").classList.add('activeWound');
		  }
			 
		  
		 document.getElementById("attackDamage").innerHTML=countA;
				count=count+1;
		  document.getElementById("damageTotaler").innerHTML=count;
		}

		document.getElementById("attackSubtract").onclick=function(){
			countA=Math.max(0, countA-1)
		 document.getElementById("attackDamage").innerHTML=countA;
				count=Math.max(0, count-1);
		  document.getElementById("damageTotaler").innerHTML=count;
		}

		document.getElementById("resetA").onclick=function(){
			countA=0
			document.getElementById("attackDamage").innerHTML=countA;
		}

		var countShieldAdd=0

		document.getElementById("shieldAdd").onclick=function(){
			countS=countS+1;
		 document.getElementById("shieldDamage").innerHTML=countS;
		  
		  if (countS > 0){
		   count=Math.max(0, count-1);
		  document.getElementById("damageTotaler").innerHTML=count;
		   }
		}

		document.getElementById("shieldSubtract").onclick=function(){
			countS=Math.max(0, countS-1)
		 document.getElementById("shieldDamage").innerHTML=countS;
		  
		  if (countS > 0){
			  count=Math.max(0, count+1);
			 document.getElementById("damageTotaler").innerHTML=Math.max(0, count);
			}

		}

		document.getElementById("resetS").onclick=function(){
			countS=0
			document.getElementById("shieldDamage").innerHTML=countS;
		}

		var countResetAdd=0

		document.getElementById("resetAll").onclick=function(){
			count=0
		   countY=0
		   countP=0
		   countW=0
		   countA=0
		   countS=0 
		  
		  document.getElementById("woundAdd").className =
		   document.getElementById("woundAdd").className.replace
			  ( /(?:^|\s)activeWound(?!\S)/g , '' )
		/* Code wrapped for readability - above is all one statement */
		  
			document.getElementById("woundSubtract").className =
		   document.getElementById("woundSubtract").className.replace
			  ( /(?:^|\s)activeWound(?!\S)/g , '' )
		/* Code wrapped for readability - above is all one statement */
		  
		  document.getElementById("damageTotaler").innerHTML=count;
		   document.getElementById("poisonDamage").innerHTML=countP;
		   document.getElementById("woundDamage").innerHTML=countW;
		   document.getElementById("attackDamage").innerHTML=countA;
		   document.getElementById("shieldDamage").innerHTML=countS;
		}