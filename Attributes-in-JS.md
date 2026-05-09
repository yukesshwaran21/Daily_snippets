<button onclick="change()">Add</button>
<div id="key"></div>

<script>
    function change(){
        var key=document.getElementById("key")
        var h1=document.createElement("h1")
        h1.textContent="Hello"
        key.append(h1)
    }
    
</script>
