import { ChainMap, MultisigIsmConfig } from '@hyperlane-xyz/sdk';

export const multisigIsmConfig: ChainMap<MultisigIsmConfig> = {
  polygonzkevm: {
    threshold: 1,
    validators: [
      '0x5b19a65c81302d85e86f3bdee2462a36f9ed2b2f',
    ]
  },
};
