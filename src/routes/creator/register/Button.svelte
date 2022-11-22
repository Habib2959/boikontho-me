<script>
    export let mode = 'Sign up';
</script>

<button type="submit">{mode}</button>
<style>
    button{
        margin-top: 20px;
        background:#9E72FD ;
        color: #fff;
        border-radius: 8px;
        outline: none;
        border: none;
        font-size: 16px;
        padding: 12px 30px;
        cursor: pointer;
        width: 100%;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        transition: all .3s ease-in;
    }
    button:hover{
        background: transparent;
        color: #9E72FD;
    }
</style>