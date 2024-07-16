const { createApp } = Vue

createApp({
    setup() {
        const message = 'Hello vue!'
        const imageUrl = 'https://www.dequo.it/articoli/app/uploads/2023/05/copyright-immagini-generate-ai12.jpg'
        return {
            message,
            imageUrl
        }
    }
}).mount('#app')
