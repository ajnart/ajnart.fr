import { Text } from '@mantine/core';
import * as React from 'react';

export function Logo({ style }: any) {
  return (
    <Text
      sx={style}
      weight="bold"
      variant="gradient"
      gradient={{ from: 'blue', to: 'grape', deg: 145 }}
    >
      ajnart.fr
    </Text>
  );
}
