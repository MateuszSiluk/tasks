import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'lib-three-pictures-in-arow',
  templateUrl: './three-pictures-in-arow.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreePicturesInARowComponent {

  //TODO Make DTO for pictures and connect to firebase
  pictures$ = of([
    {
      name: 'test',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/4a54/edcf/1ae0a1a97c1d55fff83be7b5d93e6c59?Expires=1649030400&Signature=bxRFk4~0thtHpzbptBpAugnVSDig2z3vKkexFMXCTk4d6hhehzUAE6HON6Uuu7rwVIkPaL8fvWo7myumBf-sMfcPlOjrxigt~g39XCtObvVnIIHSCYbVm2GAmKqHhj6AJ43HbhebNF8wuR8TdnHiZBr1SW~3ilRvhu1wuASHpbP~Z~7gDDqj~QMgaYJfwgI9x8GHgG9q3foUwwf0FkbYfkH50q4Or~IkMK~r8YVxZYm2utvkHFoR7LMotD8q8vJfxooCuVIS-GVn6qIY4TICR9hfkcumGnxeLkUdgrY2yxREgZGlvEJXJlpHls~Cm1Am2oo~Em4vTykAlNKWni02Yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      name: 'test',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/dc1b/5002/52b4ffa2737388d8f81c869924c64984?Expires=1649030400&Signature=fj38LNalYBs~qAS-KKlRlYbulXI6VMXKxv5Dl1WUHYYSr4D0FrG2NYXuwI2mCVwekcSANMR~XyX-TYOq0H33TxLC3aYJroGKaakremHzC2pE7vF4evPwdVbyRI-~aGPPlXg3hS5Uezfq~kA7uwRBxm8Er3Fliiz~nGFSc7wKFWyW4tNNdlqJtgInQabm5SQ3VgLcq-hsmL8p6qAZOdd9NECtxOyr~Hzni0R9gYID0VtEWLJqUhgJtYObWIfSPZmz0Izim3RVrjEMdz9uMsgEtBKsHDP1CR1g1cF6Oi51M9KYjOjRoqn9fRo1oBJ9vB5vp0ao5iVkSHYNAwfmQRqtVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      name: 'test',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/3467/c917/a5ffb2a9527450441ebe0b5ba1714e2e?Expires=1649030400&Signature=dgMwbrjAEDgE5~Bppc37iuXfxm6oGKPHukV61RZatltrl0NhJ7qF42G8IQeFV-s3GygYftMdxRr5-lRYs6beX0tlETrtUjIDcxvTEj5ke10rtlRfgP6SFfo5CRgqaETL5Z-wf6r5OUVen6fQ1CMCDzQF-rcuif9IQJT6uyGeuANe~5N0cAoDNWd~FPh92R~mRpC2vXWCu6YWiGVI3fZqgPn6DQlEU0~M-wfZOPLGA93q5pw7C6tKFgohFjGD6Z76JOIY7qiG8jCHPQd0wBXkjFWXTWM4O4DgHqiXT~i4gYnOrlmdoHnFkKO4HokVSvlwD~x0Vu08itC55uxqU~axiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ]);
}
