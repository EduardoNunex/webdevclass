<template>
    <div class="modal face" id="contract-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <form action="" validate id="formSend" @submit="AlertConfirmation">
                        <div class="d-flex">
                            <h1 class="createTitle p-2">Contratar Entregador</h1>
                            <button type="button" class="btx btn-close p-2" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <hr>
                        <h2 class="titleEndereços">
                            Endereço de atual do pacote
                        </h2>
                        <div class="form-floating mb-3 formulario">
                            <input type="text" class="form-control" id="Name" placeholder="Name" required>
                            <label for="Name">Endereço</label>
                        </div>
                        <div class="endereço">
                            <div class="form-floating mb-3 formulario">
                                <input type="text" class="form-control" id="Name" placeholder="Name" required>
                                <label for="Name">Bairro</label>
                            </div>
                            <div class="form-floating mb-3 formulario">
                                <input type="text" class="form-control" id="numero" placeholder="Name" required>
                                <label for="Name">Número</label>
                            </div>
                        </div>
                        <h2 class="titleEndereços">
                            Endereço de entrega do pacote
                        </h2>
                        <div class="form-floating mb-3 formulario">
                            <input type="text" class="form-control" id="Name" placeholder="Name" required>
                            <label for="Name">Endereço</label>
                        </div>
                        <div class="endereço">
                            <div class="form-floating mb-3 formulario">
                                <input type="text" class="form-control" id="Name" placeholder="Name" required>
                                <label for="Name">Bairro</label>
                            </div>
                            <div class="form-floating mb-3 formulario">
                                <input type="text" class="form-control" id="numero" placeholder="Name" required>
                                <label for="Name">Número</label>
                            </div>
                        </div>
                        <div class="footer">
                            <span>Volume de carga permitda</span>
                            <span>Confirmo que o volume da entrega esta dentro do peso permitido (5kg)</span>
                        </div>
                        <div class="d-flex">
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="agree" name="radio-stacked"
                                    v-model='radioValue' value='Yes' required>
                                <label class="form-check-label" for="agree">Confirmo</label>
                            </div>
                            <div class=" decline form-check mb-3">
                                <input type="radio" class="form-check-input" id="desagree" name="radio-stacked"
                                    v-model='radioValue' value='No'>
                                <label class="form-check-label" for="desagree">Não confirmo</label>
                            </div>
                        </div>
                        <div class="btfm"><input class="btn btn-primary" type="submit" id="btf" :disabled="disabled"
                                v-model="btnForm">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            inputName: '',
            inputEmail: '',
            inputPassword: '',
            inputPasswordConfirm: '',
            mounthSelect: '',
            daySelect: '',
            yearSelect: '',
            radioValue: '',
            btnForm: 'Contratar',
            disabled: true
        }
    },
    methods:{
        freebtn(){
            if(this.radioValue=='No'){
                this.disabled=true
            }else{
                this.disabled=false
            }
        },
        AlertConfirmation(){
            window.alert('Contratação realizada, aguarde a confirmação do entregador !!')
        }
    },
    watch: {
        radioValue(){
            this.freebtn()
        }
    }




}

</script>

<style scoped>
.modal {
    --bs-modal-margin: 1.25rem;
}

.modal-content {
    width: 500px;
    position: fixed;
}

.modal-body {
    padding: 25px;
    padding-top: 5px;
    padding-bottom: 15px;
}

.createTitle {
    width: 500px;
}

hr {
    margin: 10px 0;
}

.pw {
    margin-bottom: 5px;
}

.top {
    padding-right: 20px;
    align-self: center;
    width: 350px;
    margin-bottom: 20px;
    padding-top: 2px;
}

h2 {
    font-size: 20px;
}

.datN {
    font-size: 10px;
}

.number {
    width: 130px;
}

.mounth {
    width: 200px;
}

.footer {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: start;
    column-gap: 1%;
    margin: 0;
    padding: 0%;
}

.agree {
    margin-top: 20px;
}

.btfm {
    display: flex;
    align-items: center;
    margin-top: 1px;
    margin-left: 50px;
}

#btf {
    width: 350px;
}
.decline {
    margin-left: 10px;
}

.endereço{
    display: flex;
    gap: 5%;
}
.titleEndereços{
    display: flex;
    align-items: start;
    margin: 2% 0%;
}
</style>