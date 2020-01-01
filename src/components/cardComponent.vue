<template>

    <div id="playerCard">

        <!--player card-->
        <div :class="{'card': true, 'mx-auto': true, 'gold': gold, 'silver': silver,  'bronze': bronze}">
            <div class="img"><img :src="baseUrl + 'cricket/' + player.photoID" alt="player-Image"
                                  class="mx-auto d-block" height="300"
                                  width="300"></div>
            <div class="content">
                <b-row>
                    <b-col><span class="label">Name: </span></b-col>
                    <b-col><span class="capitalize">{{player.name}}</span></b-col>
                </b-row>
                <b-row>
                    <b-col><span class="label">Batsman: </span></b-col>
                    <b-col><span class="capitalize"
                                 v-if="player.category.batHand">{{player.category.batHand}}</span><span
                            class="capitalize" v-if="!player.category.batHand">NO</span></b-col>
                </b-row>
                <b-row>
                    <b-col><span class="label">Bowling: </span></b-col>
                    <b-col><span class="capitalize"
                                 v-if="player.category.bolHand">{{player.category.bolHand}}</span><span
                            class="capitalize" v-if="!player.category.bolHand">NO</span></b-col>
                </b-row>
                <b-row>
                    <b-col><span class="label">Wicket keeper: </span></b-col>
                    <b-col><span v-if="player.category.wk">YES</span><span v-if="!player.category.wk">NO</span></b-col>
                </b-row>
                <b-row>
                    <b-col><span class="label">All Rounder: </span></b-col>
                    <b-col><span v-if="player.category.allRounder">YES</span><span
                            v-if="!player.category.allRounder">NO</span></b-col>
                </b-row>
                <b-row>
                    <b-col><span class="label">Dept/Year: </span></b-col>
                    <b-col><span
                    >{{player.department.toString().toLocaleUpperCase() + "/" + player.year}}</span>
                    </b-col>
                </b-row>
            </div>
        </div>

        <!--Team Section-->
        <div class="teams container">
            <b-row>
                <b-col v-for="team in teams">
                    <div class="team">
                        <img :src="team.url" @click="showModal(team.name, team.url, $event)" alt="TeamImg"
                             class="teamImg mx-auto d-block">
                        <div class="bal">
                            <img :src="baseUrl + 'coins.png'" alt="wallet" class="wallet">
                            <span>{{team.balance}}</span>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>

        <!--Modal-->
        <div>
            <b-modal hide-footer ref="amountModal" title="Enter Bid Amount">
                <img alt="" class="modal-image mx-auto d-block" src="">
                <b-form-group>
                    <b-form-input @keyup.enter.native="addPlayer" placeholder="Enter Amount" type="number"
                                  v-model="amount"></b-form-input>
                </b-form-group>
                <b-button @click="addPlayer()" class="mx-auto d-block">Submit</b-button>
            </b-modal>
        </div>
    </div>

</template>

<script>

    import {mapState} from 'vuex'

    export default {
        name: 'cardComponent',
        props: [
            'player'
        ],
        data() {
            return {
                amount: null,
                team: null,
                el: null,
                gold: false,
                silver: false,
                bronze: false,
                baseUrl: 'https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/'
            }
        },
        computed: {
            ...mapState({
                teams: state => state.teams
            })
        },
        created() {
            if (this.player.category.playerType === "gold") {
                this.gold = true;
                this.silver = false;
                this.bronze = false
            }
            if (this.player.category.playerType === "silver") {
                this.gold = false;
                this.silver = true;
                this.bronze = false
            }
            if (this.player.category.playerType === "bronze") {
                this.gold = false;
                this.silver = false;
                this.bronze = true
            }
        },
        methods: {
            showModal(team, url, el) {
                this.team = team;
                this.$refs.amountModal.show();
                this.el = el.target.parentElement;

                document.getElementsByClassName("modal-image")[0].attributes.src.value = url
                // document.getElementsByClassName("modal-image")[1].attributes.src.value = url
                // document.getElementsByClassName("modal-image")[2].attributes.src.value = url
                // document.getElementsByClassName("modal")[0].parentElement.style.height = '100vh'

            },
            addPlayer() {
                this.teams.forEach(team => {
                    if (team.name === this.team) {
                        team.balance = team.balance - this.amount;
                        team.players.push({playerObj: this.player, bidAmount: this.amount});
                        this.team = null;
                        this.amount = null;
                        this.$refs.amountModal.hide();
                        this.$store.commit('updateTeams', this.teams);
                        this.$emit('setFlag')
                    }
                });
                let imgs = document.querySelectorAll(".team");
                imgs.forEach(img => {
                    if (img !== this.el)
                        img.style.display = 'none'
                });
                this.el.parentElement.childNodes[0].childNodes[1].style.display = 'none';
                this.el.classList.add('center-animate');
                this.el.childNodes[0].classList.remove('teamImg');
                document.querySelector(".card").style.transform = 'translateX(150px)'
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '../sass/cardComponent'

</style>