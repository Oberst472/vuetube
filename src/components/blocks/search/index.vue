<template>
    <div class="block-search">
        <input class="block-search__inp" type="text" placeholder="Введите название товара">
    </div>
</template>

<script>
</script>
<style scoped lang="scss">
    .block-search {
        display: inline-flex;
        width: 100%;

        &__inp {
            box-sizing: border-box;
            width: 100%;
            height: 40px;
            padding: 10px;
            border: 1px solid #e4e4e4;
            border-radius: 5px;
            outline: none;
            transition-duration: 0.3s;

            &:hover {
                border-color: $color--accent;
            }

            &:focus {
                &::placeholder {
                    color: transparent;
                }
            }

        }
    }
</style>
