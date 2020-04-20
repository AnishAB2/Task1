// function find(arr) {
// var string = 0;
// for (var i=0;i<arr.lenght;i++){
//     if(arr[i]>string){
//         string=arr[i];
//     }
// }
// // var arr = string.split(', '); // split string on comma space
// // return Math.max(...string);
// }
// window.alert(find([1,2,3,5]));



function findLargestNum(arr) {
    var biggestNum = 0;
  for (var i = 0; i< arr.length; i++){
      if(arr[i]>biggestNum){
          biggestNum=arr[i];
      }
  }
    return biggestNum;
  }
  
  
  window.alert(findLargestNum([4, 5, 1, 3]));
  console.log(findLargestNum([300, 200, 600, 150]));
  console.log(findLargestNum([1000, 1001, 857, 1]));



{/* <html>
	<head>
		<script>
			<script type="text/javascript" src="path-to-javascript-file.js"></script>
			function largest()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("N").value);
				num2 = Number(document.getElementById("M").value);
				num3 = Number(document.getElementById("O").value);

				if(num1>num2 && num1>num3)
				{
                    // <label>Name: <input type="text" name="name" num1+"-is greatest" /><label>
					window.alert(num1+"-is greatest");
				}
				else if(num2>num1 && num2>num3)
				{
					window.alert(num2+"-is greatst");
				}
				else if(num3>num1 && num3>num1)
				{
					window.alert(num3+"is greatest");
				}
			}
		</script>
	</head>
	<body>
		<h1>Calculate largest among three numbers</h1>
		<hr color="cyan">
		<br>
		Enter number 1: <input type="text" id="N"></input><br>
		Enter number 2: <input type="text" id="M"></input><br>
		Enter number 3: <input type="text" id="O"></input><br>
		<hr color="cyan">
        <center><button onclick="largest()">OK</button>
    
            
            
	</body>
</html> */}
