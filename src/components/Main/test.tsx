import { render, screen } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  it('Espera-se renderizar no headind', () => {
    // renderiza o component
    render(<Main />)

    // busca o elemento e verifica a existência dele.
    expect(screen.getByRole('heading', { name: /react/i })).toBeInTheDocument()
  })
})
