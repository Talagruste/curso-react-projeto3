import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('Should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(screen.getByRole('heading', { name: 'Olá mundo' }))
      .toBeInTheDocument;
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('Should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(screen.getByRole('img', { name: 'Olá mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
