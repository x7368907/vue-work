const { createApp } = Vue;
const url = 'https://vue3-course-api.hexschool.io/v2';
const path = 'lee-ren';

const app = {
    data() {
        return {
            temp: {},
            products: []
        }
    },
    methods: {
      checkLogin() {
        axios.post(`${url}/api/user/check`)
          .then((res) => {
          this.getData();
          })
          .catch((err) => {
             console.log(err);
          window.location = "login.html";
          })
      },
        getData() {
          axios.get(`${url}/api/${path}/admin/products`)
          .then((res) => {
            this.products = res.data.products;
           
          })
          .catch((err) => {
            console.log(err);
          })
        },
    },
    mounted() {
      console.log(this);
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        axios.defaults.headers.common.Authorization = token;
         this.checkLogin()

    },
}