import { render, screen, prettyDOM } from '@testing-library/react'
import Header from '../components/Header'
 
test('Propsがない場合はデフォルト文字列が表示される', () => {
    // render(<Header />
    // render(<Header title={"test"} />)
    const {container} = render(<Header />)
    expect(container.innerHTML).toMatch('React App')
    // screen.debug() ; // eslint-disable-line no-debugger
    // console.log(prettyDOM())
})