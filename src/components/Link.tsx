import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { TypographyProps } from '@material-ui/core/Typography';
import isUrl from 'is-url';

type LinkProps = GatsbyLinkProps<{}> & MuiLinkProps & TypographyProps;

const Link: React.ElementType = React.forwardRef<HTMLAnchorElement, LinkProps>(({
  to,
  // MaterialUI LinkProps
  children,
  classes,
  color,
  TypographyClasses,
  underline,
  variant,
  // A part of GatsbyLinkProps
  activeClassName,
  activeStyle,
  partiallyActive,
  replace,
  ...other
}, ref) => {
  const muiLinkProps = Object.fromEntries(Object.entries({
    classes,
    color,
    TypographyClasses,
    underline,
    variant,
  }).filter(([, value]) => value !== undefined));

  const gatsbyLinkProps = Object.fromEntries(Object.entries({
    activeClassName,
    activeStyle,
    partiallyActive,
    replace,
  }).filter(([, value]) => value !== undefined));

  return isUrl(to) ? (
    <MuiLink
      href={ to }
      innerRef={ ref }
      { ...muiLinkProps }
      { ...other }
    >
      { children }
    </MuiLink>
  ) : (
    <MuiLink
      component={ GatsbyLink }
      to={ to }
      innerRef={ ref }
      { ...muiLinkProps }
      { ...gatsbyLinkProps }
      { ...other }
    >
      { children }
    </MuiLink>
  );
});
Link.displayName = 'Link';

export default Link;
