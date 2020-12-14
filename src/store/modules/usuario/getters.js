export default {
    usuarioId(state){
        return state.usuarioId;
    },
    token(state){
        return state.token;
    },
    estaAutenticado(state){
       return !!state.token
    }
}