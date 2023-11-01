import { render, screen } from '@testing-library/react'
import HomePage from '../src/app/page'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('Hello world', () => {
    const { container } = render(<HomePage />)
 
    //expect(heading).toBeInTheDocument()
  })
})