<script>
    import { mapActions, mapGetters } from "vuex";
    import FooterComp from "@/components/FooterComp.vue"
    
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger"
    gsap.registerPlugin(ScrollTrigger);

    export default {
        data() {
            return {
                numParser: /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
          }
        },
        components: {
            FooterComp,
        },
        computed: {
            ...mapGetters(["getCoins"]),
        },
        mounted: function() {
          gsap.from("#tokensTopHeader", {
              y: 100,
              opacity: 0,
              scale: 0.6,
          });
          gsap.to("#tokensTopHeader", {
              scale: 1,
              duration: .8,
              opacity: 1,
              y: 0,
          });
          gsap.from("#tokensTopUT", {
              y: 100,
              opacity: 0,
              scale: 0.6,
              delay: .4,
          });
          gsap.to("#tokensTopUT", {
              scale: 1,
              duration: .8,
              opacity: 1,
              y: 0,
              delay: .4,
          });
          gsap.from("table", {
              y: 100,
              opacity: 0,
              scale: 0.6,
              delay: .6,
          });
          gsap.to("table", {
              scale: 1,
              duration: .8,
              opacity: 1,
              y: 0,
              delay: .6,
          });
        },
        methods: {
          ...mapActions(["updateID"]),
        },
    }
</script>

<template>
    <section class="tokens__top">
        <div class="tokens__top-header">
            <h1 id="tokensTopHeader">Tokens</h1>
            <p id="tokensTopUT">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque</p>
        </div>
        <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Market Cap</th>
                <th scope="col">Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in getCoins" :key="i">
                <td data-label="Name">
                    <div class="tableName__wrapper">
                        <img v-bind:src="i.image.small" class="name__logo">
                        <router-link :to="`/tokens/${i.id}`"><p>{{ i.name }}</p></router-link>
                        <span class="initials">{{ i.symbol }}</span>
                    </div>
                </td>
                <td data-label="Description" class="table__Desc">Lorem ipsum dolor sit amet</td>
                <td data-label="Market Cap">{{ `$${i.market_data.market_cap.usd.toString().replace(numParser, ",")} USD` }}</td>
                <td data-label="Volume">{{ `$${i.market_data.market_cap.usd.toString().replace(numParser, ",")} USD` }}</td>
              </tr>
            </tbody>
        </table>
    </section>
    <router-view :key="$route.path"/>
    <section class="footer__section">
        <FooterComp />
    </section>
</template>

<style scoped>

.tableName__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.tableName__wrapper p {
    margin-left: 15px;
}

.tableName__wrapper:hover span {
  background-color: #6739E5;
}

.tableName__wrapper a {
  text-decoration: unset;
}

.initials {
    text-transform: uppercase;
    transition: all .3s;
    margin-left: 10px;
    background-color: #282555;
    padding: 7px 8px;
    border-radius: 20px;
    font-size: 12px;
}

table {
  opacity: 0;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table tr {
  padding: .35em;
  border-bottom: 1px solid #e0dff192;
}

table th,
table td {
  padding: .625em;
  text-align: start;
  color: #FFFFFF;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

table td {
    cursor: pointer;
}

@media screen and (max-width: 1100px) {
    tr {
        border-bottom: unset !important;
    }
    td {
        border-bottom: 1px #e0dff192 solid;
        max-width: 1000px;
        margin: 0 auto
    }
    .table__Desc {
        color: #FFFFFF !important;
    }
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
</style>>