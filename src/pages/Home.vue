<template>
  <div id="app">
    <h1>HOME PAGE</h1>
    <!-- <div id="btn">
    <button @click="siteB">siteB</button>
  </div> -->
    <!-- <a href="https://line.me/ti/p/@985lgfum"> -->

    <!-- <a href="https://liff.line.me/1656824759-PrZzVE5w"> -->

    <!-- <a href="https://liff.line.me/1656824759-lWmGEYa5">
      <button id="btn">LINE @</button>
    </a> -->

    <!-- <a
      href="https://liff.line.me/1656824759-lWmGEYa5"
      target="_blank"
      rel="noreferrer"
    > -->
    <!-- <a href="https://schoolshopliffweb.onrender.com/liffweb">
      <button id="btn">LINE @</button>
    </a> -->

    <div id="divBtn">
      <button id="btn" @click="openLiffAppWeb">GOTO Line@</button>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import liff from "@line/liff";

export default {
  // name: "App",
  // components: {
  //   //HelloWorld,
  // },
  data() {
    return {
      // loggedIn: false,
      // profile: {},
      // displayName: "",
      // userId: "",
      // alert: "",
      // getParam: "",
    };
  },
  created() {
    // window.location.href = "https://liff.line.me/1656824759-lQKpOazZ";
    //window.location.href = "https://vue-webb-crossdomain.onrender.com";
  },
  mounted() {
    // this.$router.push("liff");
    //router.push({ path: "liff" });
    // let uri = window.location.search.substring(1);
    // let params = new URLSearchParams(uri);
    // liff
    //   //.init({ liffId: "1656824759-PonrgLDq" })
    //   .init({ liffId: "1656824759-qbyK4305" })
    //   .then(() => {
    //     if (!liff.isLoggedIn()) {
    //       liff.login();
    //     } else {
    //       this.loggedIn = liff.isLoggedIn();
    //       console.log("isLoggedIn--> ", liff.isLoggedIn());
    //       console.log("getIDToken--> ", liff.getIDToken());
    //       console.log("getContext--> ", liff.getContext());
    //       console.log("getOS--> ", liff.getOS());
    //       console.log("isInClient--> ", liff.isInClient());
    //       //console.log("getAdvertisingId--> ", liff.getAdvertisingId());
    //       //console.log("getAId--> ", liff.getAId());
    //       console.log("getVersion--> ", liff.getVersion());
    //       //console.log("getEnvironment--> ", liff.getEnvironment());
    //       // get queryString
    //       this.getParam = params.get("param");
    //       console.log("param--->", this.getParam);
    //       this.getProfile();
    //       // this.getEnvironment();
    //       this.getFriendship();
    //     }
    //   })
    //   .catch((err) => {
    //     this.occoredError = "error:" + err;
    //   });
  },
  methods: {
    openLiffAppWeb() {
      // (window.location.href = "https://liffcontrol.onrender.com/liffweb"),
      //   "_blank";
      //window.open("https://liffcontrol.onrender.com/liffweb", "_blank");
      window.open("https://1f7e-223-204-235-121.ngrok-free.app/liffweb")
    },
    // siteB() {
    //   console.log("openLineChat--> ");
    //   window.open("https://liff.line.me/1656824759-lQKpOazZ", "_blank");
    // },
    // async getProfile() {
    //   await liff.getProfile().then((profile) => {
    //     console.log("profile--> ", profile);
    //     this.profile = profile;
    //     // console.log("this.profile--> ", this.profile);
    //   });
    // },
    // async getFriendship() {
    //   await liff.getFriendship().then((data) => {
    //     console.log("getFriendship--> ", data);
    //     if (data.friendFlag) {
    //       console.log("getFriendship--> = true");
    //       this.alert = data.friendFlag;
    //       alert(`data.friendFlag--> ${this.alert}`);
    //     }
    //   });
    // },
    // async getAccessToken() {
    //   console.log("token--> ");
    //   await liff.getAccessToken().then((token) => {
    //     console.log("token--> ", token);
    //   });
    // },
    // openLineChat() {
    //   console.log("openLineChat--> ");
    //   window.open("https://line.me/ti/p/@889mtekm", "_blank");
    // },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f464d;
  margin-top: 60px;
}

#btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 0.8em;
  font-weight: 100;
  color: #f7f8f8;
  background-color: rgb(34, 0, 255);
  margin-top: 60px;
  width: 300px; /* was 150, now 150px */
  height: 150px;
}

#test-btn {
  color: #cc00cc;
  background-color: rgb(34, 0, 255);
  width: 300px; /* was 150, now 150px */
  height: 300px;
}
</style>
