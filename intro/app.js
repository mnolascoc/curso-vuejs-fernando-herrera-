const {createApp, ref} = Vue;

const app = createApp({
    /*:`
        <h1>{{message}}</h1>
        <p>{{autor}}</p>  
     `,*/
    setup() {
        const message = ref("Soy mike");
        const autor = ref("Bruce Wayne")

        // setTimeout(() => {
        //     message.value = "Soy mike II"
        //     autor.value = "Autor cambiado"
        // }, 2000);

        const cambiarMensaje = ()=>{
            message.value = "Hola, soy mike II";
            autor.value = "Autor cambiado";
        }
        return { message, autor, cambiarMensaje }
    }
});

app.mount("#app");