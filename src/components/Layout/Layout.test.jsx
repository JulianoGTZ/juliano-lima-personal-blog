import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import Layout from './Layout';

describe('Layout', () => {
  const props = {
    ...siteMetadata,
    children: <div>some content</div>,
    description: 'test',
    title: 'test',
    socialImage: 'some-path.jpg',
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => render(props),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Layout {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
