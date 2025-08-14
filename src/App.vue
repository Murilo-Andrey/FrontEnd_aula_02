<template>
<div>
<!-- Exibe um título com o texto "Olá," seguido do valor da variável "nome" -->
<h1>Olá, {{ nome }}</h1>
<!-- Exibe a data atual formatada para o padrão local -->
<p>Hoje é {{ dataAtual }}</p>
<!-- Calcula e exibe o preço com desconto direto no template -->
<p>Preço com desconto: {{ preco - desconto }}</p>
</div>
</template>
<script>
export default {
name: 'App',
// Dados reativos do componente
data() {
return {
nome: 'Maria',
preco: 100,
desconto: 10,
dataAtual: new Date().toLocaleDateString()
}
}
}
</script>