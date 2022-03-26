import { Stack } from '@chakra-ui/layout';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import { Logo } from './Logo';

export function HeaderContent() {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Logo />
      <ColorSchemeToggle />
    </Stack>
  );
}
