import { generateCliCommands } from '@/utils/utils';

import code from '@content/Components/Dock/Dock.jsx?raw';
import css from '@content/Components/Dock/Dock.css?raw';

export const dock = {
  ...(generateCliCommands('Components/Dock', ['default'])),
  installation: `npm i @react-spring/web`,
  usage: `import Dock from './Dock';

<Dock collapsible={false} position="left" responsive="bottom" />`,
  code,
  css
}