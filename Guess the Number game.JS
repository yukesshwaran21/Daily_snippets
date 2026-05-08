<h1>Guess the number</h1>
<input type="number" id="n1">
<button onclick="change()">Click</button>
<p id="m"></p>
<p id="s"></p>
<script>
    var n=document.getElementById("n1")
    var c=10;
    var r=Math.floor((Math.random()*10)+1)
    function change(){
        var m=document.getElementById("m")
        var num=Number(n.value)
        if(num==r){
            m.textContent="You choose Correct Number"
        }
        else{
            var p=document.getElementById("s")
            p.textContent="Score: " + c--
            m.textContent="You choose wrong number"
        }
    }
</script>
