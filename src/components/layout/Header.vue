<template>
    <header>
        <div>
            <p>Aves Chilenas</p>
        </div>
        <div>
            <router-link to="/">Inicio</router-link> |
            <router-link to="/about">Info</router-link>
        </div>
    </header>
</template>

<style scoped>
    header{
        width:100%;
        height:80px;
        padding: 0 50px;
        background: #B5E48C;
        color: #184E77;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p{
        margin: 0;
    }
    a {
        text-decoration: none;
        color: #184E77;
    }
</style>
