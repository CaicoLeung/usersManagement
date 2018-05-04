<template>
    <div id="edit" class="container">
        <h1 class="page-header">编辑用户</h1>
        <router-view></router-view>
        <form @submit="updateCutomer">
            <div class="well">
                <h4>
                    <strong>{{customer.name}}</strong>
                    <router-link to="/" class="btn btn-default pull-right">返回</router-link>
                </h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" placeholder="name" class="form-control" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label>年龄</label>
                    <input type="text" placeholder="age" class="form-control" v-model="customer.age">
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" placeholder="phone" class="form-control" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" placeholder="email" class="form-control" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <input type="text" placeholder="education" class="form-control" v-model="customer.education">
                </div>
                <div class="form-group">
                    <label>毕业院校</label>
                    <input type="text" placeholder="graduation school" class="form-control" v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <label>职业</label>
                    <input type="text" placeholder="profession" class="form-control" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <textarea placeholder="profile" class="form-control _formControl" rows="10" v-model="customer.profile"></textarea>
                </div>
                <button type="submit" class="btn btn-primary center-block">完成</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      customer: {}
    };
  },
  methods: {
    fetchCustomer(id){
        console.log(id);
        this.$http.get("https://usersmanagement-b89cc.firebaseio.com/users/"+ id +".json")
            .then(response => {
                this.customer = response.body;
            })
    },
    updateCutomer(e) {
      if(!this.customer.name||!this.customer.age||!this.customer.phone||!this.customer.email){
            alert("姓名、年龄、电话、邮箱不能为空！");
      } else {
        let updateCutomer = {
            name: this.customer.name,
            age: this.customer.age,
            phone: this.customer.phone,
            email: this.customer.email,
            education: this.customer.education,
            graduationschool: this.customer.graduationschool,
            profession: this.customer.profession,
            profile: this.customer.profile
        };
        this.$http.put("https://usersmanagement-b89cc.firebaseio.com/users/"+ this.$route.params.id +".json",updateCutomer)
          .then(response => {
            this.$router.push({path:"/",query:{test:"用户信息更新成功"}});
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created(){
      this.fetchCustomer(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong{
    color: red;
}
._formControl {
  min-width: 100%;
  max-width: 100%;
}
</style>
