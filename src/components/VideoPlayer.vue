<!-- components/VideoPlayer.vue -->
<template>
    <div class="video-player">
        <video-player ref="player" :options="playerOptions" @ready="onPlayerReady" />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps<{
    src: string
    poster?: string
}>()

const playerOptions = reactive({
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
        type: 'video/mp4',
        src: props.src
    }],
    poster: props.poster
})

const onPlayerReady = (player: any) => {
    console.log('Player is ready', player)
}
</script>