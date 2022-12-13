<template>
    <main class="col-12 col-lg-8">
        <h1>Meus Pedidos</h1>
        <div class="card mt-4">
            <div class="card-body text-left">
                <div class="d-flex flex-row justify-content-around">
                    <div class="w-100">
                        <h4>Dados do pedido:</h4>
                        <div style="overflow-y: none;min-height:120px;max-height:120px;" class="text">
                            <div>
                                <p><span>Entregador</span>: Linka aqui o dado do pedido</p>
                                <p><span>Endereço da busca do pacote</span>: Linka aqui o dado do pedido</p>
                                <p><span>Endereço da entrega:</span> Linka aqui o dado do pedido</p>
                            </div>
                        </div>
                        <div class="bottom d-flex flex-row justify-content-around mt-2">
                            <div class="avaliationStatus">
                                <label for="status">Avalie o entregador:</label>
                                <select class="form-select" id="status" v-model='avaliation' ref="statusSelect" required :disabled="disableAvaliation">
                                    <option selected disabled></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div class="orderStatus">
                                <label for="status">Status:</label>
                                <select class="form-select" id="status" v-model='status' ref="statusSelect" required>
                                    <option selected disabled></option>
                                    <option value="Finalizado">Finalizado</option>
                                    <option value="Curso">Em curso</option>
                                </select>
                            </div>
                            <div>
                                <button class="btn btn-primary" :disabled="disable">
                                    Cancelar
                                </button>
                                <ModalContractVue />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
/*import ModalContractVue from './ModalContract.vue';
export default{
    components:{
        ModalContractVue
    }
}*/
export default {
    data() {
        return {
            nomeEntregador: 'Joao',
            status:'Curso',
            disable: false,
            avaliation:5,
            disableAvaliation: true,
        }
    },
    methods: {
        freebtn() {
            if (this.status == 'Finalizado') {
                this.disable = true
            } else {
                this.disable = false
            }
        },
        freeAvaliation() {
            if (this.status == 'Finalizado') {
                this.disableAvaliation = false
            } else {
                this.disableAvaliation = true
            }
        },
    },
    watch: {
        status() {
            this.freebtn()
            this.freeAvaliation()
        }
    }
}
</script>

<style scoped>
img {
    height: 10%;
    width: 10%;
    border-radius: 15px;
}

.text {
    text-align: start;
}

.bottom {
    display: flex;
    padding-top: 2%;
    align-items: center;
}

.orderStatus {
    width: 25%;
    gap: 5%;
    display: flex;
    align-items: center;
}
.avaliationStatus {
    width: 25%;
    gap: 1%;
    display: flex;
    align-items: center;
    white-space: pre;
}
h4{
    padding:2%;
}
span{
    font-weight: bolder;
}
</style>
