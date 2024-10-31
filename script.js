<script>
document.getElementById('windows__input').onkeydown = function (e) {
  if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') { 
    return !(/[.,]/.test(e.key));
  }
}
</script>