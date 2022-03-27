import { NextLink } from '@mantine/next';
import { Text } from '@mantine/core';
import * as React from 'react';

export function Logo({ style }: any) {
  return (
    <NextLink href="/">
      <Text
        sx={style}
        weight="bold"
        variant="gradient"
        gradient={{ from: 'violet', to: 'teal', deg: 45 }}

      >
        ajnart.fr
      </Text>
    </NextLink>
  );
}
