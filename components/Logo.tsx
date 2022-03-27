import { NextLink } from '@mantine/next';
import { Text } from '@chakra-ui/react';
import * as React from 'react';

export function Logo({ style }: any) {
  return (
    <NextLink href="/">
      <Text
        sx={style}
        align="center"
        textAlign="center"
        fontWeight="bold"
        bgClip="text"
        bgGradient="linear-gradient(90deg, #16BFFD, #CB3066)"
      >
        ajnart.fr
      </Text>
    </NextLink>
  );
}
