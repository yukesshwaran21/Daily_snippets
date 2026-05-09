<style>
    div{
        background-color: yellow;
        width: 120px;
        height: 120px;
    }
    .wid{
        width:900px;
    }
</style>

<div id="box"></div>
<button onclick="change()">Change color</button>

<script>
    var p=document.getElementById("box")
    function change(){
        p.style.backgroundColor="red"
        p.setAttribute("class","wid")
    }
</script>
