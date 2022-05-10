<template>
    <nav class="navbar">
        <div class="navbar__l">
            <div class="navbar__logo">
                <router-link to="/"><img src="../assets/logo.svg" alt="site logo"></router-link>
            </div>
            <div class="navbar__hr"></div>
            <ul>
                <router-link to="/"><li>Home</li></router-link>
                <router-link to="/about"><li>About</li></router-link>
                <router-link to="/pricing"><li>Pricing</li></router-link>
                <router-link to="/tokens"><li>Tokens</li></router-link>
                <router-link to="/blog"><li>Blog</li></router-link>
                <router-link to="/pages"><li>Pages</li></router-link>
            </ul>
        </div>
        <div class="navbar__r">
            <span>cart (0)</span>
            <button>download app</button>
        </div>
    </nav>
    <router-view />
</template>
