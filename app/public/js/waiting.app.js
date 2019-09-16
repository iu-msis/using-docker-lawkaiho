var waitingApp = new Vue({
  el: '#userWaitingApp',
  data: {
    users: []
      },
  methods: {
    fetchUsers() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => { waitingApp.users = json });
    }
  },
  created() {
    this.fetchUsers()
  }
});
