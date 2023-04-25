import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('Should render with default values', () => {
    const { debug } = renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('Should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('Should render correct sizes', () => {
    renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('Should render correct font size when screen < 768px', () => {
    const { rerender } = renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('Should render with uppercase', () => {
    renderTheme(<Heading uppercase>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('Should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
