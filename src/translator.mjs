"use strict";

import Translate from '@google-cloud/translate'

const translate = new Translate({
  keyFilename: './src/translator.conf.json',
})


async function translateTo(content, targetLang) {
  return await translate.translate(content, targetLang)
}

export default translateTo