import translateTo from './translator'

const text = "quiero trabajar con los mejores"
const targetLang = 'en'

console.log(translateTo);
async function call() {
    try {
        let result = await translateTo(text, targetLang)
        console.log(result[0])
    } catch(e) {
        console.error("ERROR: " + e);
    }
}

call();



