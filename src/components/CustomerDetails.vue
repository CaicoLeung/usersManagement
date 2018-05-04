<template>
    <div id="customerDetails">
        <div class="container">
            <h1 class="page-header">
                {{customer.name}}
                <span class="pull-right">
                    <router-link to="/" class="btn btn-default">返回</router-link>
                    <router-link :to="'/edit/'+this.$route.params.id" class="btn btn-primary">编辑</router-link>
                    <button @click="deleteCustomer()" class="btn btn-danger">删除</button>
                </span>
            </h1>
            <router-view></router-view>
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="glyphicon glyphicon-user">
                        <p>{{customer.age}}</p>
                    </span>
                </li>
                <li class="list-group-item">
                    <span class="glyphicon glyphicon-phone">
                        <p>{{customer.phone}}</p>
                    </span>
                </li>
                <li class="list-group-item">
                    <span class="glyphicon glyphicon-envelope">
                        <p>{{customer.email}}</p>
                    </span>
                </li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="glyphicon glyphicon-book">
                        <p>{{customer.education}}</p>
                    </span>
                </li>
                <li class="list-group-item">
                    <span class="glyphicon glyphicon-education">
                        <p>{{customer.graduationschool}}</p>
                    </span>
                </li>
                <li class="list-group-item">
                    <span class="glyphicon glyphicon-tasks">
                        <p>{{customer.profession}}</p>
                    </span>
                </li>
                <li class="list-group-item">
                    <span class="glyphicon glyphicon-pencil">
                        <p>{{customer.profile}}</p>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "customerDetails",
  data() {
    return {
      customer: {}
    };
  },
  methods: {
    fetchCustomers(id) {
      this.$http.get("https://usersmanagement-b89cc.firebaseio.com/users/"+ id +".json")
        .then(response => {
            return response.json();
            // console.log(this.customer);
         })
        .then(data => {
            this.customer = data;
        })
    },
    deleteCustomer(){
        var yesno = confirm("删除后数据不可恢复！");
        if(yesno){
            var id = this.$route.params.id;
            this.$http.delete("https://usersmanagement-b89cc.firebaseio.com/users/"+ id +".json")
                .then(response =>{
                    this.$router.push({path:"/",query:{test:"用户信息删除成功"}});
                })
        }
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  display: inline;
  margin-left: 1em;
}
ul li:hover {
  background-color: coral;
  color: white;
}
</style>
