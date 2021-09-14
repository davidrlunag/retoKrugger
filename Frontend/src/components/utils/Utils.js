export const showMessaje = (msg, setMensaje) => {
  setMensaje(msg)
  setTimeout(() => {
    setMensaje(null)
  }, 3000)
}
