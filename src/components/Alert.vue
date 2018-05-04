<template>
  <div id="alert">
    <div class="alert alert-warning">
        <a href="#" class="close" data-dismiss="alert">&times;</a>
        {{message}}
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data () {
    return {
      
    }
  },
  props:[
      'message'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
