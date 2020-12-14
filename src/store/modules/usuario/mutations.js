export default {
    usuarioCreado(state, payload){
        state.usuarioId = payload.usuarioId;
    },
    setUsuario(state, payload){
        state.token = payload.token;
        state.usuarioId = payload.usuarioId;
    }
}
