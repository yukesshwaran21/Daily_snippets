<h1 onclick="change(event)">One</h1>
<h1 onclick="change(event)">Two</h1>
<h1 onclick="change(event)">Three</h1>
<h1 onclick="change(event)">Four</h1>
<h1 onclick="change(event)">Five</h1>
<h1 onclick="change(event)">Six</h1>

<script>
    var one=document.getElementById("one")
    function change(event){
        event.target.remove()
    }
</script>
