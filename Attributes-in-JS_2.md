<h1 id="d"></h1>
<button onclick="change(event)" >Jhon</button>
<button onclick="change(event)" >Ram</button>
<button onclick="change(event)" >Antony</button>


<script>
    var d=document.getElementById("d")
    function change(event){
        d.textContent=event.target.textContent
    }
</script>
