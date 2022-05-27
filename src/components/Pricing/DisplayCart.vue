<script>
    import { gsap } from "gsap";
    import { mapGetters } from "vuex";

    export default {
        computed: {
            ...mapGetters(["totalCart"]),
        },
        methods: {
            openCart() {
                setTimeout(() => {
                    gsap.to(".display__cart", {
                        opacity: 1,
                        duration: .5,
                    });
                    gsap.to(".cart__side", {
                        width: 447,
                        delay: .5,
                    });
                }, 500);
            },
            closeCart() {
                gsap.from(".display__cart", {
                    opacity: 1,
                    delay: .5,
                });
                gsap.to(".display__cart", {
                    opacity: 0,
                    delay: .5,
                });
                gsap.from(".cart__side", {
                    width: 447,
                    duration: .5,
                });
                gsap.to(".cart__side", {
                    width: 0,
                    duration: .5,
                });
            }
        }
    }
</script>

<template>
    <div class="cart__side" v-observe-visibility="openCart()">
        <div class="cart__side-up">
            <div class="cart__side-controls">
                <h4>Your Cart</h4>
                <button class="closeBtn" @click="closeCart(), $store.commit('closeCart')">X</button>
                </div>
                <div class="cart__wrapper" v-for="i in $store.state.cartArr" :key="i">
                <div class="cart__header">
                    <h3>{{ i.type }}</h3>
                    <span @click="$store.commit('removeFromCart', i.type)">Remove</span>
                </div>
                <p class="cart__price">{{`$ ${i.cost}.00 USD`}}</p>
                <p class="cart__duration">Plan Duration: <strong>1 Month</strong></p>
            </div>
        </div>
        <div class="cart__side-down">
            <div class="cart__side-subtotal">
                <div class="subtotal__wrapper">
                    <p>Subtotal</p>
                    <span class="total">
                        {{ `$${totalCart}.00 USD` }}
                    </span>
                </div>
                <button>continue to checkout</button>
            </div>
        </div>
    </div>
</template>