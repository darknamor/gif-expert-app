import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GifItem />', () => {
  const title = 'Test-title';
  const url = 'https://www.test-url.com';
  test('debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe demostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    const { alt, src } = screen.getByRole('img');
    expect(src).toBe(url + '/');
    expect(alt).toBe(title);
  });

  test('debe demostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
