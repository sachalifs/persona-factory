import { crearPersona } from './persona-factory'
import { emitirSaludo } from './persona'

describe('emitirSaludo', () => {
  it('imprime el nombre y el twitter de la persona', () => {
    const log = jest.spyOn(console, 'log')

    const persona = crearPersona()
    expect(log).not.toHaveBeenCalled()

    emitirSaludo(persona)

    expect(log).toHaveBeenCalledWith(
      `Hola, me llamo ${persona.nombre}. Seguime en ${persona.twitter}`
    )

    log.mockReset()
  })
})
