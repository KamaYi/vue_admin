<template>
	<div style="height:100%;">
        <transition name="fade" mode="out-in">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        </transition>
        <transition name="fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
  </div>
</template>
<style lang="scss">
</style>
